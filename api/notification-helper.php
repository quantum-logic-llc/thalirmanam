<?php
/**
 * Notification Helper
 * Handles email and WhatsApp notifications for form submissions
 */

/**
 * Send email notification
 */
function sendEmailNotification($to, $subject, $htmlBody, $replyToEmail = null) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Thalir Manam <noreply@thalirmanam.in>" . "\r\n";

    if ($replyToEmail) {
        $headers .= "Reply-To: " . $replyToEmail . "\r\n";
    }

    try {
        $result = mail($to, $subject, $htmlBody, $headers);
        if ($result) {
            error_log("Email sent successfully to: " . $to);
            return true;
        } else {
            error_log("Failed to send email to: " . $to);
            return false;
        }
    } catch (Exception $e) {
        error_log("Email error: " . $e->getMessage());
        return false;
    }
}

/**
 * Send WhatsApp notification using WhatsApp API
 * This uses the official WhatsApp Business API URL scheme
 */
function sendWhatsAppNotification($phoneNumber, $message) {
    // Clean phone number (remove spaces, hyphens, etc.)
    $cleanPhone = preg_replace('/[\s\-\+]/', '', $phoneNumber);

    // Ensure phone number has country code (91 for India)
    if (strlen($cleanPhone) == 10) {
        $cleanPhone = '91' . $cleanPhone;
    }

    // URL encode the message
    $encodedMessage = urlencode($message);

    // Create WhatsApp URL
    $whatsappUrl = "https://api.whatsapp.com/send?phone=" . $cleanPhone . "&text=" . $encodedMessage;

    // Log the WhatsApp notification (in production, you would use WhatsApp Business API)
    error_log("WhatsApp notification prepared for: " . $cleanPhone);
    error_log("WhatsApp URL: " . $whatsappUrl);

    // For now, we'll log this. To actually send via WhatsApp Business API,
    // you would need to implement the API integration with your WhatsApp Business account

    return [
        'success' => true,
        'phone' => $cleanPhone,
        'url' => $whatsappUrl,
        'message' => 'WhatsApp notification logged (manual sending required)'
    ];
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

    // Send email notification
    $emailSubject = "New Contact Form: " . $data['subject'];
    $emailBody = formatContactEmailBody($data);
    $results['email'] = sendEmailNotification($adminEmail, $emailSubject, $emailBody, $data['email']);

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

    // Send email notification
    $emailSubject = "New Appointment: " . $data['serviceType'] . " - " . $data['preferredDate'];
    $emailBody = formatAppointmentEmailBody($data);
    $results['email'] = sendEmailNotification($adminEmail, $emailSubject, $emailBody, $data['email']);

    // Send WhatsApp notification
    $whatsappMessage = formatAppointmentWhatsAppMessage($data);
    $results['whatsapp'] = sendWhatsAppNotification($adminWhatsApp, $whatsappMessage);

    return $results;
}
?>
