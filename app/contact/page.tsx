import type { Metadata } from "next";
import { contact } from "@/content/copy";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sino Technology Solutions. Email: info@sinotechsol.com. Based in Lisbon, Portugal and Tampa, Florida.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-12 text-center">
          {contact.sectionTitle}
        </h1>

        <div className="max-w-2xl mx-auto text-center mb-16">
          <a
            href="mailto:info@sinotechsol.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            info@sinotechsol.com
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {contact.addresses.lisbon.city}, {contact.addresses.lisbon.country}
            </h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {contact.addresses.tampa.city}, {contact.addresses.tampa.state}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
