# Next.js SEO Fix Summary

## Already Completed (Project Structure)

Your project is already on Next.js App Router with proper structure:

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page (/)
│   ├── about/page.tsx      # About page (/about)
│   ├── services/page.tsx   # Services page (/services)
│   ├── projects/page.tsx   # Projects page (/projects)
│   ├── blog/page.tsx       # Blog page (/blog)
│   ├── contact/page.tsx    # Contact page (/contact)
│   ├── careers/page.tsx    # Careers page (/careers)
│   ├── faq/page.tsx        # FAQ page (/faq)
│   ├── testimonials/page.tsx # Testimonials page (/testimonials)
│   └── not-found.tsx
├── components/
│   ├── site/               # Navbar, Footer, Reveal, etc.
│   └── pages/              # Page-specific client components
├── lib/
│   └── utils.ts
└── styles.css
```

## Fixes Applied

### 1. GitHub Actions Deployment (.github/workflows/deploy.yml)

- Changed `path: dist` to `path: out` (Next.js static export outputs to `out/`)

### 2. Next.js Configuration (next.config.ts)

- Added `trailingSlash: true` for proper Apache routing on cPanel
- Kept `output: "export"` for static SSG deployment

### 3. Root Layout (src/app/layout.tsx)

- Added OpenGraph image to root metadata
- Added Google site verification: `google4ce39e9424ce6c15`

### 4. All Page Metadata Updated

- Added `alternates.canonical` to each page
- Added `openGraph.images` to each page

### 5. Created .htaccess (public/.htaccess)

Apache rewrite rules for SPA routing on cPanel static hosting

### 6. Sitemap (public/sitemap.xml)

- Updated lastmod dates
- Changed home changefreq to `daily`

## Deployment Guide for cPanel

### Option A: GitHub Pages (Current Setup)

The GitHub Actions workflow deploys to GitHub Pages automatically on push to main.

### Option B: cPanel Static Hosting

1. Run `pnpm run build` to generate static files in `out/`
2. Upload all contents of `out/` to your cPanel `public_html/`
3. Upload the `.htaccess` file to enable SPA routing

## SEO Checklist for Google Search Console

- [x] Sitemap exists at `/sitemap.xml`
- [x] robots.txt exists at `/robots.txt`
- [x] Google verification meta tag in layout
- [x] Canonical URLs on all pages
- [x] OpenGraph tags with images
- [x] Twitter cards
- [x] JSON-LD structured data (Organization, WebSite, BreadcrumbList)
- [x] FAQ schema on FAQ page
- [x] Service schema on Services page
- [x] Meta descriptions (150-160 chars)
- [x] Title tags with keywords

## To Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://tech.moresityholdings.com.np`
3. Verify ownership using:
   - HTML file (already in public/)
   - OR DNS TXT record
4. Submit sitemap: `https://tech.moresityholdings.com.np/sitemap.xml`
5. Use URL Inspection to request indexing of key pages

## Notes

- The `LaunchManager.tsx` has been removed - full homepage content now visible for SEO
- All pages render as static HTML with proper metadata
- For Vercel deployment, remove `output: "export"` for SSR/ISR benefits
