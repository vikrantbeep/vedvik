# Taking the Palladio site live on vedvikmachinery.com

Two ways to do this. **Option A is strongly recommended** — it's faster, reversible,
and leaves the old site intact as a fallback.

---

## Option A — Point the domain at this project (recommended, ~3 min)

No code moves anywhere. You simply tell Vercel that `vedvikmachinery.com` now
serves the `vedvik-Palladio` project.

1. Go to **vercel.com** → open the **old** project (the one currently serving
   vedvikmachinery.com) → **Settings → Domains**.
2. Remove `vedvikmachinery.com` and `www.vedvikmachinery.com`.
3. Open the **vedvik-palladio** project → **Settings → Domains** → **Add**.
4. Add `vedvikmachinery.com`, then add `www.vedvikmachinery.com` and set it to
   redirect to the root domain.
5. Wait for the SSL certificate to issue (usually under a minute).

**Why this is better:** the old repo and deployment stay untouched. If anything
looks wrong, you move the domain back and you're live on the old site again in
under a minute. Nothing is overwritten.

---

## Option B — Replace the contents of the `vedvik` repo

Only do this if you specifically want both repos to hold the new code.
Run these from your Mac (they need your GitHub login, which the assistant
doesn't have).

```bash
# 1. Clone the live repo somewhere temporary
cd ~/Desktop
git clone https://github.com/vikrantbeep/vedvik.git vedvik-live
cd vedvik-live

# 2. Safety branch of the current live site, pushed to GitHub
git checkout -b backup-old-site
git push -u origin backup-old-site
git checkout main

# 3. Wipe tracked files (keeps .git history)
git rm -r --cached . -q
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +

# 4. Copy the new site in (excluding build artefacts and deps)
rsync -a --exclude '.git' --exclude 'node_modules' --exclude '.next' \
      ~/Desktop/vedvik-site/ ./

# 5. Commit and push
git add -A
git commit -m "Replace site with Palladio redesign"
git push origin main
```

**Before pushing, check in the Vercel project for this repo:**

- Framework preset is **Next.js**
- No leftover environment variables are required (the new site needs none —
  `BLOB_READ_WRITE_TOKEN` and `INSIDER_PASSWORD` were only used by the old
  `/insider` tool, which is not part of this build)

---

## After going live (either option)

1. **Search Console** — submit `https://vedvikmachinery.com/sitemap.xml`.
2. **Spot-check the redirects** — these must all land on a working page:
   - `/solutions/HFFS` → `/solutions/horizontal-form-fill-seal`
   - `/solutions/PFS` → `/solutions/pick-fill-seal`
   - `/solutions/Kraus` → `/solutions/friction-feeders`
   - `/industries/seeds` → `/industries/seeds-grains`
3. **Send a test enquiry** through the contact form and confirm it lands in
   Formspree (form ID `mojrgynq` — the same inbox the old site used).
4. Watch Search Console **Coverage** for a week for unexpected 404s.

## Known gaps (not blockers, worth doing soon)

- Blog card images are `placehold.co` placeholders — replace with real photos.
- Industry photos hotlink Unsplash's `/download` endpoint; move them to
  Cloudinary so they can't disappear or be rate-limited.
- The old `/insider` blog publishing tool is not in this build. It had **zero
  published posts**, so nothing is lost — but if you want that tool back, it
  needs porting.
