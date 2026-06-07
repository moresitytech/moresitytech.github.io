# GitHub Pages Deployment Guide

This project has been converted from a TanStack Start SSR server to a pure static SPA (Single Page Application) that can be deployed to GitHub Pages.

## What Changed

- ✅ Removed TanStack Start server-side rendering dependencies
- ✅ Converted to client-side React with Vite
- ✅ Implemented hash-based routing (`/#/route`) for GitHub Pages compatibility
- ✅ Added `.nojekyll` to prevent Jekyll processing
- ✅ Updated `vite.config.ts` with `base: '/MoresityPortfolio/'` for GitHub Pages sub-path

## Deployment Steps

### 1. Push to GitHub

Make sure your repository is at: `https://github.com/YOUR_USERNAME/MoresityPortfolio`

```bash
git add .
git commit -m "Convert to static site for GitHub Pages"
git push origin main
```

### 2. Build the Site

```bash
npm run build
```

This creates the `dist/` folder with all static files.

### 3. GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to **Settings → Pages**
3. Select **Deploy from a branch**
4. Choose branch: `main` (or `gh-pages` if you create one)
5. Select folder: `/ (root)` or `/docs` (if you change build output)
6. Click **Save**

### 4. (Optional) Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "20"

      - run: npm ci
      - run: npm run build

      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

Then in GitHub Pages settings, select `gh-pages` branch instead.

## Development

```bash
# Install dependencies
npm install

# Start dev server (with hash routing)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## API Configuration

The app makes API calls to `http://localhost:5000` by default (for development).

For production, set the environment variable:

```bash
VITE_API_BASE=https://your-api-domain.com
```

If you don't need a backend, you can:

1. Mock the API endpoints in the components
2. Use static JSON files in the `public/` folder
3. Use a headless CMS

## Important Notes

- **Hash Routing**: URLs now use `/#/` instead of `/` (e.g., `/#/about`, `/#/projects`)
- **Base Path**: The site is deployed at `/MoresityPortfolio/` not the root
- **CORS**: If your API is on a different domain, ensure it has CORS enabled
- **Assets**: Keep all images in `src/assets/` or `public/` for proper bundling

## Troubleshooting

### 404 on Page Refresh

This is expected with hash routing. Hard refresh (Ctrl+Shift+R) to reload.

### CSS Not Loading

Make sure you're accessing the correct path: `https://username.github.io/MoresityPortfolio/`

### API Calls Failing

Check that `VITE_API_BASE` is set correctly and your API has CORS enabled.

---

**Site URL**: https://YOUR_USERNAME.github.io/MoresityPortfolio/

Enjoy your static site! 🚀
