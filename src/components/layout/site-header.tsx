"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const isHome = pathname === "/";

  React.useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-border bg-ivory/95 backdrop-blur-md",
        )}
      >
        <Container className="flex h-20 items-center justify-between lg:h-24">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-ink after:transition-all after:duration-300 hover:text-ink hover:after:w-full",
                    active ? "text-ink after:w-full" : "after:w-0",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="/cart"
              aria-label="View cart"
              className="relative flex h-10 w-10 items-center justify-center text-ink transition-opacity hover:opacity-60"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
              {count > 0 ? (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-oak text-[9px] font-semibold text-cream">
                  {count}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center text-ink transition-opacity hover:opacity-60 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-[18px] w-[18px]" strokeWidth={1.4} />
              ) : (
                <Menu className="h-[18px] w-[18px]" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ivory transition-all duration-500 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
              className={cn(
                "font-serif text-4xl text-ink transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="px-8 pb-10 text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          Clean living, pure results.
        </p>
      </div>
    </>
  );
}
