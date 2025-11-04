-- Database Creation Script for Thalir Manam Contact Form
-- Execute this SQL script in your MySQL/phpMyAdmin to create the database and table

-- Create database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS thalirmanam
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE thalirmanam;

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    submitted_at DATETIME NOT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    admin_notes TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_submitted_at (submitted_at),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: Create admin users table for managing submissions
CREATE TABLE IF NOT EXISTS admin_users (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role ENUM('admin', 'moderator') DEFAULT 'moderator',
    is_active TINYINT(1) DEFAULT 1,
    last_login DATETIME DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert a default admin user (password: admin123 - CHANGE THIS IMMEDIATELY!)
-- Password hash for 'admin123' using PHP password_hash()
INSERT INTO admin_users (username, email, password_hash, full_name, role)
VALUES ('admin', 'admin@thalirmanam.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrator', 'admin')
ON DUPLICATE KEY UPDATE username=username;

-- Create a view for easy querying of recent submissions
CREATE OR REPLACE VIEW recent_contact_submissions AS
SELECT
    id,
    full_name,
    email,
    phone_number,
    subject,
    LEFT(message, 100) AS message_preview,
    submitted_at,
    status
FROM contact_submissions
ORDER BY submitted_at DESC
LIMIT 100;

-- Add some helpful comments
ALTER TABLE contact_submissions
    COMMENT = 'Stores all contact form submissions from the website';

ALTER TABLE admin_users
    COMMENT = 'Admin users who can manage contact submissions';

-- Show success message
SELECT 'Database and tables created successfully!' AS Status;

-- Display table structure
DESCRIBE contact_submissions;
