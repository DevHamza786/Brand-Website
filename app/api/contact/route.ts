import { NextRequest, NextResponse } from 'next/server';

// Validate and sanitise; in production, send to Formspree, SendGrid, or CRM webhook.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic length checks
    if (String(name).length > 200 || String(email).length > 254 || String(message).length > 10000) {
      return NextResponse.json(
        { message: 'Invalid field length.' },
        { status: 400 }
      );
    }

    // TODO: Send email via SendGrid/Resend or POST to Formspree:
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(body) });
    // For now we simulate success so the form works in development.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: 'Server error. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
