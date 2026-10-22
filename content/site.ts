/**
 * Canonical site settings. Change a value here rather than in page components.
 */

export const siteUrl = "https://www.sinotechsol.com";

export const contactEmail = "info@sinotechsol.com";

/**
 * Public scheduling link. Leave this empty until a real booking URL exists.
 * Paste a Calendly (or similar) URL here later. Do not invent one.
 */
export const bookingUrl = "";

export type LegalIdentity = {
  legalEntityName: string;
  registeredAddress: string;
  nipc: string;
  uei: string;
  cage: string;
};

/**
 * Legal and registration details. Leave a field as an empty string until it is
 * confirmed. The footer prints only the fields that have a value.
 * legalEntityName stays blank: the site already uses Sino Technology Solutions.
 * nipc stays blank until Eric supplies one.
 */
export const legalIdentity: LegalIdentity = {
  legalEntityName: "",
  registeredAddress: "7901 4th St N, Ste 300, St. Petersburg, FL 33702",
  nipc: "",
  uei: "JWHNQCQX9566",
  cage: "10KG8",
};

export const registeredPostalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "7901 4th St N, Ste 300",
  addressLocality: "St. Petersburg",
  addressRegion: "FL",
  postalCode: "33702",
  addressCountry: "United States",
};

function filled(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function legalIdentityLines(
  identity: LegalIdentity = legalIdentity,
): string[] {
  const lines: string[] = [];
  const entity = filled(identity.legalEntityName);
  const address = filled(identity.registeredAddress);
  if (entity) lines.push(entity);
  if (address) lines.push(address);

  const registration = registrationLine(identity);
  if (registration) lines.push(registration);
  return lines;
}

/** Buyer-facing identifier line. Empty fields are omitted. */
export function registrationLine(
  identity: LegalIdentity = legalIdentity,
): string | null {
  const parts = [
    filled(identity.uei) ? `UEI: ${identity.uei.trim()}` : "",
    filled(identity.cage) ? `CAGE: ${identity.cage.trim()}` : "",
    filled(identity.nipc) ? `NIPC: ${identity.nipc.trim()}` : "",
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(" · ") : null;
}

/** Returns the booking URL when it is an http(s) link, otherwise null. */
export function bookingLink(url: string = bookingUrl): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
    return parsed.toString();
  } catch {
    return null;
  }
}
