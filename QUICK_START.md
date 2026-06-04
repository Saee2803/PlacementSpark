# 🚀 Quick Start Guide

## Get the Site Running in 2 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

This installs React, Tailwind CSS, Vite, and all other packages.

### Step 2: Start Development Server

```bash
npm run dev
```

Your browser will automatically open at `http://localhost:5173`

### Step 3: Start Building!

Open `src/components/` to customize content.

---

## What to Edit

### Change Text Content

Edit these files to change what visitors see:

**Hero Section** → `src/components/Hero.jsx`

```javascript
// Edit headlines, descriptions, button text
```

**About Section** → `src/components/About.jsx`

**Testimonials** → `src/components/TestimonialSection.jsx`

**Pricing** → `src/components/Pricing.jsx`

**Contact Info** → `src/components/Contact.jsx`

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'brand': {
    'red': '#EF4444',  // Change to your color
    // ... other colors
  }
}
```

### Change Images

Replace image files in the root directory:

- `Logo.png`
- `Batch_Image.png`
- `Google_Form.png`
- `Interview_Success_rate.png`
- `Preparation_Platform.png`

---

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint (code quality check)
npm run lint
```

---

## Deploy to Netlify (Free)

### Method 1: Drag & Drop

1. Run: `npm run build`
2. Go to netlify.com
3. Drag `dist` folder onto Netlify
4. Done! You have a live website

### Method 2: GitHub Integration

1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Netlify auto-deploys on every push

---

## Deploy to Vercel (Free)

1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Click Deploy
5. Done!

---

## Important Files

| File                 | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `src/App.jsx`        | Main app component (combines all sections) |
| `src/components/`    | All section components                     |
| `index.html`         | HTML template & meta tags                  |
| `tailwind.config.js` | Tailwind CSS customization                 |
| `package.json`       | Dependencies & npm scripts                 |

---

## Customization Examples

### Change Hero Headline

**File:** `src/components/Hero.jsx`

Find and edit:

```javascript
<h1 className="heading-hero mb-6 leading-tight">
  From Chemical Engineering Classroom to Corporate Industry —
  <span className="text-brand-red"> We Make It Possible.</span>
</h1>
```

### Add a New Testimonial

**File:** `src/components/TestimonialSection.jsx`

Find testimonials array and add:

```javascript
{
  name: 'Your Name',
  company: 'Company Name',
  quote: 'Your testimonial text',
  rating: 5,
}
```

### Change CTA Button Text

Find `btn-primary`, `btn-secondary`, etc. buttons and edit the text.

---

## Live Site Preview

After running `npm run dev`, you can:

- 📱 View on mobile: Scan QR code shown in terminal
- 🔄 Live reload: Changes auto-refresh in browser
- 🐛 Debug: Open DevTools (F12) to check errors

---

## Need Help?

### Check Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red error messages

### Common Issues

**"Port 5173 already in use"**

```bash
npm run dev -- --port 3000
```

**"Images not showing"**

- Check images are in root directory
- Check file names match exactly
- Hard refresh browser (Ctrl+Shift+R)

**"Styles not applied"**

- Clear node_modules: `rm -rf node_modules && npm install`
- Clear browser cache
- Restart dev server

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Customize content in `src/components/`
4. ✅ Build with `npm run build`
5. ✅ Deploy to Netlify or Vercel

---

## Support

- 📧 Email: Career.placementspark@gmail.com
- 📱 Phone: +91 7057606291
- 💬 WhatsApp: https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q

---

**That's it! You're ready to go. Happy building!** 🎉

Placement Spark — Discover Reality. Explore Infinity.
