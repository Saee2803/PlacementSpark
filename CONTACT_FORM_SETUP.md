# Contact Form EmailJS Setup Guide

## Overview
This guide walks you through setting up EmailJS for the PlacementSpark contact form to send emails to Career.placementspark@gmail.com.

---

## Step 1: Create EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com)
2. Click **Sign Up** (top right)
3. Create an account with your email
4. Verify your email address
5. Log into your EmailJS dashboard

---

## Step 2: Add Email Service (Gmail)

1. In the dashboard, click **Email Services** (left sidebar)
2. Click **Add New Service**
3. Select **Gmail** from the list
4. Click **Create Service**
5. When prompted, authorize EmailJS to access Gmail:
   - You'll be redirected to Gmail login
   - Sign in with: **Career.placementspark@gmail.com**
   - Grant permissions when asked
   - You'll be redirected back to EmailJS

**Service Details:**
- **Service ID:** `gmail` (auto-generated, note this down)
- **Status:** Connected ✓

---

## Step 3: Create Email Template

1. Click **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Set up as follows:

### Template Settings

**Template Name:** `contact_form_template`

**Template ID:** Auto-generated (will look like: `template_abc123def456`)

**Email To:** `Career.placementspark@gmail.com`

**Email From:** `{{from_email}}`

**Subject:** `New Placement Spark Inquiry - {{from_name}}`

### Template Body

Copy and paste this exactly:

```
Hello Placement Spark Team,

A new inquiry has been received:

---

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Branch: {{branch}}
Current Year: {{current_year}}

Message:
{{message}}

---

Best regards,
Placement Spark Contact Form
```

**Then click:**
- **Save Template**
- Test if you want (optional)

---

## Step 4: Get Your Public Key

1. Click **Account** (left sidebar)
2. Click **API Keys**
3. You'll see your **Public Key** (looks like: `abc123def456xyz`)
4. **Copy this key** - you'll need it in Step 5

---

## Step 5: Configure Your React App

### Option A: Environment Variable (Recommended)

1. Create `.env` file in your project root:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=gmail
VITE_EMAILJS_TEMPLATE_ID=contact_form_template
```

2. Update `Contact.jsx` initialization (around line 24):

```javascript
// Initialize EmailJS with environment variables
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

### Option B: Direct Configuration

If you prefer direct configuration, replace in `Contact.jsx` (line 24):

```javascript
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY_HERE");
```

And update the email sending code (around line 80-85):

```javascript
await emailjs.send(
  "gmail",                      // Service ID
  "contact_form_template",      // Template ID
  emailParams
);
```

---

## Step 6: Update EmailJS Parameters (if needed)

In `Contact.jsx`, the email parameters are already correctly mapped:

```javascript
const emailParams = {
  to_email: "Career.placementspark@gmail.com",
  from_name: formData.fullName,
  from_email: formData.email,
  phone: formData.phone,
  branch: formData.branch,
  current_year: formData.currentYear,
  message: formData.message,
};
```

These match your template variables (surrounded by `{{ }}`).

---

## Step 7: Test the Form

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section

3. Fill in the form with test data:
   - Full Name: Test User
   - Email: test@example.com
   - Phone: +91 9999999999
   - Branch: Chemical Engineering
   - Current Year: 3rd Year
   - Message: This is a test

4. Click **Send Message**

5. You should see: ✅ "Thank You! Your message has been received successfully."

6. Check your inbox at **Career.placementspark@gmail.com** for the email

---

## Troubleshooting

### Issue: "Email send error" message

**Solution:**
- Verify your Public Key is correct
- Ensure Service ID is "gmail"
- Check that template variables match exactly
- Gmail account must be authorized

### Issue: Emails not arriving

**Solution:**
- Check spam/promotions folder
- Verify Gmail permissions in EmailJS dashboard
- Test a second time

### Issue: "YOUR_EMAILJS_PUBLIC_KEY is not defined"

**Solution:**
- Add `.env` file with your key
- Or replace placeholder with actual key
- Restart the dev server after changes

---

## Production Deployment

When deploying to production:

1. Add environment variables to your hosting platform:
   - Vercel: Add in Settings → Environment Variables
   - Netlify: Add in Site Settings → Build & Deploy → Environment
   - Other platforms: Follow their env variable setup

2. Variables needed:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

3. Never commit `.env` file to version control

---

## Features Implemented

✅ **Form Validation**
- All required fields validated
- Email format validation
- Phone number validation (10+ digits)

✅ **User Experience**
- Loading spinner while sending
- Success message with emoji
- Error messages with details
- Auto-clear form after success

✅ **Email Delivery**
- Sends to: Career.placementspark@gmail.com
- Includes all form data
- Professional email template
- 24-hour response time guarantee

✅ **Security**
- Public Key safe (only frontend)
- No sensitive data exposed
- CORS handled by EmailJS

---

## Support

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify all steps above are completed
3. Clear browser cache and restart dev server
4. Contact EmailJS support: support@emailjs.com

---

**Status:** Ready for deployment ✅
