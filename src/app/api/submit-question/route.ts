import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Rate Limiting (in-memory per instance) ───────────────────────────────────
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildQuestionEmail(data: {
  name: string;
  email: string;
  phone: string;
  question: string;
  ip: string;
  submittedAt: string;
}): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const question = escapeHtml(data.question);
  const ip = escapeHtml(data.ip);
  const submittedAt = escapeHtml(data.submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Question — ${name}</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0d0d;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0d;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#064e3b 0%,#0e7490 100%);border-radius:16px 16px 0 0;padding:40px 40px 36px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.6);">Such Group e-Commerce</p>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2;">💬 New Question Received</h1>
              <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.5;">Someone submitted a question through the website. Here's what they asked.</p>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="background:#161616;padding:32px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Contact Info</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:16px 24px;border-bottom:1px solid #2a2a2a;">
                    <p style="margin:0;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Name</p>
                    <p style="margin:5px 0 0;font-size:16px;font-weight:700;color:#f9fafb;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 24px;border-bottom:1px solid #2a2a2a;">
                    <p style="margin:0;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email</p>
                    <p style="margin:5px 0 0;font-size:16px;font-weight:700;"><a href="mailto:${email}" style="color:#34d399;text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding:16px 24px;">
                    <p style="margin:0;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Phone</p>
                    <p style="margin:5px 0 0;font-size:16px;font-weight:700;color:#f9fafb;">${phone}</p>
                  </td>
                </tr>` : ""}
              </table>
            </td>
          </tr>

          <!-- Question -->
          <tr>
            <td style="background:#161616;padding:24px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Their Question</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #2a2a2a;border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0;font-size:15px;color:#e5e7eb;line-height:1.7;white-space:pre-wrap;">${question}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="background:#161616;padding:24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(6,78,59,0.4) 0%,rgba(14,116,144,0.4) 100%);border:1px solid rgba(52,211,153,0.25);border-radius:12px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;">
                          <p style="margin:0;font-size:15px;font-weight:700;color:#f9fafb;">Ready to reply?</p>
                          <p style="margin:4px 0 0;font-size:13px;color:#9ca3af;">Hit reply while the question is fresh.</p>
                        </td>
                        <td align="right" style="padding-left:16px;vertical-align:middle;white-space:nowrap;">
                          <a href="mailto:${email}?subject=Re%3A%20Your%20Question%20%E2%80%94%20Such%20Group%20e-Commerce&body=Hi%20${encodeURIComponent(data.name.split(" ")[0])}%2C%0A%0AThanks%20for%20reaching%20out!%20"
                            style="display:inline-block;background:linear-gradient(135deg,#10b981,#06b6d4);color:#000000;font-size:13px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:100px;">
                            Reply Now →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Metadata -->
          <tr>
            <td style="background:#161616;padding:20px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #222;border-radius:10px;">
                <tr>
                  <td style="padding:14px 22px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:50%;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Submitted At</p>
                          <p style="margin:4px 0 0;font-size:12px;color:#6b7280;">${submittedAt}</p>
                        </td>
                        <td style="width:50%;vertical-align:top;text-align:right;">
                          <p style="margin:0;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;font-weight:600;">IP Address</p>
                          <p style="margin:4px 0 0;font-size:12px;color:#6b7280;">${ip}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#161616;padding:24px 40px 32px;border-radius:0 0 16px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #222;padding-top:20px;">
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:12px;color:#4b5563;line-height:1.6;">
                      Sent automatically by <strong style="color:#6b7280;">Such Group e-Commerce</strong>.<br/>
                      <a href="https://suchgroupecommerce.com" style="color:#374151;text-decoration:none;">suchgroupecommerce.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // Rate limit check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // ── Honeypot trap ──────────────────────────────────────────────────────────
  if (body.website || body.phone_confirm || body.company_url || body.hp_check) {
    // Return fake success to waste bot resources
    return NextResponse.json({ success: true });
  }

  // ── Time-on-page check ─────────────────────────────────────────────────────
  const submittedAt = Number(body.submittedAt);
  const loadedAt = Number(body.loadedAt);
  if (submittedAt && loadedAt && submittedAt - loadedAt < 500) {
    return NextResponse.json(
      { success: false, error: "Submission rejected." },
      { status: 400 }
    );
  }

  const name     = String(body.name     ?? "").trim();
  const email    = String(body.email    ?? "").trim();
  const phone    = String(body.phone    ?? "").trim();
  const question = String(body.question ?? "").trim();

  if (!name || name.length > 100)
    return NextResponse.json({ success: false, error: "Please enter your name." }, { status: 400 });
  if (!email || !EMAIL_RE.test(email) || email.length > 254)
    return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
  if (phone && phone.length > 30)
    return NextResponse.json({ success: false, error: "Phone number is too long." }, { status: 400 });
  if (!question || question.length < 5)
    return NextResponse.json({ success: false, error: "Please enter your question." }, { status: 400 });
  if (question.length > 2000)
    return NextResponse.json({ success: false, error: "Question is too long (max 2,000 characters)." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[submit-question] RESEND_API_KEY is not configured in environment variables.");
    return NextResponse.json({ success: true });
  }

  try {
    const resend = new Resend(apiKey);
    const primaryEmail = process.env.LEAD_TO_EMAIL ?? "trevor@truepath406.com";
    const toEmails = [primaryEmail, "montanalogisticspro@gmail.com", "todds@sgigf.com"];

    const { error } = await resend.emails.send({
      from:    "Such Group e-Commerce <leads@suchgroupecommerce.com>",
      to:      toEmails,
      replyTo: email,
      subject: `💬 New Question from ${name}`,
      html: buildQuestionEmail({
        name,
        email,
        phone,
        question,
        ip,
        submittedAt: new Date().toUTCString(),
      }),
    });

    if (error) {
      console.error("[submit-question] Resend error:", error);
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[submit-question] Unexpected error during email dispatch:", err);
    return NextResponse.json({ success: true });
  }
}
