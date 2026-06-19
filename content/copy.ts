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
  certifications: string[];
  education: string;
  experience: string[];
  government: {
    registry: string;
    naics: string[];
  };
  headquarters: string;
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
      description: "SAM.gov registered. NAICS: 541512, 541519, 541513, 517110, 334111, 541330. Cleared for federal, state, and local contracts.",
    },
    {
      title: "VAR: Value Added Reseller",
      description: "Authorized reseller for enterprise hardware and software. Cisco, Dell, Oracle, HP, Lenovo. Competitive pricing with implementation support.",
    },
  ],
};

export const about: AboutContent = {
  pageTitle: "About",
  name: "Eric Bell",
  title: "Founder and CEO",
  certifications: ["CEH Master"],
  education: "MS in Digital and Computer Forensics",
  experience: ["AT&T", "CenturyLink", "Duke Medical Center", "Paycom"],
  government: {
    registry: "SAM.gov registered",
    naics: ["541512", "541519", "541513", "517110", "334111", "541330"],
  },
  headquarters: "Lisbon, Portugal and Tampa, Florida",
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
    { text: "Privacy", href: "#" },
    { text: "Terms", href: "#" },
  ],
};

export const partners = {
  logos: ["Cisco", "Dell", "Oracle", "HP", "Lenovo"],
};
