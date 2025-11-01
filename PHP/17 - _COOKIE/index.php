<?php

// cookie = information about a user stored in a user's web-browser targered advertisements, browsing preferences, and other non-sensitive data


setcookie("fav_food", "pizza", time() + (86400 * 2), "/");  // cookie name, value, exp time, file path
setcookie("fav_drink", "coffee", time() + (86400 * 3), "/");   // to delete cookie set time to -0
setcookie("fav_dessert", "ice cream", time() + (86400 * 4), "/");

// foreach ($_COOKIE as $key => $value) {
//     echo "{$key} = {$value} <br>";
// }

if (isset($_COOKIE["fav_food"])) {
    echo "Buy some {$_COOKIE["fav_food"]}";
} else {
    echo "I dont know your favourite food";
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>