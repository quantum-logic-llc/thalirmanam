<?php
/**
 * Fonnte Debug Test - Detailed error checking (Fixed Version)
 */

// Error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if config file exists before including
 $configFile = __DIR__ . '/whatsapp-config.php';
if (!file_exists($configFile)) {
    echo "ERROR: Configuration file not found at: " . $configFile . "\n";
    exit(1);
}

require_once $configFile;

echo "===========================================\n";
echo "FONNTE DEBUG TEST\n";
echo "===========================================\n\n";

// Get config
try {
    $config = getWhatsAppConfig();
} catch (Exception $e) {
    echo "ERROR: Failed to get configuration: " . $e->getMessage() . "\n";
    exit(1);
}

echo "Configuration:\n";
echo "-------------------------------------------\n";
echo "Provider: " . $config['provider'] . "\n";
echo "API Token: " . (isset($config['api_token']) ? substr($config['api_token'], 0, 10) . '...' : 'NOT SET') . "\n";
echo "Target: " . (isset($config['target']) ? substr($config['target'], 0, 3) . 'XXXXXXX' : 'NOT SET') . "\n";
echo "Configured: " . ($config['configured'] ? 'YES' : 'NO') . "\n\n";

if (!$config['configured']) {
    echo "ERROR: Not configured!\n";
    exit(1);
}

// Validate required fields
if (empty($config['api_token'])) {
    echo "ERROR: API Token is missing!\n";
    exit(1);
}

if (empty($config['target'])) {
    echo "ERROR: Target phone number is missing!\n";
    exit(1);
}

echo "Sending test message...\n";
echo "-------------------------------------------\n";

// Test message
 $message = "TEST: This is a test message from Thalir Manam website. If you receive this, Fonnte is working!";

// Fonnte API endpoint
 $apiUrl = "https://api.fonnte.com/send";

// Prepare data
 $data = [
    'target' => $config['target'],
    'message' => $message,
    'countryCode' => '91'  // This might need to be adjusted based on your target number
];

echo "Request Data:\n";
print_r($data);
echo "\n";

// Initialize cURL
 $ch = curl_init();

// Set cURL options
curl_setopt_array($ch, [
    CURLOPT_URL => $apiUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($data),
    CURLOPT_HTTPHEADER => [
        'Authorization: ' . $config['api_token']
    ],
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSL_VERIFYPEER => true,  // Changed to true for security
    CURLOPT_VERBOSE => true,
    CURLOPT_HEADER => false
]);

// Create temporary file for verbose output
 $verboseLog = fopen('php://temp', 'w+');
curl_setopt($ch, CURLOPT_STDERR, $verboseLog);

echo "Sending request to Fonnte API...\n\n";

 $response = curl_exec($ch);
 $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
 $curlError = curl_error($ch);
 $curlInfo = curl_getinfo($ch);

// Get verbose output
rewind($verboseLog);
 $verboseOutput = stream_get_contents($verboseLog);
fclose($verboseLog);

curl_close($ch);

echo "Response:\n";
echo "-------------------------------------------\n";
echo "HTTP Code: " . $httpCode . "\n";
echo "Response Body:\n" . $response . "\n\n";

if (!empty($curlError)) {
    echo "cURL Error: " . $curlError . "\n\n";
}

// Debug verbose output if needed
if (!empty($verboseOutput)) {
    echo "cURL Verbose Output:\n" . $verboseOutput . "\n\n";
}

// Parse response with error handling
 $responseData = null;
if (!empty($response)) {
    $responseData = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo "JSON Parse Error: " . json_last_error_msg() . "\n";
        echo "Raw Response: " . $response . "\n\n";
    }
}

echo "Parsed Response:\n";
print_r($responseData);
echo "\n";

echo "Analysis:\n";
echo "-------------------------------------------\n";

if ($httpCode === 200) {
    if ($responseData && isset($responseData['status'])) {
        if ($responseData['status'] === true || $responseData['status'] === 'true') {
            echo "✅ SUCCESS! Message sent successfully!\n";
            echo "Check your WhatsApp on the target number\n\n";

            if (isset($responseData['detail'])) {
                echo "Details:\n";
                print_r($responseData['detail']);
                echo "\n";
            }
        } else {
            echo "❌ FAILED! Status is false\n";
            if (isset($responseData['reason'])) {
                echo "Reason: " . $responseData['reason'] . "\n";
            }
            if (isset($responseData['message'])) {
                echo "Message: " . $responseData['message'] . "\n";
            }
        }
    } else {
        echo "⚠️  Response doesn't have 'status' field or couldn't parse JSON\n";
        echo "Full response: " . $response . "\n";
    }
} else {
    echo "❌ HTTP Error: " . $httpCode . "\n";
    echo "Response: " . $response . "\n";
}

echo "\n===========================================\n";
echo "Common Issues:\n";
echo "===========================================\n\n";

echo "1. Device not connected:\n";
echo "   - Go to https://fonnte.com/dashboard\n";
echo "   - Check if your device is connected\n";
echo "   - If not, scan QR code again with WhatsApp\n\n";

echo "2. WhatsApp not linked:\n";
echo "   - Open WhatsApp on your device\n";
echo "   - Go to Settings → Linked Devices\n";
echo "   - Check if 'Fonnte' device is listed\n";
echo "   - If not, link it from Fonnte dashboard\n\n";

echo "3. Invalid API token:\n";
echo "   - Go to https://fonnte.com/dashboard\n";
echo "   - Check your API token\n";
echo "   - Copy it again and update whatsapp-config.php\n\n";

echo "4. Insufficient credits:\n";
echo "   - Go to https://fonnte.com/dashboard\n";
echo "   - Check your balance\n";
echo "   - Top up if needed\n\n";

echo "5. Invalid target number:\n";
echo "   - Ensure the target number is in the correct format\n";
echo "   - Include country code without + or 00 prefix\n\n";

echo "Next Steps:\n";
echo "1. Go to https://fonnte.com/dashboard\n";
echo "2. Check device status (should be 'Connected')\n";
echo "3. Verify you have credits/balance\n";
echo "4. Check message logs for errors\n";
echo "5. If device disconnected, reconnect by scanning QR\n\n";
?>