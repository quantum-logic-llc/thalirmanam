<?php
/**
 * SMTP Email Configuration
 *
 * IMPORTANT: Configure your SMTP settings below
 * For Gmail, you need to:
 * 1. Enable 2-factor authentication on your Google account
 * 2. Generate an App Password: https://myaccount.google.com/apppasswords
 * 3. Use the App Password instead of your regular Gmail password
 */

// SMTP Configuration
define('SMTP_HOST', 'smtp.gmail.com');          // Gmail SMTP server
define('SMTP_PORT', 587);                        // TLS port (use 465 for SSL)
define('SMTP_SECURE', 'tls');                    // 'tls' or 'ssl'
define('SMTP_AUTH', true);                       // Enable SMTP authentication
define('SMTP_USERNAME', 'Thalirmanam5@gmail.com');  // Your Gmail address
define('SMTP_PASSWORD', 'paste here');                     // Your Gmail App Password (CONFIGURE THIS!)
define('SMTP_FROM_EMAIL', 'Thalirmanam5@gmail.com'); // From email address
define('SMTP_FROM_NAME', 'Thalir Manam');       // From name

/**
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to: https://myaccount.google.com/apppasswords
 * 2. Login with Thalirmanam5@gmail.com
 * 3. Create a new App Password (select "Mail" and "Other")
 * 4. Copy the 16-character password
 * 5. Paste it in SMTP_PASSWORD above (no spaces)
 *
 * Alternative: Use a dedicated SMTP service like:
 * - SendGrid (free tier available)
 * - Mailgun (free tier available)
 * - Amazon SES (very cheap)
 * - Postmark
 */
?>
