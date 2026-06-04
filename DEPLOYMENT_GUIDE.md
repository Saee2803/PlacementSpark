# 🚀 Placement Spark Website - Complete Setup & Deployment Guide

## Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## Project Overview

**Placement Spark** is a production-ready, premium placement preparation platform website built with:

- ⚡ **Vite** - Ultra-fast build tool
- ⚛️ **React 18** - Modern UI library
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Fully Responsive** - Works on all devices
- ♿ **Accessible** - WCAG compliant

---

## File Structure

```
PlacementSpark/
│
├── public/                          # Static files (served as-is)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky navigation bar
│   │   ├── Hero.jsx                # Hero section with CTA
│   │   ├── About.jsx               # About section
│   │   ├── WhyChooseUs.jsx         # Problems & solutions (accordion)
│   │   ├── ProgramOverview.jsx     # Program details
│   │   ├── Curriculum.jsx          # 6 modules (accordion)
│   │   ├── FreeTrialWeek.jsx       # 7-day timeline
│   │   ├── TrialOutcome.jsx        # Outcomes card
│   │   ├── WhoIsThisFor.jsx        # Target audience
│   │   ├── HowItWorks.jsx          # 4-step process
│   │   ├── TestimonialSection.jsx  # Testimonials & quotes
│   │   ├── Pricing.jsx             # Pricing plans
│   │   ├── FinalCTA.jsx            # Final call-to-action
│   │   ├── Contact.jsx             # Contact form
│   │   └── Footer.jsx              # Footer
│   │
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind & custom styles
│
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS config
├── vite.config.js                  # Vite configuration
├── .eslintrc.cjs                   # ESLint configuration
├── .gitignore                      # Git ignore rules
└── README.md                       # Project documentation
```

---

## Sections Implemented

### ✅ Navbar

- Fixed sticky navigation
- Transparent with blur effect
- Mobile hamburger menu
- Smooth scroll to sections
- Logo branding

### ✅ Hero Section

- Premium black + red color scheme
- Headline, subheadline, statistics
- Primary & secondary CTAs
- Batch image with floating badge
- QR code registration card
- Motivational quote

### ✅ About Section

- White background
- Success rate image
- Feature cards (3)
- Student struggle explanation
- Career transformation story

### ✅ Why Choose Us

- Black background
- 6 problem-solution accordions
- 3 statistics cards
- Expandable Q&A

### ✅ Program Overview

- Program structure explanation
- What you get (6 points)
- Duration and audience info
- Large platform image
- CTAs

### ✅ Curriculum

- 6 expandable modules
- Detailed content for each module
- Interactive accordion

### ✅ Free Trial Week

- 7-day timeline layout
- Desktop: Connected timeline design
- Mobile: Card-based layout
- Day-by-day breakdown

### ✅ Trial Outcome

- Gradient card design
- 5 key outcomes
- CTA button

### ✅ Who Is This For

- 4 audience cards with icons
- Additional information section

### ✅ How It Works

- 4-step process timeline
- Connected design on desktop
- Step numbers and descriptions

### ✅ Testimonials Section

- Testimonial carousel (3 stories)
- Navigation arrows
- Star ratings
- Verified feedback section (placeholder for WhatsApp screenshot)
- 4 motivational quote cards
- Statistics row
- WhatsApp community link

### ✅ Pricing

- 4 pricing plans
- Free Trial, Foundation, Placement Ready, Pro
- Feature lists
- Badge system (Most Popular, Quick Start, Final Push)
- Money-back guarantee

### ✅ Final CTA

- Large gradient section
- Highlights grid
- CTAs
- Trust statement

### ✅ Contact

- Contact information card
  - Email
  - Phone numbers
  - Social links (WhatsApp, LinkedIn)
- Contact form
  - Full Name
  - Email
  - Phone
  - Branch (select)
  - Current Year (select)
  - Message
  - Form validation
  - Success message

### ✅ Footer

- Logo and brand description
- Quick links
- Resources
- Contact information
- Social links
- Copyright

---

## Brand Guidelines

### Colors

```
Black:            #050505
Card Background:  #111111
Red:              #EF4444
Blue:             #2563EB
Yellow:           #FACC15
White:            #FFFFFF
Dark Charcoal:    #1a1a1a
```

### Typography

Font: **Inter** (imported from Google Fonts)

- Hero Heading: 72px (bold)
- Section Heading: 48px (bold)
- Subheading: 24px (semibold)
- Body: 18px (regular)
- Labels: 14px (small)

### Button Styles

- **Primary** (Blue): CTA buttons
- **Secondary** (Yellow): Alternative CTAs
- **Red**: Special/urgent actions
- **Outline**: Secondary options

---

## Key Features

### 🎨 Design

- Premium, professional appearance
- Consistent branding throughout
- Modern card-based layout
- Smooth animations
- Professional hover effects
- Glass morphism effects

### 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interface
- Optimized for all screen sizes

### ⚡ Performance

- Code splitting (vendor libraries separate)
- Minified CSS and JavaScript
- Optimized images
- Fast load times
- SEO-friendly

### ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Focus states

### 🔄 Interactive Elements

- Accordion menus
- Carousel
- Form validation
- Smooth scrolling
- Animation on scroll

---

## Configuration

### Tailwind CSS

Edit `tailwind.config.js` to customize:

- Color palette
- Font sizes
- Animation properties
- Responsive breakpoints
- Custom utilities

### Vite

Edit `vite.config.js` for:

- Development server port
- Build output directory
- Minification settings
- Plugin configuration

---

## Customization Guide

### Change Branding

Edit in `tailwind.config.js`:

```javascript
colors: {
  'brand': {
    'black': '#050505',
    'card': '#111111',
    'red': '#EF4444',
    // ... update colors
  }
}
```

### Modify Content

Edit individual component files in `src/components/`:

- Headline text
- Feature descriptions
- Testimonials
- Pricing plans
- Contact information

### Add New Sections

1. Create `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to render order

### Update Images

All images should be in the root directory:

- `Logo.png`
- `Batch_Image.png`
- `Google_Form.png`
- `Interview_Success_rate.png`
- `Preparation_Platform.png`

---

## Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Option A: Drag & drop `dist` folder to Netlify
3. Option B: Connect GitHub for automatic deployments
   - Push to GitHub
   - Authorize Netlify
   - Netlify will auto-build on pushes

### Deploy to Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Import project
4. Vercel auto-detects Vite
5. Deploy with one click

### Deploy to Traditional Hosting

1. Build: `npm run build`
2. Upload `dist` folder contents to your server
3. Configure server to serve `index.html` for all routes

### Environment Variables

Create `.env.local` for sensitive data:

```
VITE_API_URL=https://your-api.com
VITE_EMAIL_KEY=your_email_api_key
```

---

## Performance Tips

1. **Lazy Load Images**
   - Use `react-intersection-observer` for images
   - Load images only when visible

2. **Code Splitting**
   - Vite automatically splits code
   - Vendor libraries are separate

3. **Optimize Images**
   - Use WebP format when possible
   - Compress PNG/JPG files
   - Use responsive image sizes

4. **Minification**
   - Enabled by default in production build
   - CSS and JS automatically minified

---

## Testing

### Visual Testing

- Test on Chrome, Firefox, Safari, Edge
- Test on mobile (iPhone, Android)
- Test on tablet sizes

### Functionality Testing

- Test all form submissions
- Test accordion expand/collapse
- Test testimonial carousel
- Test navigation links
- Test mobile menu

### Performance Testing

- Use Google Lighthouse
- Check Core Web Vitals
- Test load time
- Test on slow 3G network

---

## SEO Optimization

✅ Meta tags in `index.html`
✅ Semantic HTML structure
✅ Alt text for all images
✅ Mobile-friendly design
✅ Fast page load
✅ Proper heading hierarchy (H1, H2, H3)

---

## Troubleshooting

### Port Already in Use

```bash
# On Windows
netstat -ano | findstr :5173

# On macOS/Linux
lsof -i :5173

# Kill the process or use different port:
npm run dev -- --port 3000
```

### Build Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Ensure image files are in the root directory
- Check file names match (case-sensitive)
- Use absolute paths starting with `/`

### Styles Not Applied

- Check Tailwind classes are used correctly
- Run: `npm run build` to test production styles
- Clear browser cache

---

## Support & Resources

### Contact Placement Spark

- Email: Career.placementspark@gmail.com
- Phone: +91 7057606291 / +91 8793953155
- WhatsApp: https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q

### Documentation

- Vite: https://vitejs.dev
- React: https://react.dev
- Tailwind: https://tailwindcss.com

---

## Credits

**Built with ❤️ for engineering students**

Placement Spark — Discover Reality. Explore Infinity.

© 2026 Placement Spark. All Rights Reserved.
