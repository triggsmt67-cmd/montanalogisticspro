import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter (resets on server restart / per-instance)
// For production, swap this with Redis (e.g. Upstash) for persistence across instances.
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

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

// Basic email regex — enough for server-side sanity check
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Email Template ────────────────────────────────────────────────────────────
function buildLeadEmail(data: {
  name: string;
  email: string;
  volume: string;
  friction: string;
  ip: string;
  submittedAt: string;
  additionalFields?: Record<string, string>;
}): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const volume = escapeHtml(data.volume);
  const friction = escapeHtml(data.friction);
  const ip = escapeHtml(data.ip);
  const submittedAt = escapeHtml(data.submittedAt);
  const additionalFields = data.additionalFields;

  const frictionMap: Record<string, string> = {
    "Paying Too Much Sales Tax": "💸 Paying Too Much Sales Tax",
    "Slow Prep & Shipping Times": "🐢 Slow Prep & Shipping Times",
    "High Error Rates & Lost Units": "❌ High Error Rates & Lost Units",
    "Running Out of Space": "📦 Running Out of Space",
  };
  const frictionLabel = frictionMap[friction] ?? friction;

  const volumeMap: Record<string, string> = {
    "< 1,000 Units": "< 1,000 Units / mo",
    "1,000 - 5,000 Units": "1,000 – 5,000 Units / mo",
    "5,000 - 15,000 Units": "5,000 – 15,000 Units / mo",
    "15,000+ Units": "15,000+ Units / mo",
  };
  const volumeLabel = volumeMap[volume] ?? volume;

  // Build additional fields rows if present (Fit Review form)
  const additionalRows = additionalFields && Object.keys(additionalFields).length > 0
    ? Object.entries(additionalFields).map(([label, value], i, arr) => `
        <tr>
          <td style="padding:14px 24px;${i < arr.length - 1 ? "border-bottom:1px solid #2a2a2a;" : ""}">
            <p style="margin:0;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">${escapeHtml(label)}</p>
            <p style="margin:5px 0 0;font-size:14px;font-weight:600;color:#f9fafb;">${value ? escapeHtml(value) : "<em style='color:#4b5563'>Not provided</em>"}</p>
          </td>
        </tr>`).join("")
    : "";

  const hasAdditionalFields = additionalFields && Object.keys(additionalFields).length > 0;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — ${name}</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0d0d;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0d;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

          <!-- ── HEADER ───────────────────────────────────── -->
          <tr>
            <td style="background:linear-gradient(135deg,#064e3b 0%,#0e7490 100%);border-radius:16px 16px 0 0;padding:40px 40px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.6);">Such Group e-Commerce</p>
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2;">🎯 New Lead Submitted</h1>
                    <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.5;">Someone just completed the ${hasAdditionalFields ? "Fit Review" : "Custom Plan"} form. Here's everything they shared.</p>
                  </td>
                  <td align="right" valign="top" style="padding-left:16px;">
                    <div style="background:rgba(255,255,255,0.12);border-radius:50%;width:56px;height:56px;display:inline-block;text-align:center;line-height:56px;font-size:26px;">📬</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── CONTACT CARD ──────────────────────────────── -->
          <tr>
            <td style="background:#161616;padding:32px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Contact Info</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #2a2a2a;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:32px;vertical-align:middle;">
                          <span style="font-size:18px;">👤</span>
                        </td>
                        <td style="padding-left:12px;vertical-align:middle;">
                          <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Name</p>
                          <p style="margin:4px 0 0;font-size:17px;font-weight:700;color:#f9fafb;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:32px;vertical-align:middle;">
                          <span style="font-size:18px;">✉️</span>
                        </td>
                        <td style="padding-left:12px;vertical-align:middle;">
                          <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email Address</p>
                          <p style="margin:4px 0 0;font-size:17px;font-weight:700;"><a href="mailto:${email}" style="color:#34d399;text-decoration:none;">${email}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${hasAdditionalFields ? `
          <!-- ── FIT REVIEW FIELDS ─────────────────────────── -->
          <tr>
            <td style="background:#161616;padding:24px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Form Responses</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">
                ${additionalRows}
              </table>
            </td>
          </tr>
          ` : `
          <!-- ── BUSINESS DETAILS (Discovery Stepper) ─────── -->
          <tr>
            <td style="background:#161616;padding:24px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Business Details</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:48%;padding-right:8px;vertical-align:top;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #2a2a2a;border-radius:12px;">
                      <tr>
                        <td style="padding:20px 22px;">
                          <p style="margin:0 0 8px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Monthly Volume</p>
                          <p style="margin:0 0 6px;font-size:22px;">📦</p>
                          <p style="margin:0;font-size:15px;font-weight:700;color:#f9fafb;line-height:1.3;">${volumeLabel}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="width:52%;padding-left:8px;vertical-align:top;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #2a2a2a;border-radius:12px;">
                      <tr>
                        <td style="padding:20px 22px;">
                          <p style="margin:0 0 8px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Biggest Pain Point</p>
                          <p style="margin:0 0 6px;font-size:22px;">🔥</p>
                          <p style="margin:0;font-size:15px;font-weight:700;color:#f9fafb;line-height:1.3;">${frictionLabel}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `}

          <!-- ── QUICK REPLY CTA ───────────────────────────── -->
          <tr>
            <td style="background:#161616;padding:28px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(6,78,59,0.4) 0%,rgba(14,116,144,0.4) 100%);border:1px solid rgba(52,211,153,0.25);border-radius:12px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;">
                          <p style="margin:0;font-size:15px;font-weight:700;color:#f9fafb;">Ready to follow up?</p>
                          <p style="margin:4px 0 0;font-size:13px;color:#9ca3af;">Reply directly to ${name}'s inbox and strike while the iron is hot.</p>
                        </td>
                        <td align="right" style="padding-left:16px;vertical-align:middle;white-space:nowrap;">
                          <a href="mailto:${email}?subject=Your%20Strategy%20from%20Such%20Group%20e-Commerce&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AThanks%20for%20reaching%20out!%20I%27ve%20reviewed%20your%20info%20and%20wanted%20to%20connect.%0A%0A"
                            style="display:inline-block;background:linear-gradient(135deg,#10b981,#06b6d4);color:#000000;font-size:13px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:100px;letter-spacing:0.3px;">
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

          <!-- ── METADATA ──────────────────────────────────── -->
          <tr>
            <td style="background:#161616;padding:24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#111111;border:1px solid #222222;border-radius:10px;">
                <tr>
                  <td style="padding:16px 22px;">
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

          <!-- ── FOOTER ────────────────────────────────────── -->
          <tr>
            <td style="background:#161616;padding:28px 40px 32px;border-radius:0 0 16px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #222222;padding-top:24px;">
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:12px;color:#4b5563;line-height:1.6;">
                      This notification was sent automatically by <strong style="color:#6b7280;">Such Group e-Commerce</strong>.<br/>
                      Powered by <a href="https://suchgroupecommerce.com" style="color:#374151;text-decoration:none;">suchgroupecommerce.com</a>
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

// ── Customer Confirmation Email ───────────────────────────────────────────────
function buildCustomerEmail(data: {
  name: string;
  email: string;
  additionalFields: Record<string, string>;
}): string {
  const { name, additionalFields } = data;
  const firstName = name.split(" ")[0] || name;

  const rows = Object.entries(additionalFields).map(([label, value], i, arr) => `
    <tr>
      <td style="padding:14px 24px;${i < arr.length - 1 ? "border-bottom:1px solid #e5e7eb;" : ""}">
        <p style="margin:0;font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;font-weight:600;">${label}</p>
        <p style="margin:5px 0 0;font-size:14px;font-weight:600;color:#111827;">${value || "—"}</p>
      </td>
    </tr>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Estimate — Such Group e-Commerce</title>
</head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#064e3b 0%,#0e7490 100%);border-radius:16px 16px 0 0;padding:40px 40px 36px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.65);">Such Group e-Commerce</p>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2;">📋 Your Estimate Summary</h1>
              <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.75);line-height:1.5;">Hi ${firstName}, thanks for using our cost estimator. Here's a copy of everything you submitted — we'll follow up with a detailed quote shortly.</p>
            </td>
          </tr>

          <!-- Estimate Details -->
          <tr>
            <td style="background:#ffffff;padding:32px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">Your Estimate Details</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="background:#ffffff;padding:28px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(6,78,59,0.06) 0%,rgba(14,116,144,0.06) 100%);border:1px solid rgba(16,185,129,0.2);border-radius:12px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0;font-size:15px;font-weight:700;color:#111827;">What happens next?</p>
                    <p style="margin:8px 0 0;font-size:13px;color:#6b7280;line-height:1.6;">Our team will review your estimate and reach out within <strong>one business day</strong> with a detailed, itemized quote. If your job needs custom pricing, we'll explain exactly why instead of giving you a fake number.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Estimate Disclaimer -->
          <tr>
            <td style="background:#ffffff;padding:20px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#92400e;">Estimate Notes</p>
                    <p style="margin:0;font-size:13px;color:#78350f;line-height:1.6;">This is a ballpark estimate. It does not include carrier postage, oversized box charges, unusual prep needs, or quote-only services like FBM. Final pricing may change after inspection.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#ffffff;padding:28px 40px 32px;border-radius:0 0 16px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f3f4f6;padding-top:24px;">
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                      This summary was sent by <strong style="color:#6b7280;">Such Group e-Commerce</strong>.<br/>
                      <a href="https://suchgroupecommerce.com" style="color:#10b981;text-decoration:none;">suchgroupecommerce.com</a>
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
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip = getClientIp(req);
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
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // ── Honeypot check ─────────────────────────────────────────────────────────
  // Bots fill every field including hidden ones. Humans never see this field.
  if (body.website || body.phone_confirm || body.company_url || body.hp_check) {
    // Silently accept but do nothing — don't tip off the bot
    return NextResponse.json({ success: true });
  }

  // ── Time-on-page check ────────────────────────────────────────────────────
  // A real user takes at least 500ms to interact — catches instant bot posts.
  const submittedAt = Number(body.submittedAt);
  const loadedAt = Number(body.loadedAt);
  if (!submittedAt || !loadedAt || submittedAt - loadedAt < 500) {
    return NextResponse.json(
      { success: false, error: "Submission rejected." },
      { status: 400 }
    );
  }

  // ── Field validation ───────────────────────────────────────────────────────
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const volume = String(body.volume ?? "").trim();
  const friction = String(body.friction ?? "").trim();
  // Optional: structured fields from the Fit Review / Estimator forms
  const additionalFields = (
    body.additionalFields &&
    typeof body.additionalFields === "object" &&
    !Array.isArray(body.additionalFields)
  )
    ? (body.additionalFields as Record<string, string>)
    : undefined;

  // Whether to also send a confirmation copy to the customer
  const sendToCustomer = body.sendToCustomer === true;

  if (!name || name.length > 100) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid name." },
      { status: 400 }
    );
  }

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!volume || !friction) {
    return NextResponse.json(
      { success: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  // ── Send lead notification to business ───────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[submit-plan] RESEND_API_KEY is not configured in environment variables.");
    return NextResponse.json({ success: true });
  }

  const resend = new Resend(apiKey);
  const primaryEmail = process.env.LEAD_TO_EMAIL ?? "trevor@truepath406.com";
  const toEmails = [primaryEmail, "montanalogisticspro@gmail.com", "todds@sgigf.com"];

  try {
    const { error: leadError } = await resend.emails.send({
      from: "Such Group e-Commerce <leads@suchgroupecommerce.com>",
      to: toEmails,
      replyTo: email,
      subject: `🎯 New Lead: ${name} — ${volume}`,
      html: buildLeadEmail({
        name,
        email,
        volume,
        friction,
        ip,
        submittedAt: new Date(submittedAt).toUTCString(),
        additionalFields,
      }),
    });

    if (leadError) {
      console.error("[submit-plan] Resend lead error:", leadError);
    }
  } catch (err) {
    console.error("[submit-plan] Unexpected error sending lead email:", err);
  }

  // ── Optionally send estimate confirmation to the customer ─────────────────
  if (sendToCustomer && additionalFields) {
    // Fire-and-forget — don't block the response on this
    resend.emails.send({
      from: "Such Group e-Commerce <leads@suchgroupecommerce.com>",
      to: email,
      subject: `📋 Your Estimate Summary — Such Group e-Commerce`,
      html: buildCustomerEmail({ name, email, additionalFields }),
    }).catch((err) => console.error("[submit-plan] Customer email error:", err));
  }

  return NextResponse.json({ success: true });
}
