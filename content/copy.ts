// All copy for Sino Technology Solutions website
// Per CLAUDE.md: No em dashes or en dashes in any string

export interface ServiceCard {
  title: string;
  description: string;
}

export interface CapabilityCard {
  title: string;
  description: string;
}

export interface HeroContent {
  companyName: string;
  headline: string;
  subheadline?: string;
  cta: string;
}

export interface ServicesContent {
  sectionTitle: string;
  cards: ServiceCard[];
}

export interface CapabilitiesContent {
  sectionTitle: string;
  cards: CapabilityCard[];
}

export interface AboutContent {
  pageTitle: string;
  name: string;
  title: string;
  biography: string[];
  photoPath: string;
  photoAlt: string;
}

export interface ContactContent {
  sectionTitle: string;
  addresses: {
    lisbon: {
      city: string;
      country: string;
    };
    tampa: {
      city: string;
      state: string;
    };
  };
}

export interface FooterContent {
  copyright: string;
  links: {
    text: string;
    href: string;
  }[];
}

export const hero: HeroContent = {
  companyName: "Sino Technology Solutions",
  headline: "We implement IT that sustains and scales.",
  subheadline: "Enterprise infrastructure, cybersecurity, and AI solutions for organizations that can't afford downtime or guesswork.",
  cta: "Get Started",
};

export const pageMeta = {
  home: {
    title: "Sino Technology Solutions: IT, Cybersecurity, AI",
    description:
      "Enterprise IT infrastructure, cybersecurity, and AI research consulting. Lisbon, Portugal and Tampa, Florida.",
  },
  about: {
    title: "About",
    description:
      "Eric Bell, founder and CEO. 15+ years in enterprise IT, during and after a pro basketball career. CEH Master. Lisbon and Tampa.",
  },
  blog: {
    title: "Blog",
    description:
      "Insights on enterprise IT infrastructure, cybersecurity, and AI research from Sino Technology Solutions.",
  },
  contact: {
    title: "Contact",
    description:
      "Request a diagnostic or send a project inquiry to Sino Technology Solutions. Lisbon, Portugal and Tampa, Florida.",
  },
};

export const services: ServicesContent = {
  sectionTitle: "What We Do",
  cards: [
    {
      title: "IT Infrastructure",
      description: "Bad infrastructure costs you twice: once when it fails, and again when you rush to fix it. We design, build, and migrate enterprise systems built to last.",
    },
    {
      title: "Cybersecurity",
      description: "A breach doesn't start with the attack. It starts with what you missed. We run threat assessments, incident response, compliance audits, and forensic investigations so nothing gets missed.",
    },
    {
      title: "AI Research",
      description: "Applied AI R&D through our private lab: model evaluation, fine-tuning, RAG systems, edge inference, and proof-of-concept builds. Design and validate before you commit to cloud spend.",
    },
  ],
};

export const capabilities: CapabilitiesContent = {
  sectionTitle: "How We Deliver",
  cards: [
    {
      title: "IT Consulting and Sourcing",
      description: "Strategic technology advisory and procurement. We match the right solution to the problem, not the other way around.",
    },
    {
      title: "Government Contracting",
      description:
        "Available for federal, state, and local contract work. UEI and CAGE assigned. NAICS: 541512, 541519, 541513, 517110, 334111, 541330.",
    },
    {
      title: "Hardware and Software",
      description:
        "We source, deploy, and support hardware and software from Cisco, Dell, Oracle, HP, and Lenovo, with implementation support.",
    },
  ],
};

export const about: AboutContent = {
  pageTitle: "About",
  name: "Eric Bell",
  title: "Founder and CEO",
  photoPath: "/eric-bell.jpg",
  photoAlt: "Eric Bell, Founder and CEO of Sino Technology Solutions",
  biography: [
    "I spent a decade as a professional basketball player, from 2005 to 2015, across five European countries. Denmark, Portugal, Estonia, Norway, Germany. Five championships. Eight MVP awards. A Hall of Fame induction at SUNY New Paltz.",
    "That career taught me something that has nothing to do with basketball: how to operate under pressure, in unfamiliar environments, with zero margin for error. Every season was a new city, a new language, a new system to learn and perform in immediately. There was no onboarding period. You showed up and you delivered, or you went home.",
    "I brought that same operating standard into enterprise technology. Across 15+ years in enterprise IT, during and after my playing career, I built and secured IT environments at AT&T, CenturyLink, Duke Medical Center, and Paycom. Networks that could not go down. Systems that had to pass compliance audits. Infrastructure that real operations depended on every day.",
    "I earned a Master of Science in Digital and Computer Forensics and a Certified Ethical Hacker (CEH) Master certification. Not because credentials look good on a wall, but because the work I do requires knowing exactly how systems break and how to prove what happened when they do.",
    "I founded Sino Technology Solutions to do this work on my terms: direct relationships, no layers of account managers, no junior consultants learning on your environment. When you engage STS, you get me. That is 15+ years of infrastructure engineering, cybersecurity operations, and applied AI research. We source, deploy, and support hardware and software from Cisco, Dell, Oracle, HP, and Lenovo.",
    "STS is headquartered in Lisbon, Portugal and Tampa, Florida, and is available for federal, state, and local contract work. UEI and CAGE assigned.",
    "If your IT infrastructure needs to perform, your security posture needs to hold up under scrutiny, or your AI initiative needs a proof of concept before you commit budget, that is the conversation I was built for.",
  ],
};

export const contact: ContactContent = {
  sectionTitle: "Get in Touch",
  addresses: {
    lisbon: {
      city: "Lisbon",
      country: "Portugal",
    },
    tampa: {
      city: "Tampa",
      state: "Florida",
    },
  },
};

export const footer: FooterContent = {
  copyright: `© ${new Date().getFullYear()} Sino Technology Solutions. All rights reserved.`,
  links: [
    { text: "Privacy", href: "/privacy" },
    { text: "Terms", href: "/terms" },
  ],
};

export const pricing = {
  label: "Pricing on request",
  href: "/contact#inquiry",
};

export const partners = {
  caption: "Hardware and software we source, deploy, and support.",
  logos: ["Cisco", "Dell", "Oracle", "HP", "Lenovo"],
};

export const diagnosticCta = {
  slug: "document-fatigue-searching-for-files",
  label: "Request your free 30-minute diagnostic",
  href: "/contact?intent=diagnostic#inquiry",
};

export const inquiry = {
  diagnosticNote: "This request is for the free 30-minute diagnostic.",
  nameLabel: "Name",
  emailLabel: "Email",
  companyLabel: "Company",
  needLabel: "What do you need?",
  submit: "Send message",
  diagnosticSubmit: "Request diagnostic",
  submitting: "Sending...",
  success: "Thanks. We received your message and will reply by email.",
  error: "We could not send that message. Please use the email link below.",
  fallbackLabel: "Or email",
  bookingLabel: "Book a time",
  honeypotLabel: "Leave blank",
};
