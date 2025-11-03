# Email Setup Guide for Thalir Manam Website

This guide will help you set up email functionality for the Contact Us and Appointment forms using EmailJS.

## Overview

The website now supports sending emails through two forms:
1. **Contact Us Form** (`/contact-us`) - For general inquiries
2. **Appointment Form** (`/appointments`) - For booking appointments

Both forms use [EmailJS](https://www.emailjs.com/) - a free service that allows sending emails directly from client-side JavaScript without a backend server.

## Setup Instructions

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add an Email Service

1. Log in to your EmailJS dashboard
2. Go to "Email Services" section
3. Click "Add New Service"
4. Choose your email provider (Gmail is recommended)
5. Follow the instructions to connect your email account
6. **Copy the Service ID** - you'll need this later

### Step 3: Create Email Templates

You need to create **two templates** - one for contact form and one for appointments.

#### Template 1: Contact Form

1. Go to "Email Templates" section
2. Click "Create New Template"
3. Set up the template with these parameters:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from {{from_name}}

**Content (HTML):**
```html
<p><strong>New Contact Form Submission</strong></p>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone_number}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the Thalir Manam contact form.</em></p>
```

4. **Copy the Template ID**
5. Save the template

#### Template 2: Appointment Form

1. Create another new template
2. Set up the template with these parameters:

**Template Name:** Appointment Request

**Subject:** New Appointment Request - {{child_name}}

**Content (HTML):**
```html
<p><strong>New Appointment Request</strong></p>

<h3>Parent/Guardian Details:</h3>
<p><strong>Name:</strong> {{parent_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone_number}}</p>

<h3>Child Details:</h3>
<p><strong>Name:</strong> {{child_name}}</p>
<p><strong>Age:</strong> {{child_age}} years</p>

<h3>Appointment Details:</h3>
<p><strong>Service Type:</strong> {{service_type}}</p>
<p><strong>Preferred Date:</strong> {{preferred_date}}</p>
<p><strong>Preferred Time:</strong> {{preferred_time}}</p>

<h3>Additional Concerns:</h3>
<p>{{concerns}}</p>

<hr>
<p><em>This email was sent from the Thalir Manam appointment booking form.</em></p>
```

3. **Copy the Template ID**
4. Save the template

### Step 4: Get Your Public Key

1. Go to "Account" section in EmailJS dashboard
2. Find "API Keys" tab
3. **Copy your Public Key** (it starts with "user_" or similar)

### Step 5: Configure Environment Variables

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add the following variables with your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID=your_appointment_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from EmailJS
4. Save the file

**Important:** Never commit `.env.local` to version control. It should already be in `.gitignore`.

### Step 6: Rebuild the Application

After setting up the environment variables:

```bash
npm run build
```

Or for development:

```bash
npm run dev
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the Contact Us page (`/contact-us`)
3. Fill out the form and click "Send Message"
4. Check your email (the one configured in EmailJS) for the message
5. Repeat for the Appointment page (`/appointments`)

## Fallback Behavior

If EmailJS is not configured (environment variables are missing), the forms will automatically fall back to using a `mailto:` link. This will open the user's default email client with pre-filled information.

## Email Destinations

Both forms send emails to: **thalirmanam5@gmail.com**

To change this, update the email address in:
- `src/components/sections/contactSectionNew.jsx` (line 65)
- `src/components/sections/appointmentBooking.jsx` (line 76)

## Troubleshooting

### Emails not being sent

1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure EmailJS service is active
4. Check your EmailJS dashboard for quota limits (free tier has 200 emails/month)

### Template variables not showing

1. Make sure template parameter names match exactly (case-sensitive)
2. Re-save the template in EmailJS dashboard
3. Clear browser cache and rebuild the app

### Form shows error message

1. Check network tab in browser developer tools
2. Verify EmailJS public key is correct
3. Check EmailJS service status at [status.emailjs.com](https://status.emailjs.com)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

For higher volume, consider upgrading to a paid plan.

## Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- This is safe for EmailJS as it's designed for client-side use
- The public key is meant to be public
- Never expose your EmailJS private key (if you have one)

## Support

For EmailJS-specific issues, visit:
- Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Last Updated:** 2025-11-03
