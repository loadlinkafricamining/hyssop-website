import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
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
    <footer className="bg-ink text-cream">
      <Container className="grid gap-14 py-24 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-28">
        <div className="flex flex-col gap-5">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-cream/50"
            >
              <InstagramIcon className="h-4 w-4" strokeWidth={1.25} />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-cream/50"
            >
              <FacebookIcon className="h-4 w-4" strokeWidth={1.25} />
            </a>
          </div>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.heading} className="flex flex-col gap-3.5">
            <p className="text-[11px] font-medium tracking-[0.18em] text-cream/60 uppercase">
              {group.heading}
            </p>
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/75 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3.5">
          <p className="text-[11px] font-medium tracking-[0.18em] text-cream/60 uppercase">
            Get in touch
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-cream"
          >
            <Mail className="h-4 w-4" strokeWidth={1.25} /> {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-cream"
          >
            <Phone className="h-4 w-4" strokeWidth={1.25} /> {siteConfig.contact.phone}
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
