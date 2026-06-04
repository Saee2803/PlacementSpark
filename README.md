# Placement Spark Website

Production-ready responsive website for Placement Spark, a premium placement preparation platform for engineering students.

## Features

✨ **Complete & Premium Design**

- Modern, professional UI/UX
- Fully responsive (mobile, tablet, desktop)
- Production-ready with optimized performance
- Smooth animations and transitions
- Accessibility-friendly

🎯 **All Required Sections**

- Hero with CTA and QR registration
- About Placement Spark
- Why Choose Us (with accordion)
- Program Overview
- Curriculum (6 modules with accordion)
- 7-Day Free Trial
- Trial Outcome
- Who Is This For
- How It Works (4-step timeline)
- Student Success Stories & Testimonials
- Pricing Plans
- Final Call-to-Action
- Contact Form
- Footer

🛠️ **Tech Stack**

- React 18.2
- Tailwind CSS 3
- Vite (build tool)
- React Icons
- React Intersection Observer

📦 **Assets**
All provided assets are used exactly as specified:

- Logo.png
- Batch_Image.png
- Google_Form.png
- Interview_Success_rate.png
- Preparation_Platform.png

## Installation

### Prerequisites

- Node.js 16+ and npm installed
- All image assets in the project root directory

### Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create public directory (if not exists):**
   Make sure all `.png` files are in the root directory, they will be served as static assets.

3. **Start development server:**

   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:5173`

4. **Build for production:**

   ```bash
   npm run build
   ```

   Production-ready files will be in the `dist` folder.

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
PlacementSpark/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ProgramOverview.jsx
│   │   ├── Curriculum.jsx
│   │   ├── FreeTrialWeek.jsx
│   │   ├── TrialOutcome.jsx
│   │   ├── WhoIsThisFor.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── TestimonialSection.jsx
│   │   ├── Pricing.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind directives & custom styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Brand Colors

- **Black**: #050505
- **Card Background**: #111111
- **Red**: #EF4444
- **Blue**: #2563EB
- **Yellow**: #FACC15
- **White**: #FFFFFF
- **Dark Charcoal**: #1a1a1a

## Typography

Font: Inter (imported from Google Fonts)

- **Hero Heading**: 72px
- **Section Heading**: 48px
- **Subheading**: 24px
- **Body**: 18px
- **Labels**: 14px

## Features Implemented

### Navigation

✅ Sticky navbar with blur effect
✅ Mobile-responsive hamburger menu
✅ Smooth scroll to sections
✅ Logo branding

### Hero Section

✅ Premium black + red theme
✅ Badge and statistics cards
✅ CTA buttons
✅ Batch image with floating badge
✅ QR code registration card
✅ Quote card

### Interactive Elements

✅ Accordion menus (curriculum, problems)
✅ Testimonial carousel with navigation
✅ Contact form with validation
✅ Smooth animations throughout
✅ Hover effects on cards and buttons

### Responsive Design

✅ Mobile-first approach
✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
✅ Touch-friendly buttons and controls
✅ Optimized images

### Performance

✅ Optimized build with Vite
✅ Code splitting for vendor libraries
✅ CSS minification
✅ Fast loading times

## Important Notes

### WhatsApp Screenshot

The testimonials section includes a placeholder for WhatsApp screenshot. To display verified feedback:

1. Add your WhatsApp screenshot image to the root directory as `WhatsApp_Screenshot.png`
2. Uncomment the image display code in `TestimonialSection.jsx`

### Contact Form

The contact form includes fields for:

- Full Name
- Email Address
- Phone Number
- Branch
- Current Year
- Message

Currently, form data is logged to console. For production, integrate with a backend service (Firebase, Sendgrid, etc.).

### Social Links

All social links are configured:

- **WhatsApp**: https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q
- **LinkedIn**: https://www.linkedin.com/posts/placement-spark_placementspark-chemicalengineering-freshersjobs-activity-7352289653548371971-rkc0
- **Email**: Career.placementspark@gmail.com
- **Phone**: +91 7057606291, +91 8793953155

## Customization

### Modify Content

All text content is embedded in the component files. Edit the components to change:

- Headlines and descriptions
- Feature lists
- Testimonials
- Pricing (plans and features)
- Contact information

### Update Colors

Edit `tailwind.config.js` to modify the brand colors defined in the `theme.extend.colors.brand` object.

### Add New Sections

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add it to the main layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

✅ Meta tags for description and keywords
✅ Semantic HTML structure
✅ Alt text for all images
✅ Mobile-friendly viewport
✅ Fast page load times
✅ Proper heading hierarchy

## Accessibility

✅ Semantic HTML elements
✅ ARIA labels where appropriate
✅ Keyboard navigation support
✅ Color contrast compliance
✅ Focus states on interactive elements

## Deployment

### Deploy to Netlify

1. Build: `npm run build`
2. Drag and drop `dist` folder to Netlify
3. Or connect GitHub repo for automatic deployments

### Deploy to Vercel

1. Connect your GitHub repository
2. Vercel will auto-detect Vite and configure build settings
3. Deploy with one click

### Deploy to Your Server

1. Build: `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server to serve `index.html` for client-side routing

## Support & Contact

For questions or issues:

- Email: Career.placementspark@gmail.com
- Phone: +91 7057606291 / +91 8793953155
- WhatsApp: https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q

## License

© 2026 Placement Spark. All Rights Reserved.

---

**Built with ❤️ for engineering students | Discover Reality. Explore Infinity.**
