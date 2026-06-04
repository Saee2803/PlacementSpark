# EmailJS Setup Guide for PlacementSpark Contact Form

## Overview
The contact form has been enhanced to send emails directly using EmailJS. Follow these steps to configure it.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Website](https://www.emailjs.com/)
2. Click "Sign Up" button
3. Create a free account (no credit card required for testing)
4. Verify your email

## Step 2: Add Email Service

1. Log in to your EmailJS dashboard
2. Click on "Email Services" in the left sidebar
3. Click "Add Service" button
4. Select "Gmail" (or your preferred email service)
5. Connect your email account:
   - Choose "Gmail" as the service
   - Click "Connect Gmail"
   - Authenticate with your Gmail account (Career.placementspark@gmail.com)
6. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Name it: `contact_form_template`
4. Fill in the template content:

### Email Template Setup:

**Subject:**
```
New Placement Spark Inquiry from {{from_name}}
```

**Email Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f4f4f4; }
        .header { background: #002d5c; color: white; padding: 20px; border-radius: 5px; }
        .content { background: white; padding: 20px; margin-top: 10px; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #002d5c; }
        .field-value { color: #555; margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Inquiry - Placement Spark</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="field-label">Full Name:</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email Address:</div>
                <div class="field-value"><a href="mailto:{{from_email}}">{{from_email}}</a></div>
            </div>
            
            <div class="field">
                <div class="field-label">Phone Number:</div>
                <div class="field-value">{{phone}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Branch:</div>
                <div class="field-value">{{branch}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Current Year:</div>
                <div class="field-value">{{current_year}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">{{message}}</div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin-top: 20px; padding-top: 20px;">
            <p style="font-size: 12px; color: #999;">
                This is an automated message from the PlacementSpark website contact form.
                <br>Reply directly to {{from_email}} or use their phone number: {{phone}}
            </p>
        </div>
    </div>
</body>
</html>
```

5. Click "Save"
6. Copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" in the sidebar
2. Click "API Keys"
3. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## Step 5: Update Contact.jsx

Replace the placeholders in `src/components/Contact.jsx`:

```javascript
// Line 20: Replace YOUR_EMAILJS_PUBLIC_KEY
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");  // Replace with your Public Key

// Line 94: Replace in emailjs.send()
await emailjs.send(
  "YOUR_EMAILJS_SERVICE_ID",      // Replace with your Service ID
  "YOUR_EMAILJS_TEMPLATE_ID",     // Replace with your Template ID
  emailParams
);
```

**Example:**
```javascript
emailjs.init("abc123def456ghi789");

await emailjs.send(
  "service_1a2b3c4d5e6f7g8h",
  "template_9i8j7k6l5m4n3o2p",
  emailParams
);
```

## Step 6: Test the Form

1. Run the development server: `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check Career.placementspark@gmail.com for the email

## Environment Variables (Optional but Recommended)

For better security, use environment variables:

1. Create `.env.local` in the project root:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

2. Update Contact.jsx:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailParams
);
```

## Troubleshooting

### Issue: "Failed to send message"
- **Cause**: Incorrect credentials
- **Fix**: Double-check Service ID, Template ID, and Public Key

### Issue: Email not received
- **Cause**: Gmail service not connected properly
- **Fix**: Go back to Email Services and reconnect Gmail

### Issue: Rate limiting
- **Cause**: Too many requests in short time
- **Fix**: EmailJS free tier has limits. Consider upgrading if needed

## Features Implemented

✅ **Increased dropdown text size** (16px)
✅ **Form validation** for all required fields
✅ **Email functionality** via EmailJS
✅ **Loading state** with spinner while sending
✅ **Success message** with emoji and clear feedback
✅ **Error handling** with user-friendly messages
✅ **Form auto-clear** after successful submission
✅ **Validation error messages** displayed under each field
✅ **Maintains dark theme** and existing design

## Email Validation

The form validates:
- Full Name: Required, non-empty
- Email: Required, valid format
- Phone: Required, minimum 10 digits
- Branch: Required, dropdown selection
- Current Year: Required, dropdown selection
- Message: Optional

## Support

For more info on EmailJS:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
