# Contact Form PHP Backend

This directory contains the PHP backend for handling contact form submissions from the Thalir Manam website.

## 📁 Files Overview

- **`contact-handler.php`** - Main PHP script that processes form submissions
- **`db-config.php`** - Database connection configuration
- **`create-database.sql`** - SQL script to create the database and tables
- **`README.md`** - This documentation file

## 🚀 Installation Steps

### Step 1: Database Setup

1. Open **phpMyAdmin** or your MySQL client
2. Import the `create-database.sql` file:
   - In phpMyAdmin: Click "Import" → Choose file → Select `create-database.sql` → Click "Go"
   - OR execute it manually in MySQL console:
     ```bash
     mysql -u root -p < create-database.sql
     ```

This will create:
- Database: `thalirmanam`
- Table: `contact_submissions` (stores all form submissions)
- Table: `admin_users` (optional, for admin panel)

### Step 2: Configure Database Connection

1. Open `db-config.php`
2. Update the database credentials:

```php
define('DB_HOST', 'localhost');     // Your database host
define('DB_NAME', 'thalirmanam');   // Your database name
define('DB_USER', 'root');          // Your database username
define('DB_PASS', '');              // Your database password
```

**Important:** For production, also update these lines in `db-config.php`:
```php
error_reporting(0);          // Disable error display
ini_set('display_errors', 0); // Hide errors from users
```

### Step 3: Configure CORS (if needed)

If your Next.js development server runs on a different port (e.g., localhost:3000), you may need to update the CORS settings in `contact-handler.php`:

```php
// Current setting (allows all origins - DEVELOPMENT ONLY)
header('Access-Control-Allow-Origin: *');

// For production, specify your domain:
header('Access-Control-Allow-Origin: https://thalirmanam.in');
```

### Step 4: Verify PHP Script Location

Ensure the PHP files are accessible via your web server:

- **Development:** `http://localhost/thalirmanam/api/contact-handler.php`
- **Production:** `https://thalirmanam.in/api/contact-handler.php`

Update the fetch URL in `contactSectionNew.jsx` if needed:
```javascript
const response = await fetch('/api/contact-handler.php', {
    // ... rest of the code
});
```

## 🧪 Testing the Setup

### Test Database Connection

Uncomment the test code at the bottom of `db-config.php`:

```php
try {
    $conn = getDBConnection();
    echo "Database connection successful!";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
```

Then visit: `http://localhost/thalirmanam/api/db-config.php`

You should see: "Database connection successful!"

**Remember to comment it back after testing!**

### Test Form Submission

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact Us page: `http://localhost:3000/contact-us/`

3. Fill out and submit the form

4. Check the `contact_submissions` table in phpMyAdmin to verify the data was saved

## 📊 Database Schema

### contact_submissions Table

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Auto-increment primary key |
| full_name | VARCHAR(255) | Contact's full name |
| email | VARCHAR(255) | Contact's email address |
| phone_number | VARCHAR(20) | Contact's phone number |
| subject | VARCHAR(500) | Message subject |
| message | TEXT | Full message content |
| submitted_at | DATETIME | When the form was submitted |
| ip_address | VARCHAR(45) | Submitter's IP address |
| user_agent | TEXT | Browser/device information |
| status | ENUM | Submission status: 'new', 'read', 'replied', 'archived' |
| admin_notes | TEXT | Internal notes (for admin use) |
| created_at | TIMESTAMP | Record creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## 🔒 Security Features

The PHP backend includes several security measures:

1. **SQL Injection Protection** - Uses PDO prepared statements
2. **XSS Prevention** - All inputs are sanitized with `htmlspecialchars()`
3. **Input Validation** - Validates email format, phone numbers, and required fields
4. **CSRF Protection** - Only accepts POST requests
5. **Error Logging** - Errors are logged, not displayed to users
6. **IP Tracking** - Records IP address for spam prevention

## 📧 Email Notifications (Optional)

To receive email notifications when forms are submitted, uncomment the email function in `contact-handler.php`:

```php
// Find this line around line 118
sendAdminNotification($fullName, $email, $phoneNumber, $subject, $message);
```

Make sure your server's PHP mail function is configured correctly.

## 🛠️ Troubleshooting

### Issue: "Database connection failed"
- Check database credentials in `db-config.php`
- Verify MySQL service is running
- Ensure the database exists

### Issue: "CORS Error"
- Update CORS headers in `contact-handler.php`
- Check that the PHP file is accessible from your frontend

### Issue: "500 Internal Server Error"
- Check PHP error logs
- Enable error display temporarily in `db-config.php`
- Verify PHP version (requires PHP 7.0+)

### Issue: Form submits but data not saved
- Check database table exists
- Verify table columns match the PHP script
- Check PHP error logs for SQL errors

## 📝 Viewing Submissions

### Using phpMyAdmin

1. Open phpMyAdmin
2. Select `thalirmanam` database
3. Click on `contact_submissions` table
4. View all submissions sorted by most recent

### Using SQL Query

```sql
SELECT
    id,
    full_name,
    email,
    phone_number,
    subject,
    submitted_at,
    status
FROM contact_submissions
ORDER BY submitted_at DESC
LIMIT 50;
```

### Using the View

A helpful view is already created:

```sql
SELECT * FROM recent_contact_submissions;
```

## 🔐 Admin Panel (Future Enhancement)

The database includes an `admin_users` table for a future admin panel to:
- View all submissions
- Mark submissions as read/replied/archived
- Add internal notes
- Search and filter submissions
- Export data to CSV/Excel

Default admin credentials (CHANGE IMMEDIATELY!):
- Username: `admin`
- Password: `admin123`

## 🌐 Production Deployment

Before deploying to production:

1. ✅ Update database credentials in `db-config.php`
2. ✅ Disable error display in `db-config.php`
3. ✅ Update CORS to your specific domain
4. ✅ Change default admin password
5. ✅ Test form submission thoroughly
6. ✅ Set up email notifications
7. ✅ Configure SSL/HTTPS
8. ✅ Set up regular database backups

## 📞 Support

For issues or questions:
- Email: thalirmanam5@gmail.com
- Phone: +91 89253 36967

---

**Last Updated:** 2025-01-04
