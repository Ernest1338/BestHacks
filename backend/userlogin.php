<!-- <?php
$secret = "6LcDNtgoAAAAAP7oCJrRg30sah-aQTLPKKgECIwq";
require_once '/path/to/recaptcha/src/autoload.php';
$recaptcha = new \ReCaptcha\ReCaptcha($secret);

$resp = $recaptcha->setExpectedHostname('recaptcha-demo.appspot.com')
                  ->verify($gRecaptchaResponse, $remoteIp);
if ($resp->isSuccess()) {
    // Verified!
} else {
    $errors = $resp->getErrorCodes();
}

?>
<html>
    <form method="POST">
        <input type="text" name="test">
        <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
    </form>
</html>
<?php

exit(); -->
$email = $_POST['email']
$password = $_POST['password'];
if(!($_SERVER['REQUEST_METHOD'] == "POST")) {
    $_SESSION['error_request'] = true;
    exit();
}
if(!(isset($email) && isset($password))) {
    $_SESSION['error_isset'] = true;
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $_SESSION['error_valid'] = true;
    exit();
}
if(length($email) == 0 || length($password)  == 0) {
    $_SESSION['error_length'] = true;
    exit();
}
