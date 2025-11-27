# SMTP Email Setup Guide

## Problem
Your server's built-in mail system is being blocked by Gmail because it's not properly configured as an authorized sender. This is a common issue with shared hosting and VPS servers.

## Solution
We've implemented PHPMailer with SMTP authentication to send emails reliably through Gmail's SMTP server.

## Setup Steps (REQUIRED)

### Option 1: Using Gmail SMTP (Recommended for Testing)

#### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to: https://myaccount.google.com/security
2. Login with **Thalirmanam5@gmail.com**
3. Find "2-Step Verification" and turn it ON
4. Follow the steps to set it up (you'll need your phone)

#### Step 2: Generate an App Password
1. After enabling 2FA, go to: https://myaccount.google.com/apppasswords
2. Sign in if prompted
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Enter "Thalir Manam Website" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

#### Step 3: Configure SMTP
1. Open the file: `/var/www/html/thalirmanam/api/smtp-config.php`
2. Find this line:
   ```php
   define('SMTP_PASSWORD', '');
   ```
3. Replace it with:
   ```php
   define('SMTP_PASSWORD', 'your-16-char-app-password-here');
   ```
   **Important**: Remove all spaces from the password!

#### Step 4: Test the Configuration
```bash
cd /var/www/html/thalirmanam/api
php test-smtp.php
```

---

### Option 2: Using SendGrid (Recommended for Production)

SendGrid offers a FREE tier with 100 emails/day, which is perfect for your needs.

#### Step 1: Create SendGrid Account
1. Go to: https://signup.sendgrid.com/
2. Sign up for a free account
3. Verify your email address

#### Step 2: Create API Key
1. Login to SendGrid dashboard
2. Go to Settings → API Keys
3. Click "Create API Key"
4. Name it "Thalir Manam Website"
5. Choose "Full Access"
6. Click "Create & View"
7. **COPY THE API KEY** (you won't see it again!)

#### Step 3: Verify Sender Email
1. In SendGrid, go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Fill in your details with **Thalirmanam5@gmail.com**
4. Check your email and click the verification link

#### Step 4: Configure SMTP for SendGrid
Edit `/var/www/html/thalirmanam/api/smtp-config.php`:

```php
define('SMTP_HOST', 'smtp.sendgrid.net');
define('SMTP_PORT', 587);
define('SMTP_SECURE', 'tls');
define('SMTP_AUTH', true);
define('SMTP_USERNAME', 'apikey');  // Literally the word "apikey"
define('SMTP_PASSWORD', 'your-sendgrid-api-key-here');
define('SMTP_FROM_EMAIL', 'Thalirmanam5@gmail.com');
define('SMTP_FROM_NAME', 'Thalir Manam');
```

---

### Option 3: Using Mailgun (Alternative)

Mailgun also offers a free tier.

1. Sign up at: https://www.mailgun.com/
2. Verify your email
3. Get your SMTP credentials from the dashboard
4. Configure in `smtp-config.php`:

```php
define('SMTP_HOST', 'smtp.mailgun.org');
define('SMTP_PORT', 587);
define('SMTP_SECURE', 'tls');
define('SMTP_AUTH', true);
define('SMTP_USERNAME', 'your-mailgun-username');
define('SMTP_PASSWORD', 'your-mailgun-password');
define('SMTP_FROM_EMAIL', 'Thalirmanam5@gmail.com');
define('SMTP_FROM_NAME', 'Thalir Manam');
```

---

## Testing

### Test SMTP Configuration
```bash
cd /var/www/html/thalirmanam/api
php test-smtp.php
```

This will:
- Test SMTP connection
- Send a test email to Thalirmanam5@gmail.com
- Show any errors if configuration is wrong

### Test Full System
```bash
cd /var/www/html/thalirmanam/api
php test-notifications.php
```

---

## Troubleshooting

### "SMTP connect() failed"
- Check that you've enabled 2FA on Gmail
- Verify your app password is correct (no spaces)
- Make sure port 587 is not blocked by firewall

### "Invalid credentials"
- Double-check the app password
- Make sure you're using the app password, NOT your Gmail password
- Try regenerating a new app password

### "Connection timed out"
- Port 587 might be blocked by your firewall
- Try port 465 with SSL instead (change in smtp-config.php)

### Still Not Working?
Check the error logs:
```bash
tail -f /var/log/apache2/error.log
```

---

## Security Notes

1. **NEVER** commit `smtp-config.php` to git with your password
2. Keep your App Password secure
3. Regularly rotate your SMTP credentials
4. Use environment variables for production (not hardcoded passwords)

---

## Recommended Setup for Production

For production, I recommend:

1. **Use SendGrid or Mailgun** (not Gmail SMTP)
   - More reliable
   - Better deliverability
   - Professional email infrastructure
   - Free tiers available

2. **Add `.gitignore` entry**:
   ```
   api/smtp-config.php
   ```

3. **Use environment variables** instead of hardcoded passwords

4. **Monitor email delivery** through your SMTP provider's dashboard

---

## Current Status

- ✅ PHPMailer installed
- ✅ SMTP notification helper created
- ✅ Contact form updated to use SMTP
- ✅ Appointment form updated to use SMTP
- ⏳ **SMTP credentials need to be configured**

## Next Steps

1. Choose your SMTP provider (Gmail for testing, SendGrid for production)
2. Follow the setup steps above
3. Configure `smtp-config.php` with your credentials
4. Run `php test-smtp.php` to verify
5. Test with actual form submissions

---

## Support

If you need help:
1. Check the error logs
2. Run the test scripts
3. Verify your SMTP credentials
4. Make sure ports 587/465 are not blocked
