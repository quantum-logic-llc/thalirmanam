<?php
/**
 * WhatsApp API Configuration
 *
 * This file configures automated WhatsApp messaging
 *
 * SETUP INSTRUCTIONS:
 *
 * Option 1: Fonnte (RECOMMENDED - Best for Indonesia/India)
 * ----------------------------------------------------------
 * 1. Sign up at: https://fonnte.com/
 * 2. Login and create a device
 * 3. Scan QR code with your WhatsApp (+91 7200385635)
 * 4. Copy your API token from dashboard
 * 5. Enter your token below in FONNTE_API_TOKEN
 *
 * Benefits:
 * - Based in Indonesia (good for India too)
 * - Send from YOUR WhatsApp number
 * - Rich media support (images, documents)
 * - Affordable pricing
 * - Reliable delivery
 *
 *
 * Option 2: CallMeBot (FREE, Simple)
 * -----------------------------------
 * 1. Save this number in your phone: +34 644 28 95 07
 * 2. Send this message to that number via WhatsApp: "I allow callmebot to send me messages"
 * 3. Wait for confirmation message with your API key
 * 4. Enter your API key below in WHATSAPP_API_KEY
 *
 * Limitations:
 * - Messages sent from CallMeBot number (not yours)
 * - May have rate limits
 *
 *
 * Option 3: Twilio WhatsApp API (Production - Paid but Professional)
 * -------------------------------------------------------------------
 * 1. Sign up at https://www.twilio.com/
 * 2. Get a WhatsApp-enabled phone number
 * 3. Get your Account SID and Auth Token
 * 4. Set WHATSAPP_PROVIDER = 'twilio'
 * 5. Configure TWILIO_* settings below
 *
 * Benefits:
 * - Professional service with SLA
 * - Branded messages from your number
 * - Rich media support
 * - Better reliability
 *
 *
 * Option 3: WhatsApp Business API (Enterprise)
 * ---------------------------------------------
 * For high-volume professional use
 * Contact: https://business.whatsapp.com/
 */

// WhatsApp Provider Selection
// Options: 'fonnte', 'callmebot', 'twilio', 'whatsapp-business', 'none'
define('WHATSAPP_PROVIDER', 'fonnte');

// Fonnte Configuration (Recommended - Send from YOUR number)
define('FONNTE_API_TOKEN', 'BFnRukY8LGCf5Bek2wyj');  // Your Fonnte API token from https://fonnte.com/
define('FONNTE_TARGET', '917200385635');  // Your WhatsApp number (with country code)

// CallMeBot Configuration (Free, Simple)
define('WHATSAPP_PHONE', '917200385635');  // Your WhatsApp number (with country code, no + or spaces)
define('WHATSAPP_API_KEY', '');  // Your CallMeBot API key (get from setup process above)

// Twilio Configuration (Professional, Paid)
define('TWILIO_ACCOUNT_SID', '');
define('TWILIO_AUTH_TOKEN', '');
define('TWILIO_WHATSAPP_FROM', '');  // Format: whatsapp:+14155238886
define('TWILIO_WHATSAPP_TO', '');    // Format: whatsapp:+917200385635

// WhatsApp Business API Configuration (Enterprise)
define('WHATSAPP_BUSINESS_PHONE_ID', '');
define('WHATSAPP_BUSINESS_ACCESS_TOKEN', '');
define('WHATSAPP_BUSINESS_TO', '917200385635');

/**
 * Get WhatsApp configuration based on provider
 */
function getWhatsAppConfig() {
    $provider = WHATSAPP_PROVIDER;

    $config = [
        'provider' => $provider,
        'enabled' => $provider !== 'none'
    ];

    switch ($provider) {
        case 'fonnte':
            $config['api_token'] = FONNTE_API_TOKEN;
            $config['target'] = FONNTE_TARGET;
            $config['configured'] = !empty(FONNTE_API_TOKEN);
            break;

        case 'callmebot':
            $config['phone'] = WHATSAPP_PHONE;
            $config['api_key'] = WHATSAPP_API_KEY;
            $config['configured'] = !empty(WHATSAPP_API_KEY);
            break;

        case 'twilio':
            $config['account_sid'] = TWILIO_ACCOUNT_SID;
            $config['auth_token'] = TWILIO_AUTH_TOKEN;
            $config['from'] = TWILIO_WHATSAPP_FROM;
            $config['to'] = TWILIO_WHATSAPP_TO;
            $config['configured'] = !empty(TWILIO_ACCOUNT_SID) && !empty(TWILIO_AUTH_TOKEN);
            break;

        case 'whatsapp-business':
            $config['phone_id'] = WHATSAPP_BUSINESS_PHONE_ID;
            $config['access_token'] = WHATSAPP_BUSINESS_ACCESS_TOKEN;
            $config['to'] = WHATSAPP_BUSINESS_TO;
            $config['configured'] = !empty(WHATSAPP_BUSINESS_ACCESS_TOKEN);
            break;

        default:
            $config['configured'] = false;
    }

    return $config;
}
?>
