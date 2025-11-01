<?php

// $_SERVER = Super Global Variable contains headers, paths and script locations. 
// The entries in this array are created by the web server.
// Shows nearly enerything you need to know about the current page enviroment

// foreach ($_SERVER as $key => $value) {
//     echo "{$key} = {$value}";   // we're interested in php_selg and request method.  php_Self is the location of this page, request method is get (default) or post
// }

if ($_SERVER["REQUEST_METHOD"] == "POST") {  // safer than isset(submit) 
    echo "Hello";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
        <!-- htmlspecialchars is a filter -->
        <!-- now however i name this file, the action will always be this files name -->
        Username: <br>
        <input type="text" name="username" id=""> <br>
        <input type="submit" value="Submit">
    </form>

</body>

</html>