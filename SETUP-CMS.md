# Setting up your CMS

Phase 1 covers **blog posts, contact details/address/social links, and the
home-page FAQs**. Solutions, industries, partners and home-page sections come
in Phase 2.

The site is built so it **keeps working whether or not the CMS is configured**.
Until you finish these steps, it serves the content already in the code. Once
configured, your edits take over.

---

## 1. Install the CMS packages (1 command)

```bash
cd ~/Desktop/vedvik-live
npm install sanity @sanity/vision @sanity/image-url @sanity/client next-sanity styled-components
```

*(This takes a couple of minutes — Sanity is a big package. It has to run on
your Mac; it can't be done from the assistant's sandbox.)*

## 2. Create your free Sanity project (2 min)

1. Go to **https://sanity.io/manage** and sign in with Google.
2. Click **Create new project**. Name it `Vedvik Machinery`.
3. Choose the **free plan**, and dataset name **`production`**.
4. Copy the **Project ID** shown on the project page (looks like `a1b2c3d4`).

## 3. Point the site at it

Create a file called `.env.local` in `~/Desktop/vedvik-live`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=paste-your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=paste-a-token-here
```

For the token: in sanity.io/manage open your project → **API** → **Tokens** →
**Add API token** → name it `seed`, permission **Editor** → copy the value.
(The token is only needed once, for step 4. It is never committed —
`.env.local` is git-ignored.)

## 4. Import your existing content

```bash
node scripts/seed-sanity.mjs
```

This copies your current blog posts, FAQs and contact details into the CMS so
you start with everything already in place, not a blank slate.

## 5. Allow the studio to talk to Sanity

In sanity.io/manage → your project → **API** → **CORS origins** → **Add origin**:

- `https://www.vedvikmachinery.com` — tick **Allow credentials**
- `http://localhost:3000` — tick **Allow credentials**

## 6. Add the same variables to Vercel

Vercel → your project → **Settings** → **Environment Variables**. Add:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | your project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

(Don't add the write token to Vercel — the website only reads.)

## 7. Deploy

```bash
git add -A
git commit -m "Add Sanity CMS (phase 1: blog, settings, FAQs)"
git push origin main
```

---

## Using it

Your CMS lives at **https://www.vedvikmachinery.com/studio** — sign in with the
same Google account. It works on your phone.

You'll see three sections:

- **Site Settings** — email, phone, address, map location, LinkedIn/YouTube,
  footer text. Changes appear everywhere they're used.
- **Blog Posts** — write, edit and publish articles. Upload a cover image,
  add headings and paragraphs, related solution links and FAQs (which feed
  Google's rich results).
- **FAQs (home page)** — the questions on the home page, reorderable.

Changes go live within about a minute — no rebuild or deploy needed.

## If something looks wrong

The site falls back to the built-in content whenever Sanity is unreachable or
a field is empty, so a CMS problem can't take the site down. If an edit isn't
showing after a couple of minutes, check that you clicked **Publish** in the
studio (not just saved a draft).
