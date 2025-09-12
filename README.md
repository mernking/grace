BoundlessBolt Business Website – Next.js Build Spec

A complete plan and technical spec for a business services website (not SaaS). The site is designed for client acquisition: clear services, trust-building projects, SEO blog, and strong CTAs.

Built with Next.js (App Router), JavaScript, Tailwind v4, and react-icons.
All styling uses the CSS variable color contract (text-text, bg-background, text-accent, etc.), no hard-coded hex.

1) Product Overview

Goal: Present BoundlessBolt as a professional web development & automation partner that helps businesses launch fast, modern, scalable websites and systems.

Core Outcomes for Clients:

Look professional online

Automate repetitive work

Attract more clients through SEO

Get scalable web solutions

Personas

Business Owner / Entrepreneur: Wants a website that builds trust and drives leads.

Startup Founder: Needs fast, scalable tech to validate & grow.

SMB / Agency Manager: Wants automation, backend systems, and SEO to save time & grow.

2) Tech Stack & Libraries

Framework: Next.js 15+ (App Router), JavaScript.

Styling: Tailwind v4 with CSS variable palette.

Icons: react-icons for service/feature icons.

Forms & Validation: react-hook-form + zod.

SEO: Custom sitemap.js, robots.js, meta tags per page.

Blog Markdown: MDX or Markdown files with frontmatter for SEO.

3) Color Palette Contract
@media (prefers-color-scheme: light) {
  :root {
    --text: #0b1419;
    --background: #ecf3f9;
    --primary: #1b5579;
    --secondary: #65b8ec;
    --accent: #0b9bf4;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --text: #e6eff4;
    --background: #060d12;
    --primary: #84bfe4;
    --secondary: #136599;
    --accent: #0d9af3;
  }
}

@theme {
  --color-text: var(--text);
  --color-background: var(--background);
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
}


Use utilities like bg-background, text-text, text-accent, etc.

4) Project Structure
boundlessbolt/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.jsx                 # Homepage
│  │  ├─ service/page.jsx          # Services overview
│  │  ├─ projects/page.jsx         # Portfolio
│  │  ├─ blog/page.jsx             # Blog listing
│  │  └─ blog/[slug]/page.jsx      # Blog detail (MDX)
│  ├─ (core)/
│  │  ├─ contact/page.jsx          # Contact form
│  │  └─ about/page.jsx            # About company
│  ├─ sitemap.js
│  ├─ robots.js
│  ├─ layout.jsx                   # Root layout
│  └─ globals.css                  # Tailwind + color palette
├─ components/
│  ├─ sections/ (Hero, Services, Pricing, Projects, Testimonials, CTA)
│  ├─ ui/ (Button, Input, Card, Container)
│  ├─ nav/ (Navbar, Footer)
│  └─ blog/ (BlogCard, BlogLayout)
├─ content/
│  ├─ blog/ (markdown or mdx files)
│  │  ├─ first-post.mdx
│  │  └─ seo-tips.mdx
├─ lib/
│  ├─ seo.js          # Meta helpers
│  └─ mail.js         # Contact form handler
├─ public/
│  ├─ icons/          # optional static assets
├─ tailwind.config.js
├─ jsconfig.json       # @ import aliases
└─ package.json

5) Homepage Sections (Copy & Content)

Hero

Headline: “We craft websites that win clients & grow your brand.”

Sub: “From design to deployment, we create websites that look amazing, load fast, and drive results.”

CTA: “Start Your Project” (→ Contact form).

Services
Use react-icons for each service (e.g. FaGlobe, FaRobot, FaServer).
List includes: Web Development, Bot Development, Web3 Bots, API Development, Backend, Frontend, Automation, SaaS, Shopify, SEO, Technical SEO, Web Design.

Why Choose Us (Value Props)

Modern, scalable solutions

SEO-first design

Automation that saves time

Personal, long-term support

Projects (Portfolio)

Grid of past projects (from /app/projects).

Show industries: ecommerce, startups, SaaS.

Pricing (Starting Packages)

Website “From $995”

Advanced “From $2,495”

Custom “Get a Quote”

Testimonials
3–4 strong quotes from happy clients.

Blog Highlights
Latest 3 articles with cards (from MDX).

Contact CTA
Banner: “Ready to start? Let’s build something amazing.”
Button → Contact page.

6) SEO Setup

Each page has dynamic <title> + <meta description>.

sitemap.js → all routes + blog posts.

robots.js → allow all.

Blog uses Markdown/MDX with frontmatter (title, description, date, tags).

JSON-LD schema for Organization + BlogPosting.

7) Blog Markdown Contract

Example blog post (content/blog/seo-tips.mdx):

---
title: "10 Simple SEO Tips for Small Business Websites"
description: "Quick SEO improvements you can apply today to rank higher and get more leads."
date: "2025-09-10"
tags: ["SEO", "Marketing", "Small Business"]
---

# 10 Simple SEO Tips for Small Business Websites

Your website can look amazing, but if it’s not visible in search, you’re missing opportunities. Here are 10 practical tips…

8) Contact Form

Uses react-hook-form + zod validation.

Fields: Name, Email, Company, Message.

On submit → API route (/api/contact) → lib/mail.js → send email (SMTP or Resend).

Success toast + fallback message.

9) What Gemini Should Deliver

Next.js App Router project with @ aliases and Tailwind v4 variable palette.

Components: Hero, Services, Projects, Pricing, Testimonials, Blog cards, Contact form, Navbar/Footer.

Pages: Homepage, Services, Projects, Blog (list + detail), Contact, About.

Blog system with Markdown/MDX support.

SEO setup: sitemap, robots, meta per page, JSON-LD schema.

Copywriting optimized for client acquisition, as outlined above.

Responsive, accessible UI with react-icons.

Ready-to-deploy build on Netlify/Vercel.

