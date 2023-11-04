<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    // Check if the email address ends with "@snu.edu.in"
    if (strpos($email, "@snu.edu.in") !== false) {
        // Valid email address, you can implement your login logic here
        // For now, we'll just display a success message
        echo "Login successful!";
    } else {
        echo "Invalid email address. Please use an @snu.edu.in email.";
    }
}
?>
