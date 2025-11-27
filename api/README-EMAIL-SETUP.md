# Email Notifications Setup - Quick Start Guide

## 🔴 IMPORTANT: Action Required

Your email notification system is **installed but not yet configured**. Emails will NOT be sent until you complete the setup below.

---

## ⚡ Quick Setup (5 Minutes)

### Option 1: Automated Setup Wizard (Easiest)

```bash
cd /var/www/html/thalirmanam/api
./setup-smtp-wizard.sh
```

Follow the prompts to configure Gmail, SendGrid, or another SMTP provider.

---

### Option 2: Manual Gmail Setup

1. **Enable 2-Factor Authentication**
   - Visit: https://myaccount.google.com/security
   - Login with `Thalirmanam5@gmail.com`
   - Enable "2-Step Verification"

2. **Generate App Password**
   - Visit: https://myaccount.google.com/apppasswords
   - Create password for "Mail" → "Other (Custom name)"
   - Name it "Thalir Manam"
   - Copy the 16-character password (remove spaces)

3. **Configure SMTP**
   ```bash
   nano /var/www/html/thalirmanam/api/smtp-config.php
   ```

   Change this line:
   ```php
   define('SMTP_PASSWORD', '');
   ```

   To this (with your app password):
   ```php
   define('SMTP_PASSWORD', 'abcdefghijklmnop');
   ```

   Save: Ctrl+X, then Y, then Enter

4. **Test It**
   ```bash
   cd /var/www/html/thalirmanam/api
   php test-smtp.php
   ```

5. **Check Your Email**
   - You should receive 3 test emails at `Thalirmanam5@gmail.com`
   - Check spam folder if not in inbox

---

## 📋 What's Been Set Up

### ✅ Completed
- Email notification system installed
- PHPMailer library installed
- Contact form notifications configured
- Appointment form notifications configured
- WhatsApp URL generation configured
- Test scripts created
- Documentation created

### ⏳ Needs Your Action
- **SMTP password configuration** (see above)
- Test email delivery
- Verify emails are received

---

## 📧 How It Works

### Contact Form
When someone submits the contact form:
1. ✅ Data saved to database
2. 📧 Email sent to `Thalirmanam5@gmail.com` with:
   - Name, email, phone, subject, message
3. 📱 WhatsApp URL generated for `7200385635`

### Appointment Booking
When someone books an appointment:
1. ✅ Data saved to database
2. 📧 Email sent to `Thalirmanam5@gmail.com` with:
   - Parent/child details, date/time, service type
3. 📱 WhatsApp URL generated for `7200385635`

---

## 🧪 Testing

### Test SMTP Configuration
```bash
cd /var/www/html/thalirmanam/api
php test-smtp.php
```

**Expected Output:**
```
✅ SUCCESS: Test email sent!
✅ Email: SENT
✅ WhatsApp: PREPARED
```

### Test Form Submissions
1. Visit your website
2. Submit a contact form
3. Book an appointment
4. Check your email inbox

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `README-EMAIL-SETUP.md` | This file - Quick start guide |
| `EMAIL-ISSUE-RESOLVED.md` | Problem diagnosis & solution |
| `SMTP-SETUP-GUIDE.md` | Detailed SMTP setup instructions |
| `NOTIFICATIONS-README.md` | Complete notification system docs |
| `smtp-config.php` | **SMTP configuration (EDIT THIS!)** |
| `test-smtp.php` | Test script |
| `setup-smtp-wizard.sh` | Automated setup wizard |

---

## ❓ FAQ

### Why aren't emails working?
You need to configure your SMTP password in `smtp-config.php`. The system is installed but needs your credentials to send emails.

### Which SMTP provider should I use?
- **Gmail**: Good for testing, requires App Password
- **SendGrid**: Best for production, free 100 emails/day
- **Mailgun**: Alternative, similar to SendGrid

### How do I know if it's working?
Run `php test-smtp.php` - you should receive test emails at `Thalirmanam5@gmail.com`

### What about WhatsApp?
WhatsApp notifications generate clickable URLs. Click them to send. For automated sending, you need WhatsApp Business API (paid).

### Is this secure?
Yes, but:
- Never commit `smtp-config.php` with passwords to git
- Use App Passwords (not your actual Gmail password)
- Keep credentials secure

---

## 🚨 Troubleshooting

### "SMTP password not configured"
- Edit `smtp-config.php` and add your password
- See setup instructions above

### "SMTP connect() failed"
- Check your App Password is correct
- Verify 2FA is enabled on Gmail
- Check port 587 is not blocked

### Emails not received
- Check spam/junk folder
- Verify SMTP credentials
- Run test script: `php test-smtp.php`
- Check logs: `tail -f /var/log/apache2/error.log`

---

## 🎯 Next Steps

1. ⏳ **Configure SMTP** (using wizard or manual method above)
2. ⏳ **Run test script** (`php test-smtp.php`)
3. ⏳ **Verify emails received** (check inbox)
4. ⏳ **Test form submissions** (on your website)
5. ✅ **You're done!**

---

## 💡 Quick Commands

```bash
# Run setup wizard
cd /var/www/html/thalirmanam/api && ./setup-smtp-wizard.sh

# Edit SMTP config
nano /var/www/html/thalirmanam/api/smtp-config.php

# Test SMTP
cd /var/www/html/thalirmanam/api && php test-smtp.php

# Check logs
tail -f /var/log/apache2/error.log | grep -i "email\|smtp"
```

---

## 📞 Support

Need help? Check these files in order:
1. This file - Quick start
2. `SMTP-SETUP-GUIDE.md` - Detailed instructions
3. `EMAIL-ISSUE-RESOLVED.md` - Problem diagnosis
4. Error logs - `tail -f /var/log/apache2/error.log`

---

**Once configured, your notifications will work perfectly!** ✨
