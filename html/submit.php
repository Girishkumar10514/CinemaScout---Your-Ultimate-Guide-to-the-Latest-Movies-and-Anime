<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "agkumar10514@gmail.com"; // Change this to your email address
    $subject = "Feedback Form Submission";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $feedback = $_POST["feedback"];

    // Construct the email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Feedback: $feedback\n";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}
?>
