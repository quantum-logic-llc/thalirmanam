<?php
/**
 * Database Configuration File
 * Configure your database credentials here
 */

// Database configuration constants
define('DB_HOST', 'localhost');     // Database host (usually 'localhost')
define('DB_NAME', 'thalirmanam');   // Your database name
define('DB_USER', 'dev');          // Your database username
define('DB_PASS', 'StrongPassword123');              // Your database password
define('DB_CHARSET', 'utf8mb4');    // Character set

// Error reporting (set to 0 in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create database connection
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch (PDOException $e) {
        // Log error (in production, don't expose database errors to users)
        error_log("Database Connection Error: " . $e->getMessage());
        throw new Exception("Database connection failed. Please try again later.");
    }
}

// Test connection (optional - comment out in production)
// try {
//     $conn = getDBConnection();
//     echo "Database connection successful!";
// } catch (Exception $e) {
//     echo "Error: " . $e->getMessage();
// }
?>
