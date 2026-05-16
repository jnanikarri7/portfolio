# Deployment Guide

## Pre-Deployment Checklist

Before deploying, make sure you've customized:

- [ ] Profile photo added to `/public`
- [ ] Resume PDF added to `/public`
- [ ] LinkedIn URL updated
- [ ] GitHub URL updated
- [ ] Email verified (jnana.narasimha@gmail.com)
- [ ] All project descriptions reviewed
- [ ] Experience details confirmed
- [ ] Skills list updated

## Deployment Options

### 🚀 Option 1: Vercel (Recommended)

**Why Vercel?**
- Free for personal projects
- Automatic HTTPS
- CDN globally distributed
- Automatic deployments from Git
- Zero configuration needed

**Steps:**

1. **Via CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd /c/Users/Jnana.Karri/portfolio

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **portfolio** (or your choice)
- In which directory is your code located? **./** 
- Want to override the settings? **N**

Your site will be deployed instantly!

2. **Via GitHub (Automatic):**
```bash
# Initialize git (if not already)
cd /c/Users/Jnana.Karri/portfolio
git init
git add .
git commit -m "Initial portfolio commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then:
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Connect your GitHub repository
- Vercel auto-detects Vite
- Click "Deploy"

**Custom Domain (Optional):**
- Go to your Vercel project settings
- Add your custom domain
- Update DNS records as instructed

---

### 🌐 Option 2: Netlify

**Why Netlify?**
- Free tier with generous limits
- Great build performance
- Easy custom domain setup
- Form handling built-in

**Steps:**

1. **Via CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
cd /c/Users/Jnana.Karri/portfolio
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

Follow the prompts:
- Create & configure a new site? **Y**
- Team: Select your team
- Site name: **your-portfolio** (or leave blank for random)

2. **Via Drag & Drop:**
```bash
# Build first
npm run build
```

Then:
- Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- Drag the `dist` folder
- Done!

3. **Via GitHub (Continuous Deployment):**
- Push your code to GitHub (see Vercel instructions)
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Connect GitHub and select your repo
- Build settings (auto-detected):
  - Build command: `npm run build`
  - Publish directory: `dist`
- Click "Deploy site"

---

### 📄 Option 3: GitHub Pages

**Why GitHub Pages?**
- Free hosting from GitHub
- Custom domain support
- Direct integration with your repo

**Steps:**

1. Install gh-pages:
```bash
cd /c/Users/Jnana.Karri/portfolio
npm install --save-dev gh-pages
```

2. Update `package.json`, add these scripts:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Add this line
})
```

4. Deploy:
```bash
npm run deploy
```

Your site will be live at:
`https://yourusername.github.io/portfolio`

---

### ☁️ Option 4: AWS S3 + CloudFront (Advanced)

**For those who want AWS hosting:**

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://your-portfolio-bucket
```

3. Configure for static hosting:
```bash
aws s3 website s3://your-portfolio-bucket --index-document index.html
```

4. Upload files:
```bash
aws s3 sync dist/ s3://your-portfolio-bucket --acl public-read
```

5. Set up CloudFront for HTTPS and CDN (optional but recommended)

---

## Post-Deployment

### Update Your Profiles

Once deployed, add your portfolio URL to:

1. **LinkedIn:**
   - Edit profile → Contact Info → Website
   - Add to your headline or about section

2. **GitHub:**
   - Profile → Edit profile → Website
   - Pin the repository

3. **Resume:**
   - Add URL to contact section
   - Include in header or footer

4. **Job Applications:**
   - Include in cover letters
   - Add to application forms

### Monitor & Analytics (Optional)

**Add Google Analytics:**

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Custom Domain Setup

**For Vercel/Netlify:**

1. Purchase domain (Namecheap, Google Domains, etc.)

2. In Vercel/Netlify dashboard:
   - Go to Domain settings
   - Add custom domain
   - Follow DNS instructions

3. Update DNS records at your domain provider:
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.vercel.app` or `your-site.netlify.app`

HTTPS is automatic!

---

## Continuous Deployment

**Set up auto-deployment from Git:**

1. Connect your GitHub repo to Vercel/Netlify
2. Every push to `main` branch auto-deploys
3. Pull requests get preview deployments

**GitHub Actions (Alternative):**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Troubleshooting

### Build fails on deployment
```bash
# Test build locally first
npm run build

# Check for errors
npm run preview
```

### Routes not working (404 on refresh)
Add `_redirects` file to `public/`:
```
/*    /index.html   200
```

### Images not loading
- Ensure images are in `/public` folder
- Use `/image.jpg` not `./image.jpg`
- Check file names match exactly (case-sensitive)

---

## Performance Tips

### Optimize Images
```bash
# Before adding to /public, compress images
# Use tools like TinyPNG or ImageOptim
```

### Add Sitemap
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

---

## Security

### Environment Variables
Never commit sensitive data. Use `.env` for local development:

```bash
# .env (already in .gitignore)
VITE_ANALYTICS_ID=your_id
```

Access in code:
```typescript
const analyticsId = import.meta.env.VITE_ANALYTICS_ID
```

### Content Security Policy
Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

---

## Maintenance

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update all
npm update

# Update to latest major versions
npm install -g npm-check-updates
ncu -u
npm install
```

### Rebuild and redeploy regularly
```bash
npm run build
# Then deploy via your chosen method
```

---

## Cost

All recommended platforms are **FREE** for personal portfolios:

- **Vercel**: Free tier (100GB bandwidth/month)
- **Netlify**: Free tier (100GB bandwidth/month)  
- **GitHub Pages**: Free (soft limit 100GB bandwidth/month)

---

## Support

For deployment issues:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Your portfolio is production-ready!** Choose your deployment platform and go live in minutes. 🚀
