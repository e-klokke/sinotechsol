"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { track } from "@vercel/analytics";
import { inquiry } from "@/content/copy";
import { bookingLink, contactEmail } from "@/content/site";
import { ctaButtonClass } from "@/lib/cta";

type Status = "idle" | "submitting" | "success" | "error";
type Intent = "general" | "diagnostic";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-3 text-base text-text-primary focus:border-accent focus:outline-none";

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const needId = useId();
  const honeypotId = useId();
  const errorId = useId();

  const [intent, setIntent] = useState<Intent>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intent") === "diagnostic") setIntent("diagnostic");
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          need,
          intent,
          company_website: honeypot,
        }),
      });
      const payload = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!response.ok || !payload?.ok) {
        setStatus("error");
        setError(payload?.error || inquiry.error);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setNeed("");
      try {
        track("contact_form_submit", { intent });
      } catch {
        // A tracking failure must not hide a successful inquiry.
      }
    } catch {
      setStatus("error");
      setError(inquiry.error);
    }
  }

  const scheduleUrl = bookingLink();

  return (
    <div id="inquiry">
      {intent === "diagnostic" && (
        <p className="mb-6 text-center text-base text-text-secondary">{inquiry.diagnosticNote}</p>
      )}

      {status === "success" ? (
        <p role="status" className="text-center text-base text-emerald-200">
          {inquiry.success}
        </p>
      ) : (
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor={honeypotId}>{inquiry.honeypotLabel}</label>
            <input
              id={honeypotId}
              name="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor={nameId} className="mb-2 block text-sm font-medium text-text-secondary">
              {inquiry.nameLabel}
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={emailId} className="mb-2 block text-sm font-medium text-text-secondary">
              {inquiry.emailLabel}
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={companyId} className="mb-2 block text-sm font-medium text-text-secondary">
              {inquiry.companyLabel}
            </label>
            <input
              id={companyId}
              name="company"
              type="text"
              autoComplete="organization"
              required
              maxLength={150}
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={needId} className="mb-2 block text-sm font-medium text-text-secondary">
              {inquiry.needLabel}
            </label>
            <textarea
              id={needId}
              name="need"
              required
              maxLength={4000}
              rows={5}
              value={need}
              onChange={(event) => setNeed(event.target.value)}
              aria-describedby={status === "error" ? errorId : undefined}
              className={inputClass}
            />
          </div>

          {status === "error" && (
            <p id={errorId} role="alert" className="text-base text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className={ctaButtonClass}
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
          >
            {status === "submitting"
              ? inquiry.submitting
              : intent === "diagnostic"
                ? inquiry.diagnosticSubmit
                : inquiry.submit}
          </button>
        </form>
      )}

      <p className="mt-8 text-center text-base text-text-secondary">
        {inquiry.fallbackLabel}{" "}
        <a className="text-accent underline hover:text-accent-hover" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>

      {scheduleUrl && (
        <p className="mt-4 text-center text-base">
          <a className="text-accent underline hover:text-accent-hover" href={scheduleUrl}>
            {inquiry.bookingLabel}
          </a>
        </p>
      )}
    </div>
  );
}
