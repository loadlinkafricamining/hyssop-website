"use client";

import * as React from "react";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function NewsletterSection() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setStatus("sending");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-border py-24 lg:py-28">
      <Container size="narrow" className="flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <Eyebrow>Stay in touch</Eyebrow>
          <h2 className="font-serif text-2xl font-light text-ink sm:text-3xl">
            Notes on clean living, sent occasionally.
          </h2>
          {status === "sent" ? (
            <p className="text-sm text-ink-soft">Thank you — you&rsquo;re on the list.</p>
          ) : (
            <form className="flex w-full max-w-sm items-end gap-3" onSubmit={onSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                required
                aria-label="Email address"
              />
              <Button type="submit" size="sm" className="shrink-0" disabled={status === "sending"}>
                Sign up
              </Button>
            </form>
          )}
          {status === "error" ? (
            <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
