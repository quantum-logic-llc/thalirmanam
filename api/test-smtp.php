<?php
/**
 * SMTP Email Test Script
 * Tests SMTP configuration and sends a test email
 */

require_once 'notification-helper-smtp.php';

echo "===========================================\n";
echo "SMTP EMAIL CONFIGURATION TEST\n";
echo "===========================================\n\n";

// Check if SMTP password is configured
if (empty(SMTP_PASSWORD)) {
    echo "❌ ERROR: SMTP password not configured!\n\n";
    echo "Please follow these steps:\n";
    echo "1. Open smtp-config.php\n";
    echo "2. Configure your SMTP_PASSWORD\n";
    echo "3. For Gmail: Generate an App Password at https://myaccount.google.com/apppasswords\n";
    echo "4. For SendGrid/Mailgun: Use your API key\n\n";
    echo "See SMTP-SETUP-GUIDE.md for detailed instructions.\n";
    exit(1);
}

// Display current configuration
echo "Current SMTP Configuration:\n";
echo "-------------------------------------------\n";
echo "Host: " . SMTP_HOST . "\n";
echo "Port: " . SMTP_PORT . "\n";
echo "Security: " . SMTP_SECURE . "\n";
echo "Username: " . SMTP_USERNAME . "\n";
echo "Password: " . (empty(SMTP_PASSWORD) ? "❌ NOT SET" : "✅ SET (" . strlen(SMTP_PASSWORD) . " chars)") . "\n";
echo "From Email: " . SMTP_FROM_EMAIL . "\n";
echo "From Name: " . SMTP_FROM_NAME . "\n";
echo "\n";

// Test 1: Send a simple test email
echo "TEST 1: Sending test email...\n";
echo "-------------------------------------------\n";

$testSubject = "Test Email from Thalir Manam Website";
$testBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #4F46E5; color: white; padding: 20px; border-radius: 5px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px; }
        .success { color: #10B981; font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>✅ SMTP Test Email</h2>
        </div>
        <div class='content'>
            <p class='success'>Congratulations! Your SMTP email configuration is working correctly.</p>
            <p>This is a test email from your Thalir Manam website notification system.</p>
            <p><strong>Test Details:</strong></p>
            <ul>
                <li>Sent: " . date('Y-m-d H:i:s') . "</li>
                <li>SMTP Host: " . SMTP_HOST . "</li>
                <li>From: " . SMTP_FROM_EMAIL . "</li>
            </ul>
            <p>Your contact form and appointment booking notifications will now be delivered successfully.</p>
        </div>
    </div>
</body>
</html>
";

$result = sendEmailNotificationSMTP('Thalirmanam5@gmail.com', $testSubject, $testBody);

if ($result) {
    echo "✅ SUCCESS: Test email sent!\n";
    echo "Please check your inbox at: Thalirmanam5@gmail.com\n";
    echo "(Also check spam/junk folder if not in inbox)\n\n";
} else {
    echo "❌ FAILED: Could not send test email\n";
    echo "Check the error log above for details\n\n";
    echo "Common issues:\n";
    echo "- Invalid SMTP password/API key\n";
    echo "- 2FA not enabled on Gmail (required for app passwords)\n";
    echo "- Port 587 blocked by firewall\n";
    echo "- Incorrect SMTP host or username\n\n";
    exit(1);
}

// Test 2: Test Contact Form Notification Format
echo "\nTEST 2: Contact form notification format\n";
echo "-------------------------------------------\n";

$testContactData = [
    'fullName' => 'Test User',
    'email' => 'testuser@example.com',
    'phoneNumber' => '9876543210',
    'subject' => 'SMTP Test - Contact Form',
    'message' => 'This is a test contact form submission using SMTP.'
];

$contactResult = sendContactNotifications($testContactData, 'Thalirmanam5@gmail.com', '7200385635');

echo "Email: " . ($contactResult['email'] ? "✅ SENT" : "❌ FAILED") . "\n";
echo "WhatsApp: " . ($contactResult['whatsapp']['success'] ? "✅ PREPARED" : "❌ FAILED") . "\n";

if ($contactResult['whatsapp']['success']) {
    echo "\nWhatsApp URL: " . $contactResult['whatsapp']['url'] . "\n";
}

echo "\n\n";

// Test 3: Test Appointment Notification Format
echo "TEST 3: Appointment notification format\n";
echo "-------------------------------------------\n";

$testAppointmentData = [
    'parentName' => 'Test Parent',
    'childName' => 'Test Child',
    'childAge' => '5',
    'email' => 'testparent@example.com',
    'phoneNumber' => '9876543210',
    'preferredDate' => date('Y-m-d', strtotime('+7 days')),
    'preferredTime' => 'Morning (9 AM - 12 PM)',
    'serviceType' => 'Speech Therapy',
    'concerns' => 'SMTP Test - This is a test appointment request.'
];

$appointmentResult = sendAppointmentNotifications($testAppointmentData, 'Thalirmanam5@gmail.com', '7200385635');

echo "Email: " . ($appointmentResult['email'] ? "✅ SENT" : "❌ FAILED") . "\n";
echo "WhatsApp: " . ($appointmentResult['whatsapp']['success'] ? "✅ PREPARED" : "❌ FAILED") . "\n";

if ($appointmentResult['whatsapp']['success']) {
    echo "\nWhatsApp URL: " . $appointmentResult['whatsapp']['url'] . "\n";
}

echo "\n\n";
echo "===========================================\n";
echo "TEST COMPLETE\n";
echo "===========================================\n\n";

echo "Summary:\n";
echo "- You should have received 3 emails total\n";
echo "- Check your inbox at: Thalirmanam5@gmail.com\n";
echo "- Check spam/junk folder if emails are not in inbox\n";
echo "- Click the WhatsApp URLs to test WhatsApp notifications\n\n";

echo "Next Steps:\n";
echo "1. Verify emails arrived in your inbox\n";
echo "2. Test actual form submissions on your website\n";
echo "3. Monitor logs: tail -f /var/log/apache2/error.log\n\n";

echo "For setup help, see: SMTP-SETUP-GUIDE.md\n";
?>
