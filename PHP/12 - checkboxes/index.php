<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="index.php" method="post">
        <input type="checkbox" name="foods[]" id="" value="Pizza"> <!-- name="pizza" itd. -->
        Pizza <br>
        <input type="checkbox" name="foods[]" id="" value="Hamburger">
        Hamburger <br>
        <input type="checkbox" name="foods[]" id="" value="Hotdog">
        Hotdog <br>
        <input type="checkbox" name="foods[]" id="" value="Taco">
        Taco <br>

        <input type="submit" value="Submit" name="submit">
    </form>

</body>

</html>

<?php

// if (isset($_POST["submit"])) {


//     if (isset($_POST["pizza"])) {
//         echo "You like pizza <br>";
//     }
//     if (isset($_POST["hamburger"])) {
//         echo "You like Hamburgers <br>";
//     }
//     if (isset($_POST["hotdog"])) {
//         echo "You like Hotdogs <br>";
//     }
//     if (isset($_POST["Taco"])) {
//         echo "You like tacos <br>";
//     }

//     if (empty($_POST["pizza"])) {
//         echo "You dont like pizza <br>";
//     }
//     if (empty($_POST["hamburger"])) {
//         echo "You dont like Hamburgers <br>";
//     }
//     if (empty($_POST["hotdog"])) {
//         echo "You dont like Hotdogs <br>";
//     }
//     if (empty($_POST["Taco"])) {
//         echo "You dont like tacos <br>";
//     }
// }


if (isset($_POST["submit"])) {

    $foods = $_POST["foods"];

    foreach ($foods as $food) {
        echo $food . "<br>";
    }
}



?>