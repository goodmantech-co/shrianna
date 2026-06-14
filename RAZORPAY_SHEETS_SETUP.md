# Checkout setup — Razorpay + Google Sheets

This store takes payments through **Razorpay** and logs every paid order into a
**Google Sheet** that the team manages by hand. There is no Shopify and no
separate admin — the sheet *is* the order book.

## How a purchase flows

1. Customer fills the basket → **Checkout** → enters name / phone / address.
2. The server (`/api/razorpay/order`) recomputes the amount from
   `lib/products.ts` (prices are never trusted from the browser) and creates a
   Razorpay order.
3. The Razorpay payment window opens. Customer pays by UPI / card / netbanking.
4. On success the server verifies the payment signature
   (`/api/razorpay/verify`) and appends a row to the sheet.
5. A Razorpay **webhook** (`/api/razorpay/webhook`) also fires and appends the
   same order as a backstop. The sheet dedupes on Order ID, so you get exactly
   one row even though two things reported it.

## 1. Google Sheet

1. Create a Google Sheet (any name). This is your order book.
2. **Extensions → Apps Script**, paste in `scripts/google-sheets-order-log.gs`.
3. Set `TOKEN` to a long random string.
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the **Web app URL**.

Put these in `.env.local`:

```
GOOGLE_SHEETS_WEBAPP_URL=<the web app URL>
GOOGLE_SHEETS_WEBAPP_TOKEN=<the same TOKEN string>
```

> After any edit to the Apps Script, redeploy: **Manage deployments → edit →
> New version**, or the change won't go live.

## 2. Razorpay keys

1. Sign in at https://dashboard.razorpay.com.
2. **Settings → API Keys → Generate Key**. Use **Test Mode** keys first.

```
RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxx
```

## 3. Razorpay webhook (backstop)

1. **Settings → Webhooks → Add New Webhook**.
2. URL: `https://YOUR_DOMAIN/api/razorpay/webhook`
   (for local testing, expose your dev server with a tunnel such as `ngrok`).
3. Set a **secret** — a random string.
4. Subscribe to the **`payment.captured`** event (you can also add `order.paid`).

```
RAZORPAY_WEBHOOK_SECRET=<the webhook secret>
```

## 4. Test

Run the dev server, add something to the basket, check out, and pay with a
[Razorpay test card](https://razorpay.com/docs/payments/payments/test-card-details/)
(e.g. card `4111 1111 1111 1111`, any future expiry, any CVV). A row should
appear in the sheet within a second or two.

## Going live

Swap the test keys for **live** keys, regenerate the webhook against the live
mode, and make sure the webhook URL points at your production domain.
