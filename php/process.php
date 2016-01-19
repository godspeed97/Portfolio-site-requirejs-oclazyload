<?php
require_once 'PHPMailer-master/PHPMailerAutoload.php';

$data = array();
$data['successMessage'] = 'Thanks for reaching out. I will get back to you soon.';

$mail = new PHPMailer;

$mail->setFrom('olivier@olivier.casa73.com', 'Contact Form');
$mail->addAddress('olivier.tr@hotmail.com', 'Olivier');
$mail->Subject = $_POST['subject'];
$mail->Body = "Email: " . $_POST['email'] . "\r\n\r\nName: " . $_POST['name'] . "\r\n\r\nSubject: " . $_POST['subject'] . "\r\n\r\nMessage: " . stripslashes($_POST['message']);
//$mail->addAttachment( $_POST[''] , 'NameOfFile.pdf' );
$mail->send();
echo json_encode($data);
?>