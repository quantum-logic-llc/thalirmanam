# Email & WhatsApp Notifications Setup

## Overview
This notification system automatically sends email and WhatsApp notifications when users submit forms through your website (Contact Form and Appointment Booking).

## Configuration

### Admin Contact Details
The notifications are sent to:
- **Email**: Thalirmanam5@gmail.com
- **WhatsApp**: 7200385635

These settings are configured in:
- `/api/contact-handler.php` (line 34-35)
- `/api/appointments/create.php` (line 35-36)

### How to Update Contact Details
To change the admin email or WhatsApp number:

1. Edit `/api/contact-handler.php`:
```php
define('ADMIN_EMAIL', 'your-new-email@gmail.com');
define('ADMIN_WHATSAPP', 'your-new-number');
```

2. Edit `/api/appointments/create.php`:
```php
define('ADMIN_EMAIL', 'your-new-email@gmail.com');
define('ADMIN_WHATSAPP', 'your-new-number');
```

## Features

### 1. Contact Form Notifications
When someone submits the contact form, you receive:

**Email Notification includes:**
- Full Name
- Email Address (clickable mailto link)
- Phone Number (clickable tel link)
- Subject
- Message
- Timestamp

**WhatsApp Notification includes:**
- All the same information formatted for WhatsApp
- Direct link to send the message

### 2. Appointment Booking Notifications
When someone books an appointment, you receive:

**Email Notification includes:**
- Parent/Guardian Name
- Child's Name and Age
- Contact Information (email & phone)
- Preferred Date & Time (highlighted)
- Service Type
- Additional Concerns
- Timestamp

**WhatsApp Notification includes:**
- All the same information formatted for WhatsApp
- Direct link to send the message

## How It Works

### Email Notifications
- Uses PHP's built-in `mail()` function
- Automatically sends HTML formatted emails
- Reply-to address is set to the submitter's email
- All emails are logged in system error logs

### WhatsApp Notifications
- Generates WhatsApp Web/API URLs
- Currently creates clickable links (manual action required)
- Phone numbers are automatically formatted with country code (91 for India)
- Messages are pre-formatted with all submission details

**Important**: WhatsApp notifications currently generate URLs that need to be clicked manually. For fully automated WhatsApp sending, you would need to integrate with WhatsApp Business API (paid service).

## Testing

### Run the Test Script
```bash
cd /var/www/html/thalirmanam/api
php test-notifications.php
```

This will:
1. Send test emails to your admin email
2. Generate WhatsApp test URLs
3. Show the status of each notification
4. Display WhatsApp URLs you can click to send test messages

### Check Email Delivery
1. Check your inbox at: Thalirmanam5@gmail.com
2. Check spam/junk folder if emails are not in inbox
3. Check mail logs: `tail -f /var/log/mail.log`

### Check Error Logs
```bash
# Apache error logs
tail -f /var/log/apache2/error.log

# PHP error logs
tail -f /var/log/php-errors.log
```

## Files Structure

```
api/
├── notification-helper.php       # Core notification functions
├── contact-handler.php           # Contact form handler (with notifications)
├── appointments/
│   └── create.php               # Appointment handler (with notifications)
├── test-notifications.php        # Testing script
└── NOTIFICATIONS-README.md       # This file
```

## Email Template Preview

### Contact Form Email
```
🆕 New Contact Form Submission
Thalir Manam Website

👤 Full Name: [Name]
📧 Email: [Email]
📱 Phone Number: [Phone]
📋 Subject: [Subject]
💬 Message: [Message]

This is an automated notification from Thalir Manam website contact form.
Please respond to the customer as soon as possible.
```

### Appointment Email
```
📅 New Appointment Request
Thalir Manam Website

⏰ Preferred Date & Time:
📆 [Date]
🕐 [Time Slot]

👨‍👩‍👧 Parent/Guardian Name: [Name]
👶 Child's Name: [Child Name]
🎂 Child's Age: [Age] years
📧 Email: [Email]
📱 Phone Number: [Phone]
🏥 Service Type: [Service]
📝 Additional Concerns: [Concerns]

This is an automated notification from Thalir Manam website appointment booking system.
Please contact the customer to confirm the appointment.
```

## WhatsApp Integration Options

### Current Implementation (URL-based)
- Free solution
- Requires manual clicking of URL
- Works with any WhatsApp account
- Suitable for low to medium traffic

### For Automated WhatsApp (Future Enhancement)
To send WhatsApp messages automatically, you can integrate:

1. **WhatsApp Business API** (Official)
   - Requires business verification
   - Paid service
   - Most reliable
   - Website: https://business.whatsapp.com/products/business-api

2. **Third-party Services**
   - Twilio WhatsApp API
   - MessageBird
   - Gupshup
   - These services charge per message

## Troubleshooting

### Email Not Received
1. Check spam/junk folder
2. Verify email configuration: `php -r "echo (function_exists('mail') ? 'Mail available' : 'Mail NOT available');"`
3. Check sendmail is installed: `which sendmail`
4. Test with: `php test-notifications.php`
5. Check error logs: `tail -f /var/log/apache2/error.log`

### WhatsApp Links Not Working
1. Ensure WhatsApp is installed on your device
2. Check that the phone number format is correct (should include country code)
3. Try opening the URL in a browser where WhatsApp Web is accessible
4. Verify the phone number: 7200385635 is correct

### Database Connection Issues
1. Verify database credentials in `/api/db-config.php`
2. Ensure MySQL is running: `systemctl status mysql`
3. Test database connection

## Security Notes

1. All user input is sanitized before processing
2. SQL injection protection via prepared statements
3. XSS protection via htmlspecialchars
4. Email validation before processing
5. Phone number validation (Indian format)
6. CORS headers configured for Next.js frontend

## Support & Maintenance

### Regular Checks
- Monitor error logs weekly
- Test notification system monthly
- Keep PHP and sendmail updated
- Backup notification-helper.php before making changes

### Log Monitoring
```bash
# Watch real-time logs
tail -f /var/log/apache2/error.log | grep -i "notification"

# Check recent notification activity
grep -i "notification" /var/log/apache2/error.log | tail -20
```

## Additional Notes

1. **Data Privacy**: All form submissions are stored in the database and also sent via notifications. Ensure compliance with data protection regulations.

2. **Rate Limiting**: Consider implementing rate limiting to prevent spam submissions.

3. **Backup**: The old notification functions have been removed from the code. If needed, they can be restored from git history.

4. **Testing in Production**: When testing in production, use the test script or submit actual forms through the website.

## Contact

For issues or questions about this notification system, check:
- Error logs: `/var/log/apache2/error.log`
- Test script: `php /var/www/html/thalirmanam/api/test-notifications.php`
- Database logs: Check MySQL logs for any database-related issues
