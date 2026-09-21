"use client";

import { useState } from "react";
import Link from "next/link";
import { hero } from "@/content/copy";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="glass fixed left-0 right-0 top-0 z-50 border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Company Name */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-xl font-bold text-text-primary transition-all duration-300 hover:scale-105 hover:text-accent"
          >
            {hero.companyName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Services
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Capabilities
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="group relative text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              About
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/blog"
              className="group relative text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Blog
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="group relative text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Contact
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-primary transition-colors hover:text-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-4 border-t border-white/10 pb-4 pt-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-text-secondary transition-colors hover:text-text-primary"
              >
                Services
              </Link>
              <Link
                href="/#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-text-secondary transition-colors hover:text-text-primary"
              >
                Capabilities
              </Link>
              <Link
                href="/about"
                className="text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
