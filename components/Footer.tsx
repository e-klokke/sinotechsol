import Link from "next/link";
import { footer, contact } from "@/content/copy";
import { legalIdentityLines } from "@/content/site";

export function Footer() {
  const identityLines = legalIdentityLines();

  return (
    <footer className="bg-navy-700 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-text-tertiary text-sm">
            {footer.copyright}
          </div>

          {/* Dual Headquarters */}
          <div className="text-text-secondary text-sm text-center md:text-left">
            {contact.addresses.lisbon.city}, {contact.addresses.lisbon.country} and {contact.addresses.tampa.city}, {contact.addresses.tampa.state}
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {footer.links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        {identityLines.length > 0 && (
          <div className="mt-8 space-y-1 text-center text-sm text-text-tertiary">
            {identityLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
