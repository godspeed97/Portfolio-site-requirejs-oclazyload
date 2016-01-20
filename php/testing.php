<?php

require_once 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->setFrom('olivier@olivier.casa73.com', 'Contact Form');
$mail->addAddress('olivier.tr@hotmail.com', 'Olivier');
$mail->Subject = 'PHPMailer file sender';
$mail->msgHTML("My message body");

if (array_key_exists('userfile', $_FILES)) {
    $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name']));
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        $mail->addAttachment($uploadfile, 'myfile.txt');
    }
}

$mail->send();

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>PHPMailer Upload</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="hidden" name="MAX_FILE_SIZE" value="100000"> Send this file: <input name="userfile" type="file">
        <input type="submit" value="Send File">
    </form>
</body>
</html>