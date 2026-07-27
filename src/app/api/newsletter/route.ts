import { NextResponse } from "next/server";

/**
 * Newsletter subscription endpoint.
 *
 * Wired for Resend (https://resend.com) but stays a safe no-op until
 * RESEND_API_KEY and RESEND_AUDIENCE_ID are set in the environment —
 * see README.md "Going live" for setup.
 */
export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.info(`[newsletter] Resend not configured — would have subscribed: ${email}`);
    return NextResponse.json({ ok: true, mode: "unconfigured" });
  }

  const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Subscription failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
