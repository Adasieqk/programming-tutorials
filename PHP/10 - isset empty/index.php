<?php

//isset() = returns TRUE if a var is declared and not null
//empty() = returns TRUE if a var is not declared, false, null, "" (empty string)

// $username = "BroCode";

// if (isset($username)) {
//     echo "Set";
// } else {
//     echo "Not set";
// }

// if (empty($username)) {
//     echo "empty";
// } else {
//     echo "Not empty";
// }


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label for="">Username</label>
        <input type="text" name="username" id="">

        <label for="">Password</label>
        <input type="password" name="password" id="">
        <input type="submit" value="Submit" name="login">
    </form>
</body>

</html>

<?php


foreach ($_POST as $key => $value) {
    echo "{$key} = {$value} <br>";
}


if (isset($_POST["login"])) {

    $username = $_POST["username"];
    $password = $_POST["password"];

    if (empty($username)) {
        echo "username is missing";
    } elseif (empty($password)) {
        echo "Password missing";
    } else {
        echo "hello {$username}";
    }
}



?>