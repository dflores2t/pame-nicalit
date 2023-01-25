<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require_once './PHPMailer.php';
    require_once './SMTP.php';
    require_once './Exception.php';


    // date_default_timezone_set('Etc/UTC');
    //if(isset($_POST['Submit'])){
    $data = json_decode(file_get_contents("php://input"), true);

    $email = $data['email'];
    $name = $data['name'];
    $msj= $data['message'];
    $pdf = base64_decode($data['pdf'],true);
# Write the PDF contents to a local file
   file_put_contents("../SolicitudPdfs/{$name}.pdf", $pdf);

    $mail = new PHPMailer();

    //Server settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = "pnicalit@gmail.com";
    $mail->Password = "rmthtfgslahriguw";
    $mail->SMTPSecure = "tls";


    //Recipients
    $mail->setFrom("pnicalit2023@gmail.com", "PAME-NICALIT");
    $mail->addAddress("daniel.flores@propositivapr.com");
    $mail->addAddress("daniel.flores@cgten-anden.org.ni");
   //$mail->addCC("roger.gomez@nicalit.org");
   //$mail->addBCC("melina.zamora@nicalit.org'');
   $mail->addBCC("raul.rivas@propositivapr.com"); 
   $mail->addBCC("dflores2t@gmail.com"); 
   $mail->addBCC("rlenrivas@gmail.com");    

    $mail->addCC($email,$name);
    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Solicitud de Credito';
    $mail->Body = "{$msj} {$name}";
    $mail->AltBody = "{$msj} {$name}";
    $mail->addAttachment("../SolicitudPdfs/{$name}.pdf", "{$name}.pdf");

    if($mail->send()){
     echo "El correo se ha enviado correctamente";
    } else {
        echo "El correo no se ha podido enviar, {$mail-> ErrorInfo},{['message']} ";
    }
?>
