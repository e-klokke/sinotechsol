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
 */
export const legalIdentity: LegalIdentity = {
  legalEntityName: "",
  registeredAddress: "",
  nipc: "",
  uei: "",
  cage: "",
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

  const identifiers = [
    filled(identity.nipc) ? `NIPC ${identity.nipc.trim()}` : "",
    filled(identity.uei) ? `UEI ${identity.uei.trim()}` : "",
    filled(identity.cage) ? `CAGE ${identity.cage.trim()}` : "",
  ].filter(Boolean);

  if (identifiers.length > 0) lines.push(identifiers.join(", "));
  return lines;
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
