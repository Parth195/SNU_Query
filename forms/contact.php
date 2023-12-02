<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "pp402@snu.edu.in";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        echo "success"; 
    } else {
        echo "error";
    }
}
?>
