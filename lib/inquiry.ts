import { createHash } from "crypto";
import { Resend } from "resend";
import { contactEmail } from "@/content/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquiryIntent = "general" | "diagnostic";

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  need: string;
  intent: InquiryIntent;
};

export type InquiryDecision =
  | { type: "honeypot" }
  | { type: "invalid"; error: string }
  | { type: "accepted"; inquiry: Inquiry };

function asString(value: unknown): string {
  return typeof value === "string" ? value.replace(/\u0000/g, "") : "";
}

function oneLine(value: unknown, max: number): string {
  return asString(value).replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function multiLine(value: unknown, max: number): string {
  return asString(value).replace(/\r\n/g, "\n").trim().slice(0, max);
}

export function assessInquiry(body: unknown): InquiryDecision {
  if (!body || typeof body !== "object") {
    return { type: "invalid", error: "Enter your name, email, company, and what you need." };
  }

  const record = body as Record<string, unknown>;
  const honeypot = record.company_website;
  const honeypotFilled =
    typeof honeypot === "string"
      ? honeypot.trim().length > 0
      : honeypot != null && honeypot !== "";
  if (honeypotFilled) return { type: "honeypot" };

  const name = oneLine(record.name, 100);
  const email = oneLine(record.email, 200).toLowerCase();
  const company = oneLine(record.company, 150);
  const need = multiLine(record.need, 4000);
  const intent: InquiryIntent = record.intent === "diagnostic" ? "diagnostic" : "general";

  if (!name || !email || !company || !need) {
    return { type: "invalid", error: "Enter your name, email, company, and what you need." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { type: "invalid", error: "Enter a valid email address." };
  }

  return { type: "accepted", inquiry: { name, email, company, need, intent } };
}

export function originAllowed(origin: string | null): boolean {
  if (!origin) return true;

  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }

  const host = url.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
  if (host === "www.sinotechsol.com" || host === "sinotechsol.com") return true;
  if (host.endsWith(".vercel.app")) return true;
  return false;
}

function idempotencyKey(inquiry: Inquiry): string {
  const bucket = Math.floor(Date.now() / (5 * 60 * 1000));
  const digest = createHash("sha256")
    .update(`${inquiry.email}|${inquiry.name}|${inquiry.company}|${inquiry.need}|${inquiry.intent}|${bucket}`)
    .digest("hex")
    .slice(0, 48);
  return `contact/${digest}`;
}

export async function deliverInquiry(
  inquiry: Inquiry,
): Promise<{ ok: true; mocked?: boolean } | { ok: false }> {
  const to = process.env.CONTACT_EMAIL?.trim() || contactEmail;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `Sino Technology Solutions <${contactEmail}>`;
  const subject =
    inquiry.intent === "diagnostic"
      ? `Diagnostic request from ${inquiry.name}`
      : `Website inquiry from ${inquiry.name}`;
  const text = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company}`,
    `Request type: ${inquiry.intent === "diagnostic" ? "Free 30-minute diagnostic" : "General inquiry"}`,
    "",
    "What they need:",
    inquiry.need,
  ].join("\n");

  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] mock delivery: ${subject}`);
      return { ok: true, mocked: true };
    }
    console.error("[contact] RESEND_API_KEY is not set");
    return { ok: false };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send(
    {
      from,
      to: [to],
      replyTo: inquiry.email,
      subject,
      text,
    },
    { idempotencyKey: idempotencyKey(inquiry) },
  );

  if (error) {
    console.error("[contact] resend error:", error.message);
    return { ok: false };
  }

  return { ok: true };
}
