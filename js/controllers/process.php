<?php

$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data
$data['success'] = true;
$data['successMessage'] = 'Thanks for reaching out. I will get back to you soon.';
$email_to = "olivier.tr@hotmail.com";
$email_subject = "message submission";
$name = $_POST['name']; // required
$email_from = $_POST['email']; // required
$subject = $_POST['subject']; //required
$message = $_POST['message']; // required
$email_message = "Form details below.nn";
$email_message .= "Name: ".$name."n";
$email_message .= "Email: ".$email_from."n";
$email_message .= "Subject: ".$subject."n";
$email_message .= "Message: ".$message."n";
$headers = 'From: '.$email_from."rn".
'Reply-To: '.$email_from."rn" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

// return all our data to an AJAX call
echo json_encode($data);

?>