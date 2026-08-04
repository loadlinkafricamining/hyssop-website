export const siteConfig = {
  name: "Hyssop",
  tagline: "Clean Living, Pure Results",
  footerTagline: "Made with care. Inspired by nature.",
  description:
    "Hyssop makes biodegradable, plant-powered home care products that are tough on grease and gentle on hands — for households and businesses who want a cleaner clean.",
  url: "https://hyssop.example.co.za",
  contact: {
    email: "hello@hyssop.example.co.za",
    phone: "+27 00 000 0000",
    whatsapp: "27000000000",
    address: "South Africa",
  },
  social: {
    instagram: "https://instagram.com/hyssop",
    facebook: "https://facebook.com/hyssop",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
