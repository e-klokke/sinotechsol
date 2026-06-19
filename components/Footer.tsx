import Link from "next/link";
import { footer, contact } from "@/content/copy";

export function Footer() {
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
      </div>
    </footer>
  );
}
