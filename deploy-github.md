# GitHub Pages Deployment Guide

## Initial Setup (First Time Only)

### 1. Initialize Git Repository
```bash
cd C:\Users\MOHAMMED FAIZAN\ai-teaching-assistant
git init
git add .
git commit -m "Initial commit: EduAI Teaching Assistant"
```

### 2. Connect to GitHub
Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/eduai-teaching-assistant.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### 4. Get Your URL

After 1-2 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/eduai-teaching-assistant/
```

## Updating Your Site

When you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Your site updates automatically in 1-2 minutes!

---

## Troubleshooting

### Issue: Files not loading properly
**Solution:** Check that all file paths are relative (not absolute)

### Issue: 404 Page Not Found
**Solution:** 
1. Ensure `index.html` is in the root directory
2. Wait 2-3 minutes after enabling Pages
3. Check GitHub Pages settings

### Issue: Login not working
**Solution:** This is normal - clear browser cache or use localStorage.clear() in console

---

## Custom Domain (Optional)

To use your own domain (e.g., eduai.com):

1. Buy a domain from any registrar
2. Go to GitHub Settings → Pages
3. Add your custom domain
4. Update DNS records at your registrar:
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`

---

## Quick Commands Reference

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View remote URL
git remote -v
```
