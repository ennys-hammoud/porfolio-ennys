<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Configuration de l'email
    $to = "ennys.hammoud@laplateforme.io";
    $emailSubject = "New Contact Form Submission: $subject";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $emailBody = "You have received a new message from your portfolio:\n\n";
    $emailBody .= "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone: $phone\n";
    $emailBody .= "Subject: $subject\n\n";
    $emailBody .= "Message:\n$message\n";

    // Envoi de l'email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        // Redirection après l'envoi réussi
        header("Location: index.php?status=success");
        exit();
    } else {
        // Redirection en cas d'échec
        header("Location: index.php?status=error");
        exit();
    }
}
?>

<?php if (isset($_GET['status'])): ?>
    <?php if ($_GET['status'] == 'success'): ?>
        <p style="color: green;">Your message has been sent successfully!</p>
    <?php elseif ($_GET['status'] == 'error'): ?>
        <p style="color: red;">There was an issue sending your message. Please try again.</p>
    <?php endif; ?>
<?php endif; ?>