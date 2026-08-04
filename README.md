# Hyssop

Website for Hyssop — biodegradable, plant-powered home care products.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React Hook Form + Zod

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's here

Full storefront: Home, Shop, product detail, cart, checkout, About, Contact,
FAQ, and legal pages, built around a single launch product (Dishwashing
Liquid — Lemongrass). Cart state is client-side (localStorage), and checkout
posts to `/api/checkout`.

Payments and email work without any setup, using an honest fallback: if
PayFast isn't configured, checkout hands the order off to WhatsApp instead
of pretending to take a payment. Same idea for the contact form — it just
skips emailing if Resend isn't configured.

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values once you're
ready to go live:

- `PAYFAST_MERCHANT_ID` / `PAYFAST_MERCHANT_KEY` / `PAYFAST_PASSPHRASE` —
  from your PayFast merchant dashboard. Until these are set, checkout falls
  back to a WhatsApp handoff.
- `RESEND_API_KEY` — enables order notification and contact form emails.
- `NEXT_PUBLIC_SITE_URL` — used to build PayFast return/cancel/notify URLs.

Before accepting real payments, note that `/api/webhooks/payfast` currently
trusts the incoming ITN payload without verifying PayFast's signature or
source IP — harden that first (see PayFast's ITN documentation).

## Content

Business details live in `src/content/site-config.ts` (contact email,
phone, WhatsApp number, social links) — these are currently placeholders
and should be replaced with real details. Products live in
`src/content/products.ts`.

## Design system

Brand tokens (colors, fonts) live in `src/app/globals.css` under `:root`
and `@theme inline`. Shared UI primitives are in `src/components/ui`.
