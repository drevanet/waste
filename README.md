# GreenLoop — Waste management & recycling

A responsive Next.js 14 + Tailwind CSS starter with waste pickup booking, USD price display / NGN conversion, Paystack checkout initialization, service pages, blog, contact form, compliance section and motion effects.

## Run locally
1. Install Node.js 18.17+.
2. `npm install`
3. Copy `.env.example` to `.env.local` and set `PAYSTACK_SECRET_KEY` to a Paystack **test** secret key.
4. `npm run dev` and open http://localhost:3000

## Paystack and currency notes
- Paystack charges in NGN for this Nigeria-focused checkout. The UI displays estimated USD prices and converts them to NGN for payment.
- The exchange rate is fetched server-side from `open.er-api.com` and falls back to `USD_NGN_FALLBACK_RATE`. Confirm the rate and total with the customer before payment.
- `/api/paystack/initialize` initializes a transaction on the server and returns Paystack's authorization URL. The browser is redirected to Paystack-hosted checkout.
- Set `NEXT_PUBLIC_SITE_URL` to your deployed HTTPS origin. Configure the Paystack dashboard callback/webhook and verify transactions server-side before marking a booking as paid. The demo confirmation page does **not** verify a transaction and should not be treated as payment proof.
- Never expose `PAYSTACK_SECRET_KEY` to the browser. Use test keys until you have tested the complete flow.
- This is a starter, not a production booking database. Connect a database, add server-side validation, rate limiting, idempotency, email/SMS notifications and Paystack verification/webhook handling before launch.

## Pages
- `/` Home and booking CTA
- `/services` Service overview
- `/schedule` Pickup booking and payment
- `/blog` Blog listing
- `/contact` Contact form demo
- `/compliance` Compliance and certification commitments

## Images
Photos use remote Unsplash image URLs and are loaded with standard CSS backgrounds / `img` tags. Replace with licensed company-specific images before production.
