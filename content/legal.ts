export interface LegalContent {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const privacy: LegalContent = {
  title: "Privacy Policy",
  description:
    "How Sino Technology Solutions handles information associated with this website and email inquiries.",
  updated: "September 21, 2026",
  sections: [
    {
      heading: "Who this notice covers",
      paragraphs: [
        "This notice concerns the Sino Technology Solutions website at sinotechsol.com and inquiries sent through its email links. Sino Technology Solutions operates in Lisbon, Portugal and Tampa, Florida. For questions about this notice or your personal information, email info@sinotechsol.com.",
        "Information handled during a client project may be subject to a separate service agreement or privacy notice.",
      ],
    },
    {
      heading: "Information associated with your visit",
      paragraphs: [
        "When you visit, our hosting and content delivery providers receive technical information needed to deliver and secure the website, such as your IP address, requested URL, browser information, and request time. The website is hosted on Vercel, and blog content and images are provided through Sanity.",
        "The current website does not provide account registration, newsletter signup, online payment, or a contact form. Its contact links open your email application. If you send us an email, we receive your email address, the information you include, and any attachments.",
      ],
    },
    {
      heading: "Why information is used",
      paragraphs: [
        "Technical information is used to deliver the website, investigate errors, and protect it from abuse. Inquiry information is used to respond to your request, discuss potential services, and maintain the resulting business correspondence.",
        "Where European data protection law applies, these purposes rely on our legitimate interests in running a secure website and responding to business inquiries, or on taking steps at your request before entering a contract. Information may also be processed where necessary to meet a legal obligation.",
      ],
    },
    {
      heading: "Cookies and tracking",
      paragraphs: [
        "The website application does not include advertising pixels or visitor analytics scripts, and does not set application cookies for advertising or analytics. Hosting providers may use technical mechanisms needed for security and delivery. Your email provider applies its own practices when you follow an email link and send a message.",
      ],
    },
    {
      heading: "Service providers and international processing",
      paragraphs: [
        "Hosting, content delivery, and email providers process information involved in operating the website and handling correspondence. Information may also be disclosed where required by law or necessary to establish, exercise, or defend legal claims.",
        "These providers may process information in countries outside your country of residence, including the United States. Contact info@sinotechsol.com for information about the providers and safeguards relevant to your inquiry.",
      ],
    },
    {
      heading: "Retention",
      paragraphs: [
        "Retention depends on the purpose of the information: the time needed to respond to an inquiry, manage an ongoing business relationship, investigate security issues, and meet applicable recordkeeping or legal requirements. Technical records are also subject to provider retention settings. Contact us for information about retention of a particular record or to request deletion.",
      ],
    },
    {
      heading: "Your choices and rights",
      paragraphs: [
        "You can browse without emailing us. Please include only the information needed for your inquiry, and arrange a suitable secure channel before sending credentials or sensitive project materials.",
        "Depending on the law that applies to you, you may have rights to access, correct, delete, restrict, or receive a portable copy of your personal information, and to object to certain processing. Where processing relies on consent, you may withdraw that consent without affecting earlier lawful processing. To make a request, email info@sinotechsol.com. We may need to verify your identity before responding.",
        "You may also complain to your local data protection authority. In Portugal, this is the Comissão Nacional de Proteção de Dados (CNPD).",
      ],
    },
    {
      heading: "Changes and contact",
      paragraphs: [
        "We will update this notice when the website or the practices it describes change. The date above identifies the latest revision. Contact info@sinotechsol.com with privacy questions.",
      ],
    },
  ],
};

export const terms: LegalContent = {
  title: "Website Terms",
  description: "Terms for using the Sino Technology Solutions informational website.",
  updated: "September 21, 2026",
  sections: [
    {
      heading: "About this website",
      paragraphs: [
        "Sino Technology Solutions provides this website to describe its IT infrastructure, cybersecurity, and AI research services and to publish general information. We operate in Lisbon, Portugal and Tampa, Florida. Questions can be sent to info@sinotechsol.com.",
      ],
    },
    {
      heading: "Information and service engagements",
      paragraphs: [
        "Website content is general information and is not an assessment of your systems or a substitute for advice tailored to your circumstances. Descriptions of services do not establish a service agreement, guarantee an outcome, or promise a particular response time.",
        "Submitting an inquiry or requesting a diagnostic does not create a paid engagement. Scope, fees, deliverables, confidentiality, and other project terms are established separately in a written agreement. Any diagnostic appointment is subject to scheduling and confirmation.",
      ],
    },
    {
      heading: "Responsible use",
      paragraphs: [
        "Use this website lawfully. Do not attempt unauthorized access, interfere with its operation, introduce malicious code, or misrepresent your identity in communications. Public descriptions of our cybersecurity services do not authorize testing or scanning our systems.",
      ],
    },
    {
      heading: "Content and trademarks",
      paragraphs: [
        "Website text, design, and original materials belong to Sino Technology Solutions or their respective owners. You may read and link to the website and use material as permitted by applicable law. Contact us before reproducing our materials for commercial use.",
        "Third-party product names, logos, and trademarks remain the property of their respective owners. Their appearance does not grant a license to use them.",
      ],
    },
    {
      heading: "Availability and external services",
      paragraphs: [
        "We aim to keep website information useful and current, but content may contain errors or become outdated. The website may be changed or temporarily unavailable. Contact us to confirm details relevant to a purchasing or technical decision.",
        "External websites and email services operate under their own terms and privacy practices. We do not control their availability or content.",
      ],
    },
    {
      heading: "Privacy and applicable rights",
      paragraphs: [
        "Our Privacy Policy describes information associated with visits and email inquiries. These website terms do not exclude or limit rights or obligations that cannot be excluded under applicable law, and do not replace a separately agreed client contract.",
      ],
    },
    {
      heading: "Updates and questions",
      paragraphs: [
        "We may update these terms as the website changes. The date above identifies the latest revision. For questions or permission requests, email info@sinotechsol.com.",
      ],
    },
  ],
};
