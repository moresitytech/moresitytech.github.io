# SEO Quick Reference - Moresity Tech

## 🎯 What You Need to Do Now

### 1. **Google Search Console** (HIGHEST PRIORITY)

```
URL: https://search.google.com/search-console
Steps:
1. Sign in with Google Account
2. Add property: https://tech.moresityholdings.com.np/
3. Verify using DNS record (best method)
4. Submit sitemap: https://tech.moresityholdings.com.np/sitemap.xml
5. Request indexing for home page
```

### 2. **Test Your Markup**

```
Rich Results Test: https://search.google.com/test/rich-results
Schema Validator: https://validator.schema.org/

Test these URLs:
- https://tech.moresityholdings.com.np/faq (should show FAQPage rich snippet)
- https://tech.moresityholdings.com.np/services (should show Service schema)
- https://tech.moresityholdings.com.np/ (should show Organization + LocalBusiness)
```

### 3. **Google Business Profile** (For Local SEO)

```
URL: https://business.google.com
Setup:
1. Create business profile
2. Add business name: "Moresity Tech"
3. Add address: Bhaktapur, Nepal
4. Add phone: +977-9808827451
5. Add website: https://tech.moresityholdings.com.np
6. Add service areas
7. Upload logo and photos
```

---

## 📊 Files Modified

| File               | Changes                                    | Impact                       |
| ------------------ | ------------------------------------------ | ---------------------------- |
| `sitemap[.]xml.ts` | Added full URLs, lastmod dates, priorities | ✅ Pages indexed faster      |
| `robots.txt`       | Added sitemap, crawl rules                 | ✅ Better crawl efficiency   |
| `__root.tsx`       | Organization + WebSite schema              | ✅ Knowledge panel eligible  |
| All route files    | BreadcrumbList + full URLs + keywords      | ✅ Better ranking + snippets |
| `index.html`       | Already had good meta tags                 | ✅ Social sharing optimized  |

---

## 🚀 Ranking Expectations

| Timeframe | Metric           | Target                                           |
| --------- | ---------------- | ------------------------------------------------ |
| Week 1-2  | Indexing         | ✅ All pages indexed                             |
| Month 1   | Branded Search   | ✅ Rank #1 for "moresity tech"                   |
| Month 2-3 | Service Keywords | Top 50 for "SaaS development", "web development" |
| Month 4-6 | Blog Keywords    | Rank for long-tail keywords                      |
| Month 6+  | Authority        | 100+ organic visits/month                        |

---

## 💡 Content Strategy for Ranking

### Blog Posts to Write (2000+ words each)

```
Priority 1 (This Month):
- "How We Built the InvoMaster SaaS Platform"
- "10 Things to Know Before Building Your SaaS"
- "Why TypeScript is Essential for SaaS Development"

Priority 2 (Month 2):
- "Design Systems That Scale"
- "AI Integration in Modern Web Apps"
- "Mobile App Development in 2026"

Priority 3 (Month 3):
- "Case Study: Juri Inc Ecommerce Platform"
- "Our Tech Stack: Why We Choose These Tools"
- "Pricing Your SaaS Product: A Complete Guide"
```

### Internal Linking Strategy

```
Each blog post should link to:
- Relevant service page (/services)
- Relevant project (/projects)
- Contact page for CTA (/contact)
- Related blog posts

Example for "InvoMaster Case Study":
→ Link to /services (SaaS Platforms section)
→ Link to /projects (InvoMaster project)
→ Link to /contact (Call to action)
```

---

## ✅ SEO Checklist - Month 1

### Week 1

- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap
- [ ] Create Google Business Profile
- [ ] Run Rich Results Test

### Week 2-3

- [ ] Write first blog post (2000+ words)
- [ ] Create detailed case study
- [ ] Get first backlink (any mention counts)

### Week 4

- [ ] Monitor GSC performance
- [ ] Check indexing status
- [ ] Analyze organic traffic

---

## 🔍 Keyword Targets

### Primary (Brand)

- "moresity tech"
- "moresity holdings"

### Secondary (Service)

- "SaaS development"
- "web development Nepal"
- "software studio"
- "mobile app development"
- "AI solutions Nepal"

### Long-tail

- "how to build SaaS products"
- "best software development company Nepal"
- "TypeScript SaaS development"
- "design systems for startups"

---

## 📈 Performance Monitoring

### Monthly Tasks

1. Check Google Search Console:
   - Total clicks
   - Impressions
   - Average position
   - Top pages

2. Analyze Google Analytics:
   - Organic traffic trend
   - Top landing pages
   - Bounce rate
   - Conversion rate

3. Check rankings:
   - Use SEMrush/Ahrefs (free tier)
   - Or Google manually for top keywords

---

## 🛠️ Technical Details

### Sitemap

```
Path: /sitemap.xml
Auto-generates:
- All 9 pages
- Current date as lastmod
- Proper priorities
- Proper change frequency
- Valid XML schema
```

### robots.txt

```
Blocks: /admin/, /_*, /api/
Allows: Everything else
Includes: Sitemap location
```

### Schema Markup

- 🟢 Organization (root)
- 🟢 WebSite (root)
- 🟢 LocalBusiness (home)
- 🟢 Service (services page)
- 🟢 BreadcrumbList (all pages)
- 🟢 FAQPage (faq page)
- 🟢 Blog (blog page)

---

## ⚠️ Important Reminders

1. **Never change domain** - Will lose all SEO value
2. **Always use HTTPS** - Already done ✅
3. **Keep sitemap updated** - Automatic ✅
4. **Don't over-optimize** - Keep content natural
5. **Mobile first** - Already responsive ✅
6. **Fast loading** - Vite ensures this ✅

---

## 📞 Support Links

| Tool                  | Purpose          | Link                                   |
| --------------------- | ---------------- | -------------------------------------- |
| Google Search Console | Monitor rankings | search.google.com/search-console       |
| Rich Results Test     | Validate schema  | search.google.com/test/rich-results    |
| PageSpeed Insights    | Check speed      | pagespeed.web.dev                      |
| Mobile Friendly Test  | Check mobile     | search.google.com/test/mobile-friendly |
| Schema Validator      | Validate markup  | validator.schema.org                   |
| Google Business       | Local SEO        | business.google.com                    |

---

## 🎓 Learning Resources

- [Google Search Central Blog](https://blog.google/products/search)
- [Schema.org Documentation](https://schema.org/)
- [TanStack Router SEO](https://tanstack.com/router/latest/docs/guide/head-meta)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)

---

**Status**: ✅ Implementation Complete  
**Next Action**: Submit to Google Search Console  
**Timeline**: Full impact expected by Month 6
