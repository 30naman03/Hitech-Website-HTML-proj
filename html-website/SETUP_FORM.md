# Contact Form Setup (Web3Forms) — Free, No Backend Needed

The static HTML site uses **Web3Forms** to deliver contact-form submissions
straight to your email — perfect for GoDaddy because no server-side code is
required. Setup takes ~2 minutes.

## Step 1 — Get your free Access Key

1. Visit https://web3forms.com
2. Click **Get Access Key**
3. Enter the email address where you want to receive form submissions
   (e.g. `hitecht09@gmail.com`)
4. Copy the **access key** that is sent to your inbox

The free tier allows **250 submissions / month** with no expiry.

## Step 2 — Paste the key into `contact.html`

1. Open `contact.html` in any text editor (Notepad / VS Code)
2. Find this line (around line 95):

   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```

3. Replace `YOUR_ACCESS_KEY` with the key you received. Example:

   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-1234-5678-90ab-abcdef123456">
   ```

4. Save the file.

## Step 3 — Test

1. Open the site (locally or after uploading to GoDaddy)
2. Fill out the form on **Contact Us**
3. Click **Send Message** — you should see a green confirmation
4. Check `hitecht09@gmail.com` — the inquiry should arrive within seconds

## What you receive

Each submission includes:
- Full name
- Email
- Phone number
- Product of interest
- Message

Replies go directly to the customer's email address.

## Alternative: Formspree (also free)

Web3Forms is recommended, but if you prefer Formspree:
1. Sign up at https://formspree.io
2. Replace the `<form action="...">` URL with your Formspree endpoint
3. Remove the hidden `access_key` input

No code change to `main.js` is required — both services accept standard
`multipart/form-data` POSTs.
