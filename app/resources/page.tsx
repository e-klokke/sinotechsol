import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Free downloads from Sino Technology Solutions: a small business cybersecurity self-assessment checklist and a scam and fraud protection guide for seniors and their families.",
};

const hotlines = [
  { name: "National Elder Fraud Hotline (U.S. Department of Justice)", display: "1-833-372-8311", tel: "+18333728311", note: "Mon–Fri, 10 a.m.–6 p.m. Eastern. For fraud against anyone age 60 or older." },
  { name: "AARP Fraud Watch Network Helpline", display: "1-877-908-3360", tel: "+18779083360", note: "Mon–Fri, 8 a.m.–8 p.m. Eastern. Help deciding if something is a scam, and support after one." },
  { name: "Eldercare Locator", display: "1-800-677-1116", tel: "+18006771116", note: "Connects older adults and families to local services." },
  { name: "Medicare fraud (1-800-MEDICARE)", display: "1-800-633-4227", tel: "+18006334227", note: "Report suspected Medicare fraud." },
  { name: "U.S. Postal Inspection Service", display: "1-877-876-2455", tel: "+18778762455", note: "If you mailed cash to a scammer." },
  { name: "National Do Not Call Registry", display: "1-888-382-1222", tel: "+18883821222", note: "Call from the phone you want to register." },
];

const reportOnline = [
  { name: "Report fraud to the FTC", href: "https://reportfraud.ftc.gov", label: "ReportFraud.ftc.gov" },
  { name: "Report online fraud to the FBI", href: "https://www.ic3.gov", label: "ic3.gov" },
  { name: "Identity theft recovery plan", href: "https://www.identitytheft.gov", label: "IdentityTheft.gov" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Free Resources</h1>
        <p className="text-gray-400 leading-relaxed mb-16 text-lg">
          Practical, plain-language security guides you can download and share.
        </p>

        <section className="mb-20" aria-labelledby="business">
          <h2 id="business" className="text-2xl md:text-3xl font-bold text-white mb-4">
            Small Business Cybersecurity Self-Assessment Checklist
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            25 yes/no checks covering passwords and MFA, backups, updates, email, devices, and incident readiness. It takes about 20 minutes, and you don&apos;t need to be technical.
          </p>
          <a
            href="/downloads/sino-small-business-cybersecurity-checklist.pdf"
            download
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Download the checklist (PDF)
          </a>
        </section>

        <section className="mb-20 border-t border-gray-600/30 pt-16" aria-labelledby="seniors">
          <h2 id="seniors" className="text-2xl md:text-3xl font-bold text-white mb-4">
            Scam &amp; Fraud Protection for Seniors and Their Families
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-lg">
            A large-print guide to the most common scams, a rule card to keep by the phone, a family conversation guide, what to do after a scam, and a directory of who to call.
          </p>
          <a
            href="/downloads/sino-senior-scam-fraud-protection-guide.pdf"
            download
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors mb-12"
          >
            Download the large-print guide (PDF)
          </a>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Stop, Hang Up, Verify</h3>
          <div className="grid gap-4 md:grid-cols-3 mb-8 text-lg">
            <div className="rounded-lg border border-white/10 p-6">
              <p className="font-bold text-white text-xl mb-2">Stop.</p>
              <p className="text-gray-400">If you feel scared, rushed, or excited, that&apos;s the scam working. Nothing real needs your money in the next five minutes.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <p className="font-bold text-white text-xl mb-2">Hang up.</p>
              <p className="text-gray-400">You are always allowed to hang up, close the email, or shut the door. It&apos;s not rude. It&apos;s smart.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <p className="font-bold text-white text-xl mb-2">Verify.</p>
              <p className="text-gray-400">Call back using a number you already know, like the one on the back of your card. Never use the number they gave you. Call family and ask for your code word.</p>
            </div>
          </div>
          <div className="rounded-lg border border-accent/40 p-6 mb-12 text-lg">
            <p className="font-bold text-white mb-2">Never, ever:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Pay with gift cards, wire transfers, crypto, a crypto ATM, gold, or cash to a courier</li>
              <li>Let a stranger control your computer</li>
              <li>Give your Social Security, Medicare, or bank numbers to someone who called you</li>
              <li>Keep it a secret because a caller told you to</li>
            </ul>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Who to call</h3>
          <ul className="space-y-4 mb-10">
            {hotlines.map((h) => (
              <li key={h.tel} className="rounded-lg border border-white/10 p-5">
                <p className="text-white font-medium">{h.name}</p>
                <a href={`tel:${h.tel}`} className="inline-block text-accent text-2xl font-bold my-1 py-1 hover:underline">
                  {h.display}
                </a>
                <p className="text-gray-400">{h.note}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Report online</h3>
          <ul className="space-y-2 mb-6 text-lg">
            {reportOnline.map((r) => (
              <li key={r.href} className="text-gray-400">
                {r.name}:{" "}
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm">
            Numbers were checked on official websites in October 2026 and can change. If one doesn&apos;t work, look it up on the official website. In an emergency, call 911.
          </p>
        </section>

        <div className="text-center pt-12 border-t border-gray-600/30">
          <p className="text-white text-xl mb-4">Want a hand securing your business or a loved one&apos;s devices?</p>
          <a
            href="mailto:info@sinotechsol.com?subject=Free%2020-minute%20security%20check-in"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Book a free 20-minute security check-in: email info@sinotechsol.com
          </a>
        </div>
      </div>
    </div>
  );
}
