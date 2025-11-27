<?php
/**
 * Notification Helper with SMTP Support
 * Handles email and WhatsApp notifications using PHPMailer for reliable email delivery
 */

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/smtp-config.php';
require_once __DIR__ . '/whatsapp-config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/**
 * Send email notification using SMTP
 */
function sendEmailNotificationSMTP($to, $subject, $htmlBody, $replyToEmail = null) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = SMTP_AUTH;
        $mail->Username   = SMTP_USERNAME;
        $mail->Password   = SMTP_PASSWORD;
        $mail->SMTPSecure = SMTP_SECURE;
        $mail->Port       = SMTP_PORT;

        // Set timeout to avoid long waits
        $mail->Timeout = 10;

        // Recipients
        $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
        $mail->addAddress($to);

        if ($replyToEmail) {
            $mail->addReplyTo($replyToEmail);
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = strip_tags($htmlBody);

        // Send email
        $result = $mail->send();

        if ($result) {
            error_log("✅ SMTP Email sent successfully to: " . $to);
            return true;
        } else {
            error_log("❌ Failed to send SMTP email to: " . $to);
            return false;
        }

    } catch (Exception $e) {
        error_log("❌ SMTP Email error: {$mail->ErrorInfo}");
        return false;
    }
}

/**
 * Send WhatsApp notification using configured API provider
 */
function sendWhatsAppNotification($phoneNumber, $message) {
    $config = getWhatsAppConfig();

    // If no provider configured or disabled, just log
    if (!$config['enabled'] || !$config['configured']) {
        error_log("📱 WhatsApp not configured - notification skipped for: " . $phoneNumber);
        return [
            'success' => false,
            'message' => 'WhatsApp API not configured',
            'provider' => $config['provider']
        ];
    }

    // Send based on provider
    switch ($config['provider']) {
        case 'fonnte':
            return sendWhatsAppViaFonnte($phoneNumber, $message, $config);

        case 'callmebot':
            return sendWhatsAppViaCallMeBot($phoneNumber, $message, $config);

        case 'twilio':
            return sendWhatsAppViaTwilio($phoneNumber, $message, $config);

        case 'whatsapp-business':
            return sendWhatsAppViaBusinessAPI($phoneNumber, $message, $config);

        default:
            return [
                'success' => false,
                'message' => 'Unknown WhatsApp provider: ' . $config['provider']
            ];
    }
}

/**
 * Send WhatsApp via Fonnte (Recommended - Indonesian service, good for India)
 */
function sendWhatsAppViaFonnte($phoneNumber, $message, $config) {
    try {
        // Fonnte API endpoint
        $apiUrl = "https://api.fonnte.com/send";

        // Get target number from config
        $target = $config['target'];

        // Prepare data
        $data = [
            'target' => $target,
            'message' => $message,
            'countryCode' => '91'  // India country code
        ];

        // Initialize cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: ' . $config['api_token']
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        // Parse response
        $responseData = json_decode($response, true);

        if ($httpCode === 200 && isset($responseData['status']) && $responseData['status'] === true) {
            error_log("✅ WhatsApp sent successfully via Fonnte to: " . $target);
            return [
                'success' => true,
                'provider' => 'fonnte',
                'target' => $target,
                'message' => 'WhatsApp message sent successfully',
                'response' => $responseData
            ];
        } else {
            $errorMsg = isset($responseData['reason']) ? $responseData['reason'] : $response;
            error_log("❌ WhatsApp failed via Fonnte: HTTP " . $httpCode . " - " . $errorMsg);
            return [
                'success' => false,
                'provider' => 'fonnte',
                'error' => 'HTTP ' . $httpCode . ': ' . $errorMsg
            ];
        }

    } catch (Exception $e) {
        error_log("❌ WhatsApp error (Fonnte): " . $e->getMessage());
        return [
            'success' => false,
            'provider' => 'fonnte',
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Send WhatsApp via CallMeBot (Free, Easy)
 */
function sendWhatsAppViaCallMeBot($phoneNumber, $message, $config) {
    try {
        // CallMeBot API endpoint
        $apiUrl = "https://api.callmebot.com/whatsapp.php";

        // Clean phone number
        $cleanPhone = preg_replace('/[\s\-\+]/', '', $config['phone']);

        // Prepare parameters
        $params = [
            'phone' => $cleanPhone,
            'text' => $message,
            'apikey' => $config['api_key']
        ];

        // Build URL
        $url = $apiUrl . '?' . http_build_query($params);

        // Send request
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        if ($httpCode === 200) {
            error_log("✅ WhatsApp sent successfully via CallMeBot to: " . $cleanPhone);
            return [
                'success' => true,
                'provider' => 'callmebot',
                'phone' => $cleanPhone,
                'message' => 'WhatsApp message sent successfully'
            ];
        } else {
            error_log("❌ WhatsApp failed via CallMeBot: HTTP " . $httpCode . " - " . $response);
            return [
                'success' => false,
                'provider' => 'callmebot',
                'error' => 'HTTP ' . $httpCode . ': ' . $response
            ];
        }

    } catch (Exception $e) {
        error_log("❌ WhatsApp error (CallMeBot): " . $e->getMessage());
        return [
            'success' => false,
            'provider' => 'callmebot',
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Send WhatsApp via Twilio (Professional, Paid)
 */
function sendWhatsAppViaTwilio($phoneNumber, $message, $config) {
    try {
        $accountSid = $config['account_sid'];
        $authToken = $config['auth_token'];
        $from = $config['from'];
        $to = $config['to'];

        $url = "https://api.twilio.com/2010-04-01/Accounts/{$accountSid}/Messages.json";

        $data = [
            'From' => $from,
            'To' => $to,
            'Body' => $message
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_USERPWD, "$accountSid:$authToken");
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode === 201) {
            error_log("✅ WhatsApp sent successfully via Twilio to: " . $to);
            return [
                'success' => true,
                'provider' => 'twilio',
                'message' => 'WhatsApp message sent successfully'
            ];
        } else {
            error_log("❌ WhatsApp failed via Twilio: " . $response);
            return [
                'success' => false,
                'provider' => 'twilio',
                'error' => $response
            ];
        }

    } catch (Exception $e) {
        error_log("❌ WhatsApp error (Twilio): " . $e->getMessage());
        return [
            'success' => false,
            'provider' => 'twilio',
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Send WhatsApp via WhatsApp Business API (Enterprise)
 */
function sendWhatsAppViaBusinessAPI($phoneNumber, $message, $config) {
    try {
        $phoneId = $config['phone_id'];
        $accessToken = $config['access_token'];
        $to = $config['to'];

        $url = "https://graph.facebook.com/v18.0/{$phoneId}/messages";

        $data = json_encode([
            'messaging_product' => 'whatsapp',
            'to' => $to,
            'type' => 'text',
            'text' => [
                'body' => $message
            ]
        ]);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $accessToken
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode === 200) {
            error_log("✅ WhatsApp sent successfully via Business API to: " . $to);
            return [
                'success' => true,
                'provider' => 'whatsapp-business',
                'message' => 'WhatsApp message sent successfully'
            ];
        } else {
            error_log("❌ WhatsApp failed via Business API: " . $response);
            return [
                'success' => false,
                'provider' => 'whatsapp-business',
                'error' => $response
            ];
        }

    } catch (Exception $e) {
        error_log("❌ WhatsApp error (Business API): " . $e->getMessage());
        return [
            'success' => false,
            'provider' => 'whatsapp-business',
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Format contact form data for email
 */
function formatContactEmailBody($data) {
    return "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4F46E5; color: white; padding: 20px; border-radius: 5px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 3px; }
            .label { font-weight: bold; color: #4F46E5; font-size: 14px; }
            .value { color: #666; margin-top: 5px; font-size: 15px; }
            .footer { margin-top: 20px; padding: 15px; text-align: center; color: #999; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='margin: 0;'>🆕 New Contact Form Submission</h2>
                <p style='margin: 5px 0 0 0; font-size: 14px;'>Thalir Manam Website</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>👤 Full Name:</div>
                    <div class='value'>" . htmlspecialchars($data['fullName']) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>📧 Email:</div>
                    <div class='value'><a href='mailto:" . htmlspecialchars($data['email']) . "'>" . htmlspecialchars($data['email']) . "</a></div>
                </div>
                <div class='field'>
                    <div class='label'>📱 Phone Number:</div>
                    <div class='value'><a href='tel:" . htmlspecialchars($data['phoneNumber']) . "'>" . htmlspecialchars($data['phoneNumber']) . "</a></div>
                </div>
                <div class='field'>
                    <div class='label'>📋 Subject:</div>
                    <div class='value'>" . htmlspecialchars($data['subject']) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>💬 Message:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($data['message'])) . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>This is an automated notification from Thalir Manam website contact form.</p>
                <p>Please respond to the customer as soon as possible.</p>
            </div>
        </div>
    </body>
    </html>
    ";
}

/**
 * Format appointment data for email
 */
function formatAppointmentEmailBody($data) {
    return "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #10B981; color: white; padding: 20px; border-radius: 5px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 3px; }
            .label { font-weight: bold; color: #10B981; font-size: 14px; }
            .value { color: #666; margin-top: 5px; font-size: 15px; }
            .highlight { background: #D1FAE5; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #10B981; }
            .footer { margin-top: 20px; padding: 15px; text-align: center; color: #999; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='margin: 0;'>📅 New Appointment Request</h2>
                <p style='margin: 5px 0 0 0; font-size: 14px;'>Thalir Manam Website</p>
            </div>
            <div class='content'>
                <div class='highlight'>
                    <strong>⏰ Preferred Date & Time:</strong><br>
                    📆 " . htmlspecialchars($data['preferredDate']) . "<br>
                    🕐 " . htmlspecialchars($data['preferredTime']) . "
                </div>

                <div class='field'>
                    <div class='label'>👨‍👩‍👧 Parent/Guardian Name:</div>
                    <div class='value'>" . htmlspecialchars($data['parentName']) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>👶 Child's Name:</div>
                    <div class='value'>" . htmlspecialchars($data['childName']) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>🎂 Child's Age:</div>
                    <div class='value'>" . htmlspecialchars($data['childAge']) . " years</div>
                </div>
                <div class='field'>
                    <div class='label'>📧 Email:</div>
                    <div class='value'><a href='mailto:" . htmlspecialchars($data['email']) . "'>" . htmlspecialchars($data['email']) . "</a></div>
                </div>
                <div class='field'>
                    <div class='label'>📱 Phone Number:</div>
                    <div class='value'><a href='tel:" . htmlspecialchars($data['phoneNumber']) . "'>" . htmlspecialchars($data['phoneNumber']) . "</a></div>
                </div>
                <div class='field'>
                    <div class='label'>🏥 Service Type:</div>
                    <div class='value'>" . htmlspecialchars($data['serviceType']) . "</div>
                </div>
                " . (!empty($data['concerns']) ? "
                <div class='field'>
                    <div class='label'>📝 Additional Concerns:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($data['concerns'])) . "</div>
                </div>
                " : "") . "
            </div>
            <div class='footer'>
                <p>This is an automated notification from Thalir Manam website appointment booking system.</p>
                <p><strong>Please contact the customer to confirm the appointment.</strong></p>
            </div>
        </div>
    </body>
    </html>
    ";
}

/**
 * Format contact form data for WhatsApp message
 */
function formatContactWhatsAppMessage($data) {
    $message = "*🆕 NEW CONTACT FORM SUBMISSION*\n";
    $message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
    $message .= "👤 *Name:* " . $data['fullName'] . "\n";
    $message .= "📧 *Email:* " . $data['email'] . "\n";
    $message .= "📱 *Phone:* " . $data['phoneNumber'] . "\n";
    $message .= "📋 *Subject:* " . $data['subject'] . "\n\n";
    $message .= "💬 *Message:*\n" . $data['message'] . "\n\n";
    $message .= "━━━━━━━━━━━━━━━━━━━━\n";
    $message .= "⏰ " . date('d M Y, h:i A') . "\n";
    $message .= "🌐 Thalir Manam Website";

    return $message;
}

/**
 * Format appointment data for WhatsApp message
 */
function formatAppointmentWhatsAppMessage($data) {
    $message = "*📅 NEW APPOINTMENT REQUEST*\n";
    $message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
    $message .= "⏰ *Date & Time:*\n";
    $message .= "📆 " . date('d M Y', strtotime($data['preferredDate'])) . "\n";
    $message .= "🕐 " . $data['preferredTime'] . "\n\n";
    $message .= "👨‍👩‍👧 *Parent:* " . $data['parentName'] . "\n";
    $message .= "👶 *Child:* " . $data['childName'] . " (" . $data['childAge'] . " yrs)\n";
    $message .= "📧 *Email:* " . $data['email'] . "\n";
    $message .= "📱 *Phone:* " . $data['phoneNumber'] . "\n";
    $message .= "🏥 *Service:* " . $data['serviceType'] . "\n";

    if (!empty($data['concerns'])) {
        $message .= "\n📝 *Concerns:*\n" . $data['concerns'] . "\n";
    }

    $message .= "\n━━━━━━━━━━━━━━━━━━━━\n";
    $message .= "⏰ " . date('d M Y, h:i A') . "\n";
    $message .= "🌐 Thalir Manam Website\n\n";
    $message .= "⚠️ *Please contact to confirm appointment*";

    return $message;
}

/**
 * Send notifications for contact form
 */
function sendContactNotifications($data, $adminEmail, $adminWhatsApp) {
    $results = [
        'email' => false,
        'whatsapp' => false
    ];

    // Send email notification using SMTP
    $emailSubject = "New Contact Form: " . $data['subject'];
    $emailBody = formatContactEmailBody($data);
    $results['email'] = sendEmailNotificationSMTP($adminEmail, $emailSubject, $emailBody, $data['email']);

    // Send WhatsApp notification
    $whatsappMessage = formatContactWhatsAppMessage($data);
    $results['whatsapp'] = sendWhatsAppNotification($adminWhatsApp, $whatsappMessage);

    return $results;
}

/**
 * Send notifications for appointment
 */
function sendAppointmentNotifications($data, $adminEmail, $adminWhatsApp) {
    $results = [
        'email' => false,
        'whatsapp' => false
    ];

    // Send email notification using SMTP
    $emailSubject = "New Appointment: " . $data['serviceType'] . " - " . $data['preferredDate'];
    $emailBody = formatAppointmentEmailBody($data);
    $results['email'] = sendEmailNotificationSMTP($adminEmail, $emailSubject, $emailBody, $data['email']);

    // Send WhatsApp notification
    $whatsappMessage = formatAppointmentWhatsAppMessage($data);
    $results['whatsapp'] = sendWhatsAppNotification($adminWhatsApp, $whatsappMessage);

    return $results;
}
?>
