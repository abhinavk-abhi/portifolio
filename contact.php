<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $recipient_email = "abhinavkottyadi234@gmail.com"; // Replace with the email you want to send to

    $headers = "From: " . $email;
    $headers .= "\r\nContent-Type: text/html; charset=UTF-8\r\n";

    $body = "Name: " . $name . "\r\n";
    $body .= "Email: " . $email . "\r\n";
    $body .= "Subject: " . $subject . "\r\n";
    $body .= "Message: " . $message;

    if (mail($recipient_email, $subject, $body, $headers)) {
        echo "Your message has been sent. Thank you!";
    } else {
        echo "Error sending email.";
    }
}
?>