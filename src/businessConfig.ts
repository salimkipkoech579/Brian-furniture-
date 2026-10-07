/*
========================================
BRIAN FURNITURE BUSINESS INFORMATION
Edit the details below before launching
the website.
========================================
*/

/**
 * OWNER INSTRUCTIONS:
 * 1. Replace the placeholder values inside the quotation marks with your real business details.
 * 2. Do not change the variable names on the left.
 * 3. Any change here automatically updates every phone button, WhatsApp link, email,
 *    map direction, social icon, and address across the entire website!
 */

export interface BusinessInfo {
  businessName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  openingHours: {
    mondayFriday: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  googleMaps: string;
}

export const businessInfo: BusinessInfo = {
  businessName: "Brian Furniture",
  tagline: "Crafted with Skill. Built to Last.",

  phone: "+254 742470137",
  whatsapp: "254742470137",
  email: "info@brianfurniture.com",

  location: "Your Workshop Location, Nairobi, Kenya",

  openingHours: {
    mondayFriday: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed"
  },

  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61580763238831",
    instagram: "https://instagram.com/victortech035",
    tiktok: "https://tiktok.com/kipkoech.victor8",
    youtube: "https://youtube.com/@kipkoechvictorhn2eo"
  },

  googleMaps: "https://maps.app.goo.gl/27UDsuyRcHLYcxH28"
};

/**
 * Utility functions to validate placeholders and construct dynamic interaction URLs
 */
export function isPlaceholder(val: string): boolean {
  if (!val) return true;
  const upper = val.toUpperCase();
  return (
    upper.includes("XXX") ||
    upper.includes("YOUR_") ||
    upper.includes("YOURPAGE") ||
    upper.includes("YOURCHANNEL") ||
    upper.includes("YOUR WORKSHOP") ||
    upper.includes("PLACEHOLDER")
  );
}

export function getCleanPhone(phone: string): string {
  // Strip non-digit characters except leading plus
  return phone.replace(/[^0-9+]/g, "");
}

export function getCleanWhatsApp(wa: string): string {
  // WhatsApp wa.me requires digits only (country code + number, no '+' or spaces)
  return wa.replace(/[^0-9]/g, "");
}

export function getWhatsAppQuotationUrl(
  info: BusinessInfo,
  customMessage?: string
): string {
  const cleanWa = getCleanWhatsApp(info.whatsapp);
  const message =
    customMessage ||
    `Hello ${info.businessName}, I would like to request a quotation for custom furniture.`;
  return `https://wa.me/${cleanWa}?text=${encodeURIComponent(message)}`;
}

export function getPhoneCallUrl(info: BusinessInfo): string {
  const cleanPhone = getCleanPhone(info.phone);
  return `tel:${cleanPhone}`;
}

export function getEmailMailtoUrl(
  info: BusinessInfo,
  subject?: string,
  body?: string
): string {
  const sub = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  const b = body ? `${sub ? "&" : "?"}body=${encodeURIComponent(body)}` : "";
  return `mailto:${info.email}${sub}${b}`;
}

export function getDirectionsUrl(info: BusinessInfo): string {
  if (info.googleMaps && !info.googleMaps.includes("YOUR_GOOGLE_MAPS_LINK")) {
    return info.googleMaps;
  }
  // Fallback to a searchable Google Maps query using the editable location
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    info.location
  )}`;
}
