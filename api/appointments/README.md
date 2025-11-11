# Appointments API

This directory contains the API endpoints for managing appointment bookings.

## Endpoints

### Create Appointment
**POST** `/api/appointments/create.php`

Creates a new appointment request and stores it in the database.

#### Request Body (JSON)
```json
{
  "parentName": "John Doe",
  "childName": "Jane Doe",
  "childAge": "5",
  "email": "john@example.com",
  "phoneNumber": "+919876543210",
  "preferredDate": "2025-11-15",
  "preferredTime": "10:00 AM - 11:00 AM",
  "serviceType": "Speech Therapy",
  "concerns": "Optional additional concerns"
}
```

#### Response (Success - 201)
```json
{
  "success": true,
  "message": "Your appointment request has been received successfully! We will contact you shortly to confirm your appointment.",
  "appointment_id": 1
}
```

#### Response (Validation Error - 400)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Parent/Guardian name is required and must be at least 2 characters",
    "A valid email address is required"
  ]
}
```

#### Response (Server Error - 500)
```json
{
  "success": false,
  "message": "A database error occurred. Please try again later or contact us directly."
}
```

### List Appointments
**GET** `/api/appointments/list.php`

Retrieves appointments from the database with optional filtering.

#### Query Parameters
- `limit` (optional): Number of records to return (default: 100)
- `offset` (optional): Number of records to skip (default: 0)
- `status` (optional): Filter by status (pending, confirmed, cancelled, completed)
- `date` (optional): Filter by preferred date (YYYY-MM-DD format)
- `email` (optional): Filter by email address

#### Examples
```bash
# Get all appointments
GET /api/appointments/list.php

# Get first 10 appointments
GET /api/appointments/list.php?limit=10

# Get pending appointments
GET /api/appointments/list.php?status=pending

# Get appointments for a specific date
GET /api/appointments/list.php?date=2025-11-15

# Get appointments for a specific email
GET /api/appointments/list.php?email=john@example.com
```

#### Response (Success - 200)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "parent_name": "John Doe",
      "child_name": "Jane Doe",
      "child_age": 5,
      "email": "john@example.com",
      "phone_number": "+919876543210",
      "preferred_date": "2025-11-15",
      "preferred_time": "10:00 AM - 11:00 AM",
      "service_type": "Speech Therapy",
      "concerns": "Optional additional concerns",
      "status": "pending",
      "created_at": "2025-11-11 09:17:14",
      "updated_at": "2025-11-11 09:17:14"
    }
  ],
  "total": 1,
  "limit": 100,
  "offset": 0
}
```

## Field Validation

### Required Fields
- `parentName`: Minimum 2 characters
- `childName`: Minimum 2 characters
- `childAge`: Must be between 0 and 18
- `email`: Must be a valid email format
- `phoneNumber`: Must be a valid 10-digit or 12-digit phone number
- `preferredDate`: Must be today or a future date (YYYY-MM-DD format)
- `preferredTime`: Must be selected from available time slots
- `serviceType`: Must be selected from available service types

### Optional Fields
- `concerns`: Additional notes or concerns about the child

## Service Types
- Speech Therapy
- Occupational Therapy
- Behavioral Therapy
- Autism Spectrum Disorder (ASD)
- ADHD Assessment
- Developmental Assessment
- Learning Disabilities
- School Readiness
- Other

## Time Slots
- 9:00 AM - 10:00 AM
- 10:00 AM - 11:00 AM
- 11:00 AM - 12:00 PM
- 12:00 PM - 1:00 PM
- 2:00 PM - 3:00 PM
- 3:00 PM - 4:00 PM
- 4:00 PM - 5:00 PM
- 5:00 PM - 6:00 PM

## Status Values
- `pending`: Initial status when appointment is created
- `confirmed`: Appointment has been confirmed by staff
- `cancelled`: Appointment was cancelled
- `completed`: Appointment has been completed

## CORS
All endpoints support CORS and can be accessed from any origin.

## Error Handling
All endpoints return appropriate HTTP status codes:
- `200`: Success (GET requests)
- `201`: Created (POST requests)
- `400`: Bad Request (validation errors)
- `405`: Method Not Allowed
- `500`: Internal Server Error

## Testing

### Test Create Endpoint
```bash
curl -X POST http://localhost/api/appointments/create.php \
  -H "Content-Type: application/json" \
  -d '{
    "parentName": "Test Parent",
    "childName": "Test Child",
    "childAge": "5",
    "email": "test@example.com",
    "phoneNumber": "+919876543210",
    "preferredDate": "2025-11-15",
    "preferredTime": "10:00 AM - 11:00 AM",
    "serviceType": "Speech Therapy",
    "concerns": "Test concern"
  }'
```

### Test List Endpoint
```bash
curl -X GET "http://localhost/api/appointments/list.php?limit=5"
```
