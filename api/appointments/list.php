<?php
/**
 * Appointment List Handler
 * Retrieves appointments from the database
 */

// Enable CORS for Next.js frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Only GET requests are accepted.'
    ]);
    exit();
}

// Include database configuration and model
require_once __DIR__ . '/../db-config.php';
require_once __DIR__ . '/../models/Appointment.php';

try {
    // Get database connection
    $pdo = getDBConnection();

    // Create appointment instance
    $appointment = new Appointment($pdo);

    // Get query parameters
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;
    $offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
    $status = isset($_GET['status']) ? $_GET['status'] : null;
    $date = isset($_GET['date']) ? $_GET['date'] : null;
    $email = isset($_GET['email']) ? $_GET['email'] : null;

    // Fetch appointments based on filters
    if ($date) {
        $appointments = $appointment->getByDate($date);
    } elseif ($email) {
        $appointments = $appointment->getByEmail($email);
    } else {
        $appointments = $appointment->getAll($limit, $offset);
    }

    // Filter by status if provided
    if ($status && !$date && !$email) {
        $appointments = array_filter($appointments, function($apt) use ($status) {
            return $apt['status'] === $status;
        });
    }

    // Get total count
    $totalCount = $appointment->countByStatus($status);

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'data' => array_values($appointments),
        'total' => $totalCount,
        'limit' => $limit,
        'offset' => $offset
    ]);

} catch (PDOException $e) {
    // Log database errors
    error_log("Database Error in appointments/list.php: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'A database error occurred. Please try again later.'
    ]);

} catch (Exception $e) {
    // Log general errors
    error_log("Error in appointments/list.php: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
