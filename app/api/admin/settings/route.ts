import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

export async function GET() {
  try {
    const content = await fs.readFile(dataPath('admin-config.json'), 'utf8');
    const config = JSON.parse(content) as AdminConfig;
    return NextResponse.json(config);
  } catch {
    return NextResponse.json<AdminConfig>({
      notificationEmail: '',
      emailEnabled: false,
      smtpHost: '',
      smtpPort: 587,
      smtpUser: '',
      smtpPassword: '',
      smtpSecure: false,
      fromEmail: '',
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<AdminConfig>;
    const config: AdminConfig = {
      notificationEmail: typeof body.notificationEmail === 'string' ? body.notificationEmail.trim() : '',
      emailEnabled: Boolean(body.emailEnabled),
      smtpHost: typeof body.smtpHost === 'string' ? body.smtpHost.trim() : '',
      smtpPort: typeof body.smtpPort === 'number' ? body.smtpPort : 587,
      smtpUser: typeof body.smtpUser === 'string' ? body.smtpUser.trim() : '',
      smtpPassword: typeof body.smtpPassword === 'string' ? body.smtpPassword : '',
      smtpSecure: Boolean(body.smtpSecure),
      fromEmail: typeof body.fromEmail === 'string' ? body.fromEmail.trim() : '',
    };

    await fs.writeFile(dataPath('admin-config.json'), JSON.stringify(config, null, 2), 'utf8');
    return NextResponse.json(config);
  } catch {
    return NextResponse.json(
      { message: 'Unable to update settings.' },
      { status: 500 }
    );
  }
}

