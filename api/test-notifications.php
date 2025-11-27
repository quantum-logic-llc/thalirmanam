<?php
/**
 * Test Notifications Script
 * Run this script to test email and WhatsApp notification functionality
 */

require_once 'notification-helper.php';

// Test admin credentials
define('TEST_ADMIN_EMAIL', 'Thalirmanam5@gmail.com');
define('TEST_ADMIN_WHATSAPP', '7200385635');

echo "===========================================\n";
echo "NOTIFICATION SYSTEM TEST\n";
echo "===========================================\n\n";

// Test 1: Contact Form Notification
echo "TEST 1: Contact Form Notification\n";
echo "-------------------------------------------\n";

$testContactData = [
    'fullName' => 'Test User',
    'email' => 'testuser@example.com',
    'phoneNumber' => '9876543210',
    'subject' => 'Test Contact Submission',
    'message' => 'This is a test message from the notification system.'
];

try {
    $contactResults = sendContactNotifications($testContactData, TEST_ADMIN_EMAIL, TEST_ADMIN_WHATSAPP);

    echo "Email Status: " . ($contactResults['email'] ? "✅ SUCCESS" : "❌ FAILED") . "\n";
    echo "WhatsApp Status: " . ($contactResults['whatsapp']['success'] ? "✅ PREPARED" : "❌ FAILED") . "\n";

    if ($contactResults['whatsapp']['success']) {
        echo "WhatsApp URL: " . $contactResults['whatsapp']['url'] . "\n";
        echo "\nTo send WhatsApp, open the URL above in your browser\n";
        echo "or click this link in a system that has WhatsApp:\n";
        echo $contactResults['whatsapp']['url'] . "\n";
    }

} catch (Exception $e) {
    echo "❌ ERROR: " . $e->getMessage() . "\n";
}

echo "\n\n";

// Test 2: Appointment Notification
echo "TEST 2: Appointment Notification\n";
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
    'concerns' => 'Test concerns - This is a test appointment request.'
];

try {
    $appointmentResults = sendAppointmentNotifications($testAppointmentData, TEST_ADMIN_EMAIL, TEST_ADMIN_WHATSAPP);

    echo "Email Status: " . ($appointmentResults['email'] ? "✅ SUCCESS" : "❌ FAILED") . "\n";
    echo "WhatsApp Status: " . ($appointmentResults['whatsapp']['success'] ? "✅ PREPARED" : "❌ FAILED") . "\n";

    if ($appointmentResults['whatsapp']['success']) {
        echo "WhatsApp URL: " . $appointmentResults['whatsapp']['url'] . "\n";
        echo "\nTo send WhatsApp, open the URL above in your browser\n";
        echo "or click this link in a system that has WhatsApp:\n";
        echo $appointmentResults['whatsapp']['url'] . "\n";
    }

} catch (Exception $e) {
    echo "❌ ERROR: " . $e->getMessage() . "\n";
}

echo "\n\n";
echo "===========================================\n";
echo "TEST COMPLETE\n";
echo "===========================================\n\n";

echo "IMPORTANT NOTES:\n";
echo "1. Check your email inbox at: " . TEST_ADMIN_EMAIL . "\n";
echo "2. For WhatsApp, you need to manually click the generated URLs\n";
echo "3. Check error logs for detailed information: tail -f /var/log/apache2/error.log\n";
echo "4. For production WhatsApp automation, integrate WhatsApp Business API\n\n";

echo "Email Configuration:\n";
echo "- PHP mail() function: " . (function_exists('mail') ? "✅ Available" : "❌ Not Available") . "\n";
echo "- Sendmail: " . (file_exists('/usr/sbin/sendmail') ? "✅ Installed" : "❌ Not Installed") . "\n";
?>
