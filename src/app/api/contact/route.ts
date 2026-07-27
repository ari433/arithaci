import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Wired for Resend but stays a safe no-op until
 * RESEND_API_KEY and CONTACT_EMAIL are set — see README.md "Going live".
 */
export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Please fill out every field with a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.info(`[contact] Resend not configured — message from ${email}: ${message}`);
    return NextResponse.json({ ok: true, mode: "unconfigured" });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "arithaci.com <hello@arithaci.com>",
      to: contactEmail,
      reply_to: email,
      subject: `New message from ${name}`,
      text: message,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Message failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
