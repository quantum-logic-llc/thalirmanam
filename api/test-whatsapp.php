<?php
/**
 * WhatsApp Notification Test Script
 * Tests WhatsApp integration with different providers
 */

require_once __DIR__ . '/notification-helper-smtp.php';

echo "===========================================\n";
echo "WHATSAPP NOTIFICATION TEST\n";
echo "===========================================\n\n";

// Get current configuration
$config = getWhatsAppConfig();

echo "Current WhatsApp Configuration:\n";
echo "-------------------------------------------\n";
echo "Provider: " . $config['provider'] . "\n";
echo "Enabled: " . ($config['enabled'] ? 'YES' : 'NO') . "\n";
echo "Configured: " . ($config['configured'] ? 'YES ✅' : 'NO ❌') . "\n";

if ($config['provider'] === 'fonnte') {
    echo "Target: " . ($config['target'] ?? 'Not set') . "\n";
    echo "API Token: " . (empty($config['api_token']) ? '❌ NOT SET' : '✅ SET (' . strlen($config['api_token']) . ' chars)') . "\n";
} elseif ($config['provider'] === 'callmebot') {
    echo "Phone: " . ($config['phone'] ?? 'Not set') . "\n";
    echo "API Key: " . (empty($config['api_key']) ? '❌ NOT SET' : '✅ SET (' . strlen($config['api_key']) . ' chars)') . "\n";
} elseif ($config['provider'] === 'twilio') {
    echo "Account SID: " . ($config['account_sid'] ?? 'Not set') . "\n";
    echo "Auth Token: " . (empty($config['auth_token']) ? 'NOT SET' : 'SET') . "\n";
    echo "From: " . ($config['from'] ?? 'Not set') . "\n";
    echo "To: " . ($config['to'] ?? 'Not set') . "\n";
}

echo "\n";

if (!$config['configured']) {
    echo "⚠️  WARNING: WhatsApp is not configured!\n";
    echo "-------------------------------------------\n";

    if ($config['provider'] === 'fonnte') {
        echo "\nTo configure Fonnte (RECOMMENDED):\n";
        echo "1. Sign up at: https://fonnte.com/\n";
        echo "2. Login and create a device\n";
        echo "3. Scan QR code with your WhatsApp (+91 7200385635)\n";
        echo "4. Copy your API token from dashboard\n";
        echo "5. Add token to /api/whatsapp-config.php\n";
        echo "   define('FONNTE_API_TOKEN', 'your-token-here');\n";
    } elseif ($config['provider'] === 'callmebot') {
        echo "\nTo configure CallMeBot (FREE & EASY):\n";
        echo "1. Save this contact: +34 644 28 95 07\n";
        echo "2. Send WhatsApp message: 'I allow callmebot to send me messages'\n";
        echo "3. Wait for API key in reply\n";
        echo "4. Add API key to /api/whatsapp-config.php\n";
        echo "   define('WHATSAPP_API_KEY', 'your-key-here');\n";
    } elseif ($config['provider'] === 'twilio') {
        echo "\nTo configure Twilio:\n";
        echo "1. Sign up at: https://www.twilio.com/\n";
        echo "2. Get Account SID and Auth Token\n";
        echo "3. Set up WhatsApp sandbox\n";
        echo "4. Update credentials in /api/whatsapp-config.php\n";
    }

    echo "\nFor detailed instructions, see: WHATSAPP-SETUP-GUIDE.md\n";
    echo "\n===========================================\n";
    echo "TEST SKIPPED - Please configure first\n";
    echo "===========================================\n";
    exit(1);
}

echo "✅ Configuration looks good! Running tests...\n\n";

// Test 1: Simple test message
echo "TEST 1: Simple WhatsApp notification\n";
echo "-------------------------------------------\n";
$testMessage = "🧪 *TEST MESSAGE*\n\nThis is a test WhatsApp notification from Thalir Manam website.\n\nIf you receive this, your WhatsApp integration is working perfectly! ✅";

$result = sendWhatsAppNotification('7200385635', $testMessage);

echo "Status: " . ($result['success'] ? '✅ SUCCESS' : '❌ FAILED') . "\n";
echo "Provider: " . ($result['provider'] ?? 'unknown') . "\n";
if (isset($result['error'])) {
    echo "Error: " . $result['error'] . "\n";
}
echo "\n";

// Test 2: Contact form notification
echo "TEST 2: Contact form notification format\n";
echo "-------------------------------------------\n";
$contactData = [
    'fullName' => 'Test User',
    'email' => 'testuser@example.com',
    'phoneNumber' => '9876543210',
    'subject' => 'WhatsApp Test - Contact Form',
    'message' => 'This is a test contact form submission to verify WhatsApp notifications.'
];

$contactMessage = formatContactWhatsAppMessage($contactData);
$result = sendWhatsAppNotification('7200385635', $contactMessage);

echo "Status: " . ($result['success'] ? '✅ SUCCESS' : '❌ FAILED') . "\n";
if (isset($result['error'])) {
    echo "Error: " . $result['error'] . "\n";
}
echo "\n";

// Test 3: Appointment notification
echo "TEST 3: Appointment notification format\n";
echo "-------------------------------------------\n";
$appointmentData = [
    'parentName' => 'Test Parent',
    'childName' => 'Test Child',
    'childAge' => '5',
    'email' => 'testparent@example.com',
    'phoneNumber' => '9876543210',
    'preferredDate' => date('Y-m-d', strtotime('+7 days')),
    'preferredTime' => 'Morning (9 AM - 12 PM)',
    'serviceType' => 'Speech Therapy',
    'concerns' => 'WhatsApp Test - This is a test appointment request.'
];

$appointmentMessage = formatAppointmentWhatsAppMessage($appointmentData);
$result = sendWhatsAppNotification('7200385635', $appointmentMessage);

echo "Status: " . ($result['success'] ? '✅ SUCCESS' : '❌ FAILED') . "\n";
if (isset($result['error'])) {
    echo "Error: " . $result['error'] . "\n";
}
echo "\n";

echo "===========================================\n";
echo "TEST COMPLETE\n";
echo "===========================================\n\n";

echo "Summary:\n";
echo "- Provider: " . $config['provider'] . "\n";
echo "- Target: +91 7200385635\n";
echo "- Total messages sent: 3\n\n";

if ($config['provider'] === 'fonnte') {
    echo "📱 Check your WhatsApp on +91 7200385635\n";
    echo "You should have received 3 messages from YOUR OWN NUMBER!\n\n";

    echo "Benefits of Fonnte:\n";
    echo "✅ Messages sent from your WhatsApp number\n";
    echo "✅ Customers will recognize your number\n";
    echo "✅ Can reply directly to the message\n";
    echo "✅ Rich media support (images, documents)\n\n";

    echo "Check your Fonnte dashboard for message logs:\n";
    echo "https://fonnte.com/dashboard\n";
} elseif ($config['provider'] === 'callmebot') {
    echo "📱 Check your WhatsApp on +91 7200385635\n";
    echo "You should have received 3 messages from CallMeBot\n\n";

    echo "Note: CallMeBot may have rate limits.\n";
    echo "If you don't receive messages, wait a few minutes and try again.\n";
} elseif ($config['provider'] === 'twilio') {
    echo "📱 Check your WhatsApp on +91 7200385635\n";
    echo "You should have received 3 messages from Twilio\n\n";

    echo "You can also check message logs in Twilio Console:\n";
    echo "https://console.twilio.com/us1/monitor/logs/sms\n";
}

echo "\nNext Steps:\n";
echo "1. ✅ Verify you received the WhatsApp messages\n";
echo "2. ✅ Test actual form submissions on your website\n";
echo "3. ✅ Monitor notifications for real submissions\n\n";

echo "For troubleshooting, see: WHATSAPP-SETUP-GUIDE.md\n";
?>
