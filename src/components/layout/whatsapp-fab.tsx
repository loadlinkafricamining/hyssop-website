import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/content/site-config";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink(`Hi ${siteConfig.name}, I'd like to know more about your products.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-olive-dark text-cream shadow-lg shadow-ink/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
