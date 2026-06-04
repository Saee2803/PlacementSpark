# 🔄 Contact Form Complete Flow Diagram

## User Journey: Form Submission

```
┌─────────────────────────────────────────────────────────────┐
│  User Visits Contact Section                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │   Sees Contact Form with   │
        │  • Full Name Input         │
        │  • Email Input             │
        │  • Phone Input             │
        │  • Branch Dropdown (18px)  │ ◄── ENLARGED TEXT
        │  • Year Dropdown (18px)    │ ◄── ENLARGED TEXT
        │  • Message Textarea        │
        │  • Send Message Button     │
        └────────────────┬───────────┘
                         │
                         ▼
            ┌─────────────────────────────┐
            │ User Fills All Fields       │
            └────────────┬────────────────┘
                         │
                         ▼
        ┌──────────────────────────────────────┐
        │ User Clicks "Send Message"           │
        └──────────────────┬───────────────────┘
                           │
                           ▼
        ┌──────────────────────────────────────┐
        │ CLIENT-SIDE VALIDATION               │
        │ ✓ Full Name (non-empty)              │
        │ ✓ Email (format check)               │
        │ ✓ Phone (10+ digits)                 │
        │ ✓ Branch (selected)                  │
        │ ✓ Year (selected)                    │
        └──────────────────┬───────────────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
         INVALID ◄─────────┐    VALID  │
              │             │           ▼
              │      Red    │    ┌──────────────────────┐
              │      Error  │    │ Button Shows         │
              │      Msg    │    │ "⟳ Sending..."      │
              │      Under  │    │ (Loading Spinner)    │
              │      Field  │    │ Button Disabled      │
              │             │    └──────────┬───────────┘
              │             │               │
              │             │               ▼
              │             │    ┌──────────────────────────┐
              │             │    │ Send Email via EmailJS   │
              │             │    │ to Gmail Service         │
              │             │    └──────────┬───────────────┘
              │             │               │
              │             │     ┌─────────┴─────────┐
              │             │     │                   │
              │             │  SUCCESS            FAILED
              │             │     │                   │
              │             │     ▼                   ▼
              │             │  ┌──────────────┐  ┌──────────┐
              │             │  │ Email Sends  │  │ EmailJS  │
              │             │  │ to:          │  │ Error    │
              │             │  │ Career.      │  │ Returned │
              │             │  │ placement    │  └────┬─────┘
              │             │  │ spark@gmail  │       │
              │             │  │ .com         │       │
              │             │  └──────┬───────┘       │
              │             │         │               │
              │             │         ▼               ▼
              │             │    ┌────────────────────────────┐
              │             │    │ Show Error Message:        │
              │             │    │ ❌ Something went wrong.   │
              │             │    │ Please try again or        │
              │             │    │ contact us directly.       │
              │             │    │ Red background             │
              │             │    │ (5s auto-dismiss)          │
              │             │    │ [User can Retry]           │
              │             │    └────────────────────────────┘
              │             │
              │             └──────► User Fixes & Retries
              │
              └─────────────────► User Fixes & Retries
                                  (Errors clear on type)

                                          │
                                          ▼
                    ┌───────────────────────────────────┐
                    │ Show Success Message:             │
                    │ 🎉 Thank You!                     │
                    │                                   │
                    │ Your message has been received    │
                    │ successfully.                     │
                    │                                   │
                    │ Our team will contact you within  │
                    │ 24 hours.                         │
                    │ Green background                  │
                    │ (5s auto-dismiss)                 │
                    └───────────────────┬───────────────┘
                                        │
                                        ▼
                            ┌─────────────────────────┐
                            │ Form Auto-Clears:       │
                            │ • All fields emptied     │
                            │ • Ready for new entry    │
                            │ • User can submit again  │
                            └─────────────────────────┘
                                        │
                                        ▼
                            ┌─────────────────────────┐
                            │ Message Auto-Dismisses  │
                            │ after 5 seconds         │
                            └─────────────────────────┘
```

---

## Email Delivery Flow

```
PlacementSpark Website
        │
        │ Form Data Submitted
        ▼
┌──────────────────────┐
│  Contact.jsx         │
│  • Validates form    │
│  • Prepares data     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  EmailJS Service (emailjs.com)       │
│  • Service ID: gmail                 │
│  • Template ID: contact_form_template│
│  • Public Key: YOUR_PUBLIC_KEY       │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  Gmail Service (Google)              │
│  • Authorizes EmailJS                │
│  • Prepares email                    │
└──────────┬───────────────────────────┘
           │
           ▼
┌────────────────────────────────────────────┐
│  Email Inbox: Career.placementspark@gmail  │
│                                            │
│  Subject: New Placement Spark Inquiry      │
│  ---                                       │
│  Name: [User Input]                        │
│  Email: [User Input]                       │
│  Phone: [User Input]                       │
│  Branch: [User Input]                      │
│  Current Year: [User Input]                │
│  Message: [User Input]                     │
└────────────────────────────────────────────┘
```

---

## Validation Logic Flow

```
User Submits Form
       │
       ▼
validateForm() Called
       │
       ├─► Check Full Name
       │   ├─ Empty? → Error: "Required"
       │   └─ OK ✓
       │
       ├─► Check Email
       │   ├─ Empty? → Error: "Required"
       │   ├─ Invalid Format? → Error: "Invalid"
       │   └─ OK ✓
       │
       ├─► Check Phone
       │   ├─ Empty? → Error: "Required"
       │   ├─ < 10 digits? → Error: "Invalid"
       │   └─ OK ✓
       │
       ├─► Check Branch
       │   ├─ Not Selected? → Error: "Required"
       │   └─ OK ✓
       │
       └─► Check Current Year
           ├─ Not Selected? → Error: "Required"
           └─ OK ✓
       │
       ▼
All Errors Collected
       │
       ├─► If ANY Errors Found:
       │   ├─ Display all errors
       │   ├─ Highlight error fields (red border)
       │   ├─ Show error text below field
       │   └─ Prevent submission
       │
       └─► If NO Errors:
           ├─ Proceed to Send
           ├─ Show loading state
           └─ Call EmailJS
```

---

## State Management Flow

```
Component Initialization
       │
       ├─► useState(formData) → Stores form inputs
       ├─► useState(loading) → Tracks sending status
       ├─► useState(submitted) → Tracks success state
       ├─► useState(error) → Tracks error message
       └─► useState(errors) → Tracks field errors

Form Usage
       │
       ├─► User Types → handleChange() → Updates formData
       │
       ├─► User Submits → handleSubmit()
       │   ├─ Call validateForm()
       │   ├─ If errors: Display errors, return
       │   ├─ If valid: Set loading=true
       │   ├─ Call emailjs.send()
       │   ├─ On success: Set submitted=true
       │   │   └─ Auto-clear after 5s
       │   ├─ On error: Set error=message
       │   │   └─ Auto-clear after 5s
       │   └─ Set loading=false
       │
       └─► Errors Cleared on Type
           └─ User starts typing → Clear that field's error
```

---

## Files & Dependencies Flow

```
┌─────────────────────────────────────┐
│  React Application Root             │
│  (App.jsx → main.jsx)               │
└────────────┬────────────────────────┘
             │
             ├─► Import: index.css ◄───────────┐
             │   (Contains: .form-select)      │
             │                                  │
             └─► Render: <Contact />            │
                 │                              │
                 ├─► Form Validation ✓          │
                 │   (Lines 42-66)              │
                 │                              │
                 ├─► EmailJS Config ✓           │
                 │   (Line 24)                  │
                 │                              │
                 ├─► Branch Dropdown ◄──────────┘
                 │   (Uses .form-select class)
                 │
                 ├─► Year Dropdown ◄────────────┐
                 │   (Uses .form-select class)  │
                 │                              │
                 ├─► Success Message ✓          │
                 │   (Lines 415-425)            │
                 │                              │
                 └─► Error Message ✓            │
                     (Lines 427-437)            │
```

---

## Responsive Design Flow

```
Dropdown Sizing Logic:

User Opens Website
       │
       ├─► MOBILE VIEW (< 768px)
       │   ├─ Font Size: 18px
       │   ├─ Padding: 14px 40px 14px 16px
       │   ├─ Line Height: 1.8
       │   └─ Option Padding: 14px
       │       Result: LARGE & READABLE
       │
       └─► DESKTOP VIEW (≥ 768px)
           ├─ Font Size: 18px
           ├─ Padding: 12px 40px 12px 16px
           ├─ Line Height: 1.5
           └─ Option Padding: 12px
               Result: LARGE & READABLE

CSS:
┌────────────────────────────┐
│ @media (max-width: 768px)  │
│   .form-select             │
│   • font-size: 18px        │
│   • padding: 14px 40px...  │
│   • option padding: 14px   │
└────────────────────────────┘
        vs
┌────────────────────────────┐
│ @media (min-width: 769px)  │
│   .form-select             │
│   • font-size: 18px        │
│   • padding: 12px 40px...  │
│   • option padding: 12px   │
└────────────────────────────┘
```

---

## Configuration Setup Flow

```
Step 1: Create EmailJS Account
   emailjs.com
       │
       ▼
Step 2: Add Gmail Service
   Connect Career.placementspark@gmail.com
       │
       ▼
Step 3: Create Email Template
   Template ID: contact_form_template
       │
       ▼
Step 4: Get Public Key
   From EmailJS Dashboard
       │
       ▼
Step 5: Create .env File
   VITE_EMAILJS_PUBLIC_KEY=your_key
       │
       ▼
Step 6: Update Contact.jsx
   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
       │
       ▼
Step 7: Test Form
   Fill & Submit → Check Email
       │
       ▼
✅ Ready for Production
   Deploy with env variables
```

---

**Overall Status:** ✅ Complete & Ready
