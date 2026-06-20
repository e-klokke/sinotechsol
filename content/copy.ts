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
  photoPath: "/eric-bell.jpg",
  photoAlt: "Eric Bell, Founder and CEO of Sino Technology Solutions",
  biography: [
    "I spent a decade as a professional basketball player across five European countries. Denmark, Portugal, Estonia, Norway, Germany. Five championships. Eight MVP awards. A Hall of Fame induction at SUNY New Paltz.",
    "That career taught me something that has nothing to do with basketball: how to operate under pressure, in unfamiliar environments, with zero margin for error. Every season was a new city, a new language, a new system to learn and perform in immediately. There was no onboarding period. You showed up and you delivered, or you went home.",
    "When I transitioned off the court, I brought that same operating standard into enterprise technology. Over 15 years, I built and secured IT environments at AT&T, CenturyLink, Duke Medical Center, and Paycom. Networks that could not go down. Systems that had to pass compliance audits. Infrastructure that real operations depended on every day.",
    "I earned a Master of Science in Digital and Computer Forensics and a Certified Ethical Hacker (CEH) Master certification. Not because credentials look good on a wall, but because the work I do requires knowing exactly how systems break and how to prove what happened when they do.",
    "I founded Sino Technology Solutions to do this work on my terms: direct relationships, no layers of account managers, no junior consultants learning on your environment. When you engage STS, you get me. Fifteen years of infrastructure engineering, cybersecurity operations, and applied AI research, backed by VAR partnerships with Cisco, Dell, Oracle, HP, and Lenovo.",
    "STS is headquartered in Lisbon, Portugal and Tampa, Florida, registered on SAM.gov, and cleared for federal, state, and local contracts.",
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
    { text: "Privacy", href: "#" },
    { text: "Terms", href: "#" },
  ],
};

export const partners = {
  logos: ["Cisco", "Dell", "Oracle", "HP", "Lenovo"],
};
