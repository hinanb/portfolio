# hinanbilal.com — Portfolio

Personal portfolio website for Hinan Bilal, Senior Java Full Stack Engineer.

## Tech Stack

- **Next.js 14** (App Router, Static Export)
- **Tailwind CSS** + shadcn/ui components
- **MDX** content with gray-matter
- **Framer Motion** animations
- **Vercel** hosting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add custom domain `hinanbilal.com` in Vercel dashboard
4. Update DNS nameservers or add CNAME record as instructed

## Content

- **Projects**: `content/projects/*.mdx`
- **Blog**: `content/blog/*.mdx`
- **System Design**: `content/system-design/*.mdx`
- **Data**: `content/data/*.json`

## Configuration

- Update Formspree form ID in `app/contact/page.tsx`
- Add `public/resume.pdf` for downloadable resume
- Update `lib/constants.ts` for site metadata

## Pages

Home, About, Experience, Projects, System Design, Blog, Resume, Contact, Now, Achievements, Certifications, Open Source, Talks, Mentoring, Reading List, FAQ
