<?php
/**
 * Appointment Booking Handler
 * Processes appointment form submissions and stores them in the database
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

// Include database configuration, model, and notification helper
require_once __DIR__ . '/../db-config.php';
require_once __DIR__ . '/../models/Appointment.php';
require_once __DIR__ . '/../notification-helper-smtp.php';

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

/**
 * Validate date format and ensure it's not in the past
 */
function isValidDate($date) {
    $d = DateTime::createFromFormat('Y-m-d', $date);
    if (!$d || $d->format('Y-m-d') !== $date) {
        return false;
    }
    // Check if date is not in the past
    $today = new DateTime();
    $today->setTime(0, 0, 0);
    return $d >= $today;
}

/**
 * Validate age
 */
function isValidAge($age) {
    return is_numeric($age) && $age >= 0 && $age <= 18;
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
    $parentName = isset($data['parentName']) ? sanitizeInput($data['parentName']) : '';
    $childName = isset($data['childName']) ? sanitizeInput($data['childName']) : '';
    $childAge = isset($data['childAge']) ? sanitizeInput($data['childAge']) : '';
    $email = isset($data['email']) ? sanitizeInput($data['email']) : '';
    $phoneNumber = isset($data['phoneNumber']) ? sanitizeInput($data['phoneNumber']) : '';
    $preferredDate = isset($data['preferredDate']) ? sanitizeInput($data['preferredDate']) : '';
    $preferredTime = isset($data['preferredTime']) ? sanitizeInput($data['preferredTime']) : '';
    $serviceType = isset($data['serviceType']) ? sanitizeInput($data['serviceType']) : '';
    $concerns = isset($data['concerns']) ? sanitizeInput($data['concerns']) : '';

    // Validation
    $errors = [];

    if (empty($parentName) || strlen($parentName) < 2) {
        $errors[] = 'Parent/Guardian name is required and must be at least 2 characters';
    }

    if (empty($childName) || strlen($childName) < 2) {
        $errors[] = "Child's name is required and must be at least 2 characters";
    }

    if (!isset($data['childAge']) || $childAge === '' || !isValidAge($childAge)) {
        $errors[] = "Child's age is required and must be between 0 and 18";
    }

    if (empty($email) || !isValidEmail($email)) {
        $errors[] = 'A valid email address is required';
    }

    if (empty($phoneNumber) || !isValidPhone($phoneNumber)) {
        $errors[] = 'A valid phone number is required';
    }

    if (empty($preferredDate) || !isValidDate($preferredDate)) {
        $errors[] = 'A valid preferred date is required (must be today or in the future)';
    }

    if (empty($preferredTime)) {
        $errors[] = 'Preferred time slot is required';
    }

    if (empty($serviceType)) {
        $errors[] = 'Service/Therapy type is required';
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

    // Create appointment instance
    $appointment = new Appointment($pdo);

    // Set appointment properties
    $appointment->parent_name = $parentName;
    $appointment->child_name = $childName;
    $appointment->child_age = $childAge;
    $appointment->email = $email;
    $appointment->phone_number = $phoneNumber;
    $appointment->preferred_date = $preferredDate;
    $appointment->preferred_time = $preferredTime;
    $appointment->service_type = $serviceType;
    $appointment->concerns = $concerns;

    // Create the appointment
    if ($appointment->create()) {
        // Send email notification to admin
        $appointmentData = [
            'parentName' => $parentName,
            'childName' => $childName,
            'childAge' => $childAge,
            'email' => $email,
            'phoneNumber' => $phoneNumber,
            'preferredDate' => $preferredDate,
            'preferredTime' => $preferredTime,
            'serviceType' => $serviceType,
            'concerns' => $concerns
        ];

        // Admin email and WhatsApp
        $adminEmail = 'Thalirmanam5@gmail.com';
        $adminWhatsApp = '7200385635';

        // Send notifications (email and WhatsApp)
        try {
            $notificationResults = sendAppointmentNotifications($appointmentData, $adminEmail, $adminWhatsApp);
            error_log("Appointment notifications sent - Email: " . ($notificationResults['email'] ? 'SUCCESS' : 'FAILED') . ", WhatsApp: PREPARED");
        } catch (Exception $e) {
            error_log("Failed to send notifications: " . $e->getMessage());
        }

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Your appointment request has been received successfully! We will contact you shortly to confirm your appointment.',
            'appointment_id' => $appointment->id
        ]);
    } else {
        throw new Exception('Failed to save appointment');
    }

} catch (PDOException $e) {
    // Log database errors
    error_log("Database Error in appointments/create.php: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'A database error occurred. Please try again later or contact us directly.'
    ]);

} catch (Exception $e) {
    // Log general errors
    error_log("Error in appointments/create.php: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}

?>
