<?php
    if(isset($_POST['submit'])) {

        $firstName = $_POST['firstName'];
        $surname = $_POST['surname'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "office@eventguide.cc";
        $headers = "From: " . $mailFrom;
        $txt = "Du hast eine Email von " . $firstName . " " . $surname . " bekommen. \n\n" . $message;

        mail($mailTo, $subject, $txt, $headers);

        header("Location: index.php?mailsend");
    }
?>