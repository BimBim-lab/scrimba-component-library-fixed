# Scrimba Component Library - Production Deployment Guide

## 📦 Build Production Ready Files

Your project is now ready for production! Here's how to deploy it:

### 1. Build for Production
```bash
npm run build
```
This creates optimized files in the `dist/` folder.

### 2. Preview Production Build Locally
```bash
npm run preview
```
This serves the production build locally for testing.

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Option 2: Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/scrimba-component-library",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Option 4: Static File Hosting
1. Run `npm run build`
2. Upload the `dist/` folder contents to any static hosting service
3. Make sure to configure your server to serve `index.html` for all routes (SPA routing)

## 🔧 Environment Configuration

### For production with custom domain:
1. Create `.env.production` file:
   ```
   VITE_BASE_URL=https://yourdomain.com
   ```

### For GitHub Pages subdirectory:
Update `vite.config.js`:
```javascript
export default {
  base: '/scrimba-component-library/', // Your repo name
  // ... other config
}
```

## ✅ Pre-deployment Checklist

- [x] .gitignore file created
- [x] package.json properly configured
- [x] Import path issues fixed
- [x] Production build tested successfully
- [ ] Environment variables configured (if needed)
- [ ] Domain/hosting service selected
- [ ] Repository pushed to GitHub

## 🛠 Development vs Production

### Development
```bash
npm run dev  # Starts development server
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📝 Notes

- The `dist/` folder is automatically created during build and is ignored by git
- All dependencies are properly configured for production
- The build process optimizes and minifies your code automatically
- Make sure to test the production build locally before deploying

Your component library is now production-ready! 🎉