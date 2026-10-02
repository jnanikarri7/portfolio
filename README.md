# Portfolio Website - Jnana Karri

A modern, premium portfolio website showcasing my experience as a Senior Data Engineer with expertise in AWS, PySpark, Data Lakehouse Architecture, and AI/ML Data Engineering.

## 🚀 Tech Stack

- **React 19** - Modern React with Hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework (via @tailwindcss/postcss)
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icon library

## ✨ Features

- Light editorial theme with glassmorphism cards
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll animations and transitions
- Sticky navigation with section links (Work, Experience, Skills, Writing, Contact)
- Organized sections:
  - Hero (name, title, value proposition, proof chips, resume download)
  - Selected Projects (case studies: Problem, Ownership, Architecture, Approach, Results)
  - Experience (roles, certifications, skills, education)
  - Technical Expertise (grouped skill chips)
  - Writing (technical notes)
  - Contact (links and target roles)

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

The site will automatically reload when you make changes.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Vite and configure the build settings

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or use Netlify's web interface:
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `dist` folder
- Or connect your GitHub repository for continuous deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
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
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update your information:

- **Personal data (name, experience, projects, skills, certifications, education)**: `src/data/profile.ts`
- **Hero**: `src/components/Hero.tsx`
- **Projects / Case Studies**: `src/components/SelectedWork.tsx`
- **Skills**: `src/components/TechStack.tsx`
- **Experience & Certifications**: `src/components/Experience.tsx`
- **Writing**: `src/components/Writing.tsx`
- **Contact**: `src/components/Contact.tsx`
- **Navigation**: `src/components/Navbar.tsx`

### Add Your Resume

1. Add your resume PDF to the `public` folder (e.g., `public/resume.pdf`)
2. Update the resume links in:
   - `src/components/Hero.tsx`
   - `src/components/Contact.tsx`

Replace `#` with `/resume.pdf`

### Add Your Profile Image

1. Add your image to `public` folder (e.g., `public/profile.jpg`)
2. Update `src/components/Hero.tsx`:

```tsx
<img 
  src="/profile.jpg" 
  alt="Jnana Karri" 
  className="w-full h-full rounded-full object-cover"
/>
```

Replace the placeholder initials section.

### Update Social Links

Update LinkedIn and GitHub URLs in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`

Replace `https://linkedin.com` and `https://github.com` with your actual profile URLs.

### Color Scheme

The color scheme uses Tailwind's built-in colors. To customize:

Edit `tailwind.config.js` to add custom colors:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔧 Project Structure

```
portfolio/
├── public/              # Static assets (profile.jpg, resume.pdf, favicon)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── TechStack.tsx
│   │   ├── Experience.tsx
│   │   ├── Writing.tsx
│   │   ├── Contact.tsx
│   │   ├── charts/      # Recharts visualizations used in case studies
│   │   └── diagrams/    # SVG pipeline diagrams used in case studies
│   ├── data/
│   │   └── profile.ts   # All site content (single source of truth)
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Performance

- Optimized with Vite for fast builds
- Code splitting for smaller bundle sizes
- Lazy loading for smooth animations
- Optimized images and assets

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**Jnana Karri**  
Senior Data Engineer | AWS Lakehouse Platforms  
📧 jnana.narasimha@gmail.com  
📍 Arlington, Virginia, USA

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

---

## 🌐 Live Portfolio

**Visit:** https://portfolio-theta-dun-17.vercel.app

**GitHub:** https://github.com/jnanikarri7/portfolio

**Last Updated:** May 25, 2026

## 🆕 Recent Updates

- **May 25, 2026:** Added GitHub portfolio projects with live links
  - AI Entity Resolution Platform (v1.0.0 Released)
  - AWS Lakehouse Address Validation (82% modeled API-cost reduction)
  - Projects now link directly to GitHub repositories
  - Updated tech stacks and descriptions with quantified impact

---

**Built with:** React 19 • TypeScript • Tailwind CSS 4 • Vite • Framer Motion

**Deployed on:** Vercel with automatic deployments from GitHub
