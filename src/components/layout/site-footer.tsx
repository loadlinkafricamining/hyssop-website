import Link from "next/link";
import { Leaf, Mail, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { siteConfig } from "@/content/site-config";

const FOOTER_LINKS = [
  {
    heading: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy-policy", label: "Privacy policy" },
      { href: "/legal/terms", label: "Terms of service" },
      { href: "/legal/refund-policy", label: "Refund policy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-olive-dark text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex items-center gap-1 font-serif text-2xl">
            <span>hyssop</span>
            <Leaf className="mb-3 h-4 w-4 -rotate-12 text-olive-light" />
          </Link>
          <p className="max-w-xs text-sm text-cream/70">{siteConfig.description}</p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream/10"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.heading} className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50">
              {group.heading}
            </p>
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50">
            Get in touch
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
          >
            <Mail className="h-4 w-4" /> {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
          >
            <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
          </a>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="italic">{siteConfig.footerTagline}</p>
        </Container>
      </div>
    </footer>
  );
}
