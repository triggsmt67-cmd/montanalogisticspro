import { NextRequest, NextResponse } from "next/server";

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

// Basic email regex — enough for server-side sanity check
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  if (body.website || body.phone_confirm) {
    // Silently accept but do nothing — don't tip off the bot
    return NextResponse.json({ success: true });
  }

  // ── Time-on-page check ────────────────────────────────────────────────────
  // A real user takes at least a few seconds to fill out a multi-step form.
  const submittedAt = Number(body.submittedAt);
  const loadedAt = Number(body.loadedAt);
  if (!submittedAt || !loadedAt || submittedAt - loadedAt < 3000) {
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

  // ── Process submission ────────────────────────────────────────────────────
  // TODO: Forward to your CRM / email provider (Resend, SendGrid, etc.)
  // Example: await sendLeadEmail({ name, email, volume, friction });
  console.log("[submit-plan] New lead:", { name, email, volume, friction, ip });

  return NextResponse.json({ success: true });
}
