import { whatsappLink } from "@/lib/cities-data";

/** The plain chat link. Every contact button falls back to it when no message applies. */
export const WHATSAPP_URL = "https://wa.me/79261038152";

export const DEFAULT_MESSAGE = "مرحبًا، أبغى برنامج رحلة إلى روسيا";

/**
 * Message for the always-visible contact button, built from the page the visitor is on.
 * `labels` maps a path such as "/cities/moscow" to the page's name.
 */
export function messageForPath(pathname: string, labels: Record<string, string>) {
  const label = labels[pathname];
  if (!label) return DEFAULT_MESSAGE;
  if (pathname.startsWith("/cities/")) return `مرحبًا، أبغى عرض سعر لرحلة إلى ${label}`;
  if (pathname.startsWith("/activities/")) return `مرحبًا، أبغى أضيف "${label}" إلى رحلتي في روسيا`;
  if (pathname.startsWith("/services/")) return `مرحبًا، أبغى أستفسر عن خدمة ${label}`;
  return DEFAULT_MESSAGE;
}

export { whatsappLink };
