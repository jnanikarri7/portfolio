# Quick Start Guide

## Your Portfolio is Ready! 🎉

Your premium portfolio website has been successfully created and is running at:
**http://localhost:5173**

## What's Included

✅ Modern React + TypeScript application  
✅ Premium dark theme with Apple-inspired design  
✅ Glassmorphism effects and smooth animations  
✅ Fully responsive (mobile, tablet, desktop)  
✅ All sections populated with your information:
  - Hero section with your profile
  - About Me
  - Core Skills (6 categories)
  - Professional Experience
  - 6 AWS & Data Engineering Certifications
  - 6 Featured Projects
  - Education (Master's in AI for Business)
  - Career Focus & Target Roles
  - Resume Highlights
  - Contact Information

## Next Steps

### 1. View Your Portfolio
Open your browser and visit: **http://localhost:5173**

### 2. Customize Your Information

#### Add Your Profile Photo
- Place your photo in `/portfolio/public/` folder (e.g., `profile.jpg`)
- Update `src/components/Hero.tsx` (line ~38) - replace the initials with your image

#### Add Your Resume
- Place your resume PDF in `/portfolio/public/` folder (e.g., `resume.pdf`)
- Update resume links in:
  - `src/components/Hero.tsx` (line ~103)
  - `src/components/Contact.tsx` (line ~93)
- Change `href="#"` to `href="/resume.pdf"`

#### Update Social Links
Replace placeholder URLs with your actual profiles in:
- `src/components/Hero.tsx` (lines ~110, ~118, ~126)
- `src/components/Contact.tsx` (lines ~51, ~89, ~100)

Current placeholders to replace:
- LinkedIn: `https://linkedin.com` → Your LinkedIn URL
- GitHub: `https://github.com` → Your GitHub URL

### 3. Deploy Your Portfolio

#### Option A: Vercel (Recommended - Free & Easy)
```bash
npm install -g vercel
cd /c/Users/Jnana.Karri/portfolio
vercel
```

Follow the prompts. Your site will be live in minutes with a URL like:
`https://your-portfolio.vercel.app`

#### Option B: Netlify (Also Free)
```bash
npm install -g netlify-cli
cd /c/Users/Jnana.Karri/portfolio
npm run build
netlify deploy --prod --dir=dist
```

#### Option C: GitHub Pages
See the detailed instructions in README.md

### 4. Share Your Portfolio

Once deployed, you can:
- Add the URL to your LinkedIn profile
- Share it in job applications
- Include it in your resume
- Share it with recruiters

## Development Commands

```bash
# Start dev server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

## File Structure

```
portfolio/
├── src/
│   ├── components/          # All your portfolio sections
│   │   ├── Hero.tsx         # Top section with your intro
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills grid
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx     # Featured projects
│   │   └── Contact.tsx      # Contact section
│   ├── App.tsx              # Main app
│   └── index.css            # Styles
├── public/                  # Add your resume & photos here
└── index.html
```

## Troubleshooting

### Port already in use?
```bash
# Kill the process and restart
npm run dev -- --port 5174
```

### Build errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind styles not loading?
Make sure all files are saved. Vite hot-reloads automatically.

## Support

For any issues or questions:
- Check the main README.md for detailed documentation
- Review the component files for customization options
- Ensure all dependencies are installed

---

## Design Features

✨ **Premium Dark Theme**
- Slate 950 background
- Blue/Purple gradient accents
- Glassmorphism cards
- Subtle animations

🎨 **Apple-Inspired UI**
- Clean typography (Inter font)
- Generous spacing
- Rounded corners
- Soft shadows

📱 **Fully Responsive**
- Mobile-first design
- Tablet optimized
- Desktop experience
- Touch-friendly navigation

🚀 **Performance Optimized**
- Fast page loads
- Smooth animations
- Code splitting
- SEO ready

---

**Ready to impress recruiters!** Your portfolio showcases 7+ years of data engineering experience with a modern, professional design that stands out.

Good luck with your job search! 🎯
