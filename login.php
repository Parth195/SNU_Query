<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];
    if (strpos($email, "@snu.edu.in") !== false) {
        echo "Login successful!";
    } else {
        echo "Invalid email address. Please use an @snu.edu.in email.";
    }
}
?>
