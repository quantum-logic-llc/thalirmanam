<?php
/**
 * Contact Form Handler
 * Processes contact form submissions and stores them in the database
 */

// Enable CORS for Next.js frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Only POST requests are accepted.'
    ]);
    exit();
}

// Include database configuration and notification helper
require_once 'db-config.php';
require_once __DIR__ . '/notification-helper-smtp.php';

/**
 * Sanitize input data
 */
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Validate email format
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Validate phone number (Indian format)
 */
function isValidPhone($phone) {
    // Remove spaces, hyphens, and plus signs for validation
    $cleanPhone = preg_replace('/[\s\-\+]/', '', $phone);
    // Check if it's a valid 10-digit number or 12-digit with country code
    return preg_match('/^(\d{10}|\d{12})$/', $cleanPhone);
}

try {
    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Check if JSON is valid
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data received');
    }

    // Extract and sanitize form data
    $fullName = isset($data['fullName']) ? sanitizeInput($data['fullName']) : '';
    $email = isset($data['email']) ? sanitizeInput($data['email']) : '';
    $phoneNumber = isset($data['phoneNumber']) ? sanitizeInput($data['phoneNumber']) : '';
    $subject = isset($data['subject']) ? sanitizeInput($data['subject']) : '';
    $message = isset($data['message']) ? sanitizeInput($data['message']) : '';

    // Validation
    $errors = [];

    if (empty($fullName) || strlen($fullName) < 2) {
        $errors[] = 'Full name is required and must be at least 2 characters';
    }

    if (empty($email) || !isValidEmail($email)) {
        $errors[] = 'A valid email address is required';
    }

    if (empty($phoneNumber) || !isValidPhone($phoneNumber)) {
        $errors[] = 'A valid phone number is required';
    }

    if (empty($subject) || strlen($subject) < 3) {
        $errors[] = 'Subject is required and must be at least 3 characters';
    }

    if (empty($message) || strlen($message) < 10) {
        $errors[] = 'Message is required and must be at least 10 characters';
    }

    // If there are validation errors, return them
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $errors
        ]);
        exit();
    }

    // Get database connection
    $pdo = getDBConnection();

    // Prepare SQL statement to prevent SQL injection
    $sql = "INSERT INTO contact_submissions (full_name, email, phone_number, subject, message, submitted_at, ip_address, user_agent)
            VALUES (:full_name, :email, :phone_number, :subject, :message, NOW(), :ip_address, :user_agent)";

    $stmt = $pdo->prepare($sql);

    // Get client IP address
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    // Get user agent
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';

    // Bind parameters
    $stmt->bindParam(':full_name', $fullName);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone_number', $phoneNumber);
    $stmt->bindParam(':subject', $subject);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':ip_address', $ipAddress);
    $stmt->bindParam(':user_agent', $userAgent);

    // Execute the statement
    if ($stmt->execute()) {
        $submissionId = $pdo->lastInsertId();

        // Send email notification to admin
        $contactData = [
            'fullName' => $fullName,
            'email' => $email,
            'phoneNumber' => $phoneNumber,
            'subject' => $subject,
            'message' => $message
        ];

        // Admin email and WhatsApp
        $adminEmail = 'Thalirmanam5@gmail.com';
        $adminWhatsApp = '7200385635';

        // Send notifications (email and WhatsApp)
        try {
            $notificationResults = sendContactNotifications($contactData, $adminEmail, $adminWhatsApp);
            error_log("Contact form notifications sent - Email: " . ($notificationResults['email'] ? 'SUCCESS' : 'FAILED') . ", WhatsApp: PREPARED");
        } catch (Exception $e) {
            error_log("Failed to send notifications: " . $e->getMessage());
        }

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Your message has been received successfully! We will get back to you within 24 hours.',
            'submission_id' => $submissionId
        ]);
    } else {
        throw new Exception('Failed to save contact form submission');
    }

} catch (PDOException $e) {
    // Log database errors
    error_log("Database Error in contact-handler.php: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'A database error occurred. Please try again later or contact us directly.'
    ]);

} catch (Exception $e) {
    // Log general errors
    error_log("Error in contact-handler.php: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}

?>
