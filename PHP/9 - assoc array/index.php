<?php


// assoc array = an array made of key=> value pairs

//countries => capitals
//id=> username
//item => price

// $capitals = array(
//     "USA" => "Washington D.C.",
//     "Japan" => "Tokyo",
//     "South Korea" => "Seoul",
//     "India" => "New Delhi"
// );

// $capitals["USA"] = "Las Vegas";

// $capitals["China"] = "Beijing";

// array_pop($capitals);

// array_shift($capitals);

//array_flip($capitals);

//array_reverse();

// $keys = array_keys($capitals);


// echo $capitals["India"] . "<br>" . "<br>";

// foreach ($capitals as $key => $value) {
//     echo "{$key} = {$value} <br>";
// }


// foreach ($keys as $key) {
//     echo "{$key} <br>";
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
        <label for="">Enter a country</label>
        <input type="text" name="country" id="">
        <input type="submit" value="submit">
    </form>

</body>

</html>

<?php

$capitals = array(
    "USA" => "Washington D.C.",
    "Japan" => "Tokyo",
    "South Korea" => "Seoul",
    "India" => "New Delhi"
);

$capital = $capitals[$_POST["country"]];

echo $capital;

?>