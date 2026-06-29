# Deploying to Vercel (hinanbilal.com)

## Prerequisites

- GitHub account
- Vercel account (free tier)
- Domain `hinanbilal.com` registered

## Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial portfolio site"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy**

Vercel will automatically build and deploy on every push to `main`.

### 3. Add Custom Domain

1. Open your project in Vercel Dashboard
2. Go to **Settings → Domains**
3. Add `hinanbilal.com` and `www.hinanbilal.com`
4. Follow DNS instructions:
   - **Option A**: Point nameservers to Vercel
   - **Option B**: Add A/CNAME records at your registrar

### 4. SSL

HTTPS is automatic. Vercel provisions and renews SSL certificates.

## Post-Deploy Checklist

- [ ] Add `public/resume.pdf` for downloadable resume
- [ ] Replace Formspree endpoint in `app/contact/page.tsx`
- [ ] Verify all pages at `https://hinanbilal.com`
- [ ] Test contact form submission
- [ ] Submit sitemap to Google Search Console: `https://hinanbilal.com/sitemap.xml`

## Local Build

```bash
npm run build
```

Static output is in the `out/` directory (static export enabled).

## Environment Variables

None required for basic deployment. Add later if integrating analytics:

```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=hinanbilal.com
```
