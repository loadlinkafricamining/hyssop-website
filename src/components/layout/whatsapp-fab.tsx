import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/content/site-config";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink(`Hi ${siteConfig.name}, I'd like to know more about your products.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Hyssop on WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-cream shadow-lg shadow-ink/15 transition-opacity hover:opacity-85"
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.4} />
      <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
        Chat
      </span>
    </a>
  );
}
