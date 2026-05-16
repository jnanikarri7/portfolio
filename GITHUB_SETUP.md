# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Fill in the details:
   - **Repository name:** `portfolio`
   - **Description:** "Premium Data Engineer Portfolio - React + TypeScript + Tailwind CSS"
   - **Visibility:** Public (recommended for portfolio)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

Or if you see your username is `jnanikarri7`, use:

```bash
git remote add origin https://github.com/jnanikarri7/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Connect Vercel to GitHub

### Option A: Via Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/jnanikarri7s-projects/portfolio/settings/git
2. Click "Connect Git Repository"
3. Select GitHub
4. Authorize Vercel if needed
5. Select your `portfolio` repository
6. Click "Connect"

### Option B: Via Command Line

```bash
vercel git connect
```

## Step 4: Enable Auto-Deployments

Once connected:
- ✅ Every push to `main` branch = automatic production deployment
- ✅ Every pull request = automatic preview deployment
- ✅ Vercel comments on PRs with preview URLs

## Step 5: Test Auto-Deployment

Make a small change and push:

```bash
# Make a change (e.g., edit README.md)
echo "Last updated: $(date)" >> README.md

# Commit and push
git add .
git commit -m "Test auto-deployment"
git push
```

Vercel will automatically deploy your changes!

## Verification

After connecting, you should see:
- ✅ Repository connected in Vercel dashboard
- ✅ "Connected to Git" badge on your project
- ✅ Deployment history synced with Git commits

## Your URLs

- **GitHub Repository:** https://github.com/YOUR_USERNAME/portfolio
- **Vercel Dashboard:** https://vercel.com/jnanikarri7s-projects/portfolio
- **Live Site:** https://portfolio-theta-dun-17.vercel.app

---

Need help? Check the documentation:
- Vercel Git Integration: https://vercel.com/docs/deployments/git
- GitHub Guide: https://docs.github.com/en/get-started
