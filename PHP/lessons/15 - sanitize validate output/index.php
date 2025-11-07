<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="index.php" method="post">
        Username: <br>
        <input type="text" name="username"><br>
        Age: <br>
        <input type="text" name="age"> <br>
        Email: <br>
        <input type="text" name="email"><br>
        <input type="submit" value="login" name="login">
    </form>

</body>

</html>

<?php

if (isset($_POST["login"])) {

    // SANITIZE

    //     $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);  //makes special characters -> letters

    //     $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);   // leaves only numbers

    //     $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);  // leaves email, deletes unallowed characters () <> etc.

    //     echo "Hello {$username} <br>";
    //     echo "You are {$age} years old <br>";
    //     echo "Your email is {$email}";


    //VALIDATE

    $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);   // checks if valid number, if not then empty string

    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

    if (empty($email)) {
        echo "Email not valid";
    } else {
        echo "Email: {$email}";
    }
}

?>