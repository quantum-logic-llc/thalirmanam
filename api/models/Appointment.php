<?php
/**
 * Appointment Model
 * Handles all database operations for appointments
 */

class Appointment {
    private $conn;
    private $table_name = "appointments";

    // Appointment properties
    public $id;
    public $parent_name;
    public $child_name;
    public $child_age;
    public $email;
    public $phone_number;
    public $preferred_date;
    public $preferred_time;
    public $service_type;
    public $concerns;
    public $status;
    public $created_at;
    public $updated_at;

    /**
     * Constructor
     * @param PDO $db Database connection
     */
    public function __construct($db) {
        $this->conn = $db;
    }

    /**
     * Create a new appointment
     * @return bool
     */
    public function create() {
        $query = "INSERT INTO " . $this->table_name . "
                SET parent_name = :parent_name,
                    child_name = :child_name,
                    child_age = :child_age,
                    email = :email,
                    phone_number = :phone_number,
                    preferred_date = :preferred_date,
                    preferred_time = :preferred_time,
                    service_type = :service_type,
                    concerns = :concerns,
                    status = 'pending'";

        try {
            $stmt = $this->conn->prepare($query);

            // Sanitize inputs
            $this->parent_name = htmlspecialchars(strip_tags($this->parent_name));
            $this->child_name = htmlspecialchars(strip_tags($this->child_name));
            $this->child_age = htmlspecialchars(strip_tags($this->child_age));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
            $this->preferred_date = htmlspecialchars(strip_tags($this->preferred_date));
            $this->preferred_time = htmlspecialchars(strip_tags($this->preferred_time));
            $this->service_type = htmlspecialchars(strip_tags($this->service_type));
            $this->concerns = htmlspecialchars(strip_tags($this->concerns));

            // Bind parameters
            $stmt->bindParam(":parent_name", $this->parent_name);
            $stmt->bindParam(":child_name", $this->child_name);
            $stmt->bindParam(":child_age", $this->child_age);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":phone_number", $this->phone_number);
            $stmt->bindParam(":preferred_date", $this->preferred_date);
            $stmt->bindParam(":preferred_time", $this->preferred_time);
            $stmt->bindParam(":service_type", $this->service_type);
            $stmt->bindParam(":concerns", $this->concerns);

            if ($stmt->execute()) {
                $this->id = $this->conn->lastInsertId();
                return true;
            }

            return false;
        } catch(PDOException $e) {
            error_log("Appointment Create Error: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Get all appointments
     * @param int $limit Optional limit
     * @param int $offset Optional offset
     * @return array
     */
    public function getAll($limit = 100, $offset = 0) {
        $query = "SELECT * FROM " . $this->table_name . "
                ORDER BY created_at DESC
                LIMIT :limit OFFSET :offset";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":limit", $limit, PDO::PARAM_INT);
            $stmt->bindParam(":offset", $offset, PDO::PARAM_INT);
            $stmt->execute();

            return $stmt->fetchAll();
        } catch(PDOException $e) {
            error_log("Get All Appointments Error: " . $e->getMessage());
            return [];
        }
    }

    /**
     * Get appointment by ID
     * @param int $id
     * @return array|null
     */
    public function getById($id) {
        $query = "SELECT * FROM " . $this->table_name . "
                WHERE id = :id
                LIMIT 1";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":id", $id, PDO::PARAM_INT);
            $stmt->execute();

            return $stmt->fetch();
        } catch(PDOException $e) {
            error_log("Get Appointment By ID Error: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Update appointment status
     * @param int $id
     * @param string $status
     * @return bool
     */
    public function updateStatus($id, $status) {
        $query = "UPDATE " . $this->table_name . "
                SET status = :status
                WHERE id = :id";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":status", $status);
            $stmt->bindParam(":id", $id, PDO::PARAM_INT);

            return $stmt->execute();
        } catch(PDOException $e) {
            error_log("Update Status Error: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Get appointments by date
     * @param string $date
     * @return array
     */
    public function getByDate($date) {
        $query = "SELECT * FROM " . $this->table_name . "
                WHERE preferred_date = :date
                ORDER BY preferred_time ASC";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":date", $date);
            $stmt->execute();

            return $stmt->fetchAll();
        } catch(PDOException $e) {
            error_log("Get By Date Error: " . $e->getMessage());
            return [];
        }
    }

    /**
     * Get appointments by email
     * @param string $email
     * @return array
     */
    public function getByEmail($email) {
        $query = "SELECT * FROM " . $this->table_name . "
                WHERE email = :email
                ORDER BY created_at DESC";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":email", $email);
            $stmt->execute();

            return $stmt->fetchAll();
        } catch(PDOException $e) {
            error_log("Get By Email Error: " . $e->getMessage());
            return [];
        }
    }

    /**
     * Delete appointment
     * @param int $id
     * @return bool
     */
    public function delete($id) {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":id", $id, PDO::PARAM_INT);

            return $stmt->execute();
        } catch(PDOException $e) {
            error_log("Delete Appointment Error: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Get appointment count by status
     * @param string $status
     * @return int
     */
    public function countByStatus($status = null) {
        if ($status) {
            $query = "SELECT COUNT(*) as total FROM " . $this->table_name . " WHERE status = :status";
        } else {
            $query = "SELECT COUNT(*) as total FROM " . $this->table_name;
        }

        try {
            $stmt = $this->conn->prepare($query);
            if ($status) {
                $stmt->bindParam(":status", $status);
            }
            $stmt->execute();

            $row = $stmt->fetch();
            return (int)$row['total'];
        } catch(PDOException $e) {
            error_log("Count By Status Error: " . $e->getMessage());
            return 0;
        }
    }
}
?>
