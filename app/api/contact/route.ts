import { NextResponse } from "next/server";
import { assessInquiry, deliverInquiry, originAllowed } from "@/lib/inquiry";
import { clientIp, consumeRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const RATE_LIMIT_MESSAGE =
  "Too many messages from this network. Email info@sinotechsol.com or try again later.";
const SEND_FAILURE_MESSAGE =
  "We could not send that message. Please use the email link on the page.";

function json(body: { ok: boolean; error?: string }, status: number, retryAfter?: number) {
  const headers = new Headers();
  if (retryAfter) headers.set("Retry-After", String(retryAfter));
  return NextResponse.json(body, { status, headers });
}

export async function POST(request: Request) {
  if (!originAllowed(request.headers.get("origin"))) {
    return json({ ok: false, error: SEND_FAILURE_MESSAGE }, 403);
  }

  const raw = await request.text();
  if (raw.length > 20_000) {
    return json({ ok: false, error: "That message is too long." }, 400);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Enter your name, email, company, and what you need." }, 400);
  }

  const decision = assessInquiry(body);
  const ip = clientIp(request.headers);

  if (decision.type === "honeypot" || decision.type === "accepted") {
    const limit = consumeRateLimit(ip);
    if (!limit.allowed) {
      return json({ ok: false, error: RATE_LIMIT_MESSAGE }, 429, limit.retryAfterSeconds);
    }
  }

  if (decision.type === "honeypot") {
    return json({ ok: true }, 200);
  }

  if (decision.type === "invalid") {
    return json({ ok: false, error: decision.error }, 400);
  }

  const delivery = await deliverInquiry(decision.inquiry);
  if (!delivery.ok) {
    return json({ ok: false, error: SEND_FAILURE_MESSAGE }, 503);
  }

  return json({ ok: true }, 200);
}
