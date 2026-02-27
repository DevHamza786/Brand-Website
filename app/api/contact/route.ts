import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

type AdminConfig = {
  notificationEmail: string;
  emailEnabled: boolean;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  smtpSecure: boolean;
  fromEmail: string;
};

function dataPath(file: string) {
  return path.join(process.cwd(), 'data', file);
}

async function readAdminConfig(): Promise<AdminConfig> {
  try {
    const content = await fs.readFile(dataPath('admin-config.json'), 'utf8');
    return JSON.parse(content) as AdminConfig;
  } catch {
    return {
      notificationEmail: '',
      emailEnabled: false,
      smtpHost: '',
      smtpPort: 587,
      smtpUser: '',
      smtpPassword: '',
      smtpSecure: false,
      fromEmail: '',
    };
  }
}

async function appendLead(lead: Lead) {
  const leadsFile = dataPath('leads.json');
  try {
    const content = await fs.readFile(leadsFile, 'utf8');
    const existing = JSON.parse(content) as Lead[];
    existing.unshift(lead);
    await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2), 'utf8');
  } catch {
    await fs.writeFile(leadsFile, JSON.stringify([lead], null, 2), 'utf8');
  }
}

async function sendNotificationEmail(config: AdminConfig, lead: Lead) {
  if (
    !config.emailEnabled ||
    !config.notificationEmail ||
    !config.smtpHost ||
    !config.smtpUser ||
    !config.smtpPassword ||
    !config.fromEmail
  ) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort || 587,
    secure: Boolean(config.smtpSecure),
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
  });

  const subject = `New website enquiry – ${lead.name}`;
  const text = `You’ve received a new enquiry from your website.

────────────────────────────────
CONTACT DETAILS
────────────────────────────────
Name:   ${lead.name}
Email:  ${lead.email}
${lead.phone ? `Phone:  ${lead.phone}\n` : ''}${lead.company ? `Company: ${lead.company}\n` : ''}Submitted: ${new Date(lead.createdAt).toLocaleString()}

────────────────────────────────
MESSAGE
────────────────────────────────
${lead.message}

────────────────────────────────
TO FOLLOW UP
────────────────────────────────
- Reply directly to this email, or copy the address above into your CRM.
- You can see this lead (and all others) in your admin portal at /admin.
`;

  await transporter.sendMail({
    from: config.fromEmail,
    to: config.notificationEmail,
    subject,
    text,
  });
}

// Validate, store lead, and send email based on admin SMTP settings
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone, company } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (String(name).length > 200 || String(email).length > 254 || String(message).length > 10000) {
      return NextResponse.json(
        { message: 'Invalid field length.' },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : undefined,
      company: company ? String(company) : undefined,
      message: String(message),
    };

    await appendLead(lead);

    const config = await readAdminConfig();
    try {
      await sendNotificationEmail(config, lead);
    } catch (emailErr) {
      console.error('Error sending notification email', emailErr);
      // Do not fail the form just because email failed.
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Server error. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}

