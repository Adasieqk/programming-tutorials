<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <input type="submit" name="stop" value="stop">
    </form>
</body>

</html>


<?php

//while loop = do some code infinetly while some condition remains true

// $i = 0;

// while ($i <= 10) {
//     $i++;
//     echo "{$i} <br>";
// }


$seconds = 0;
$running = true;

while ($running == true) {

    if (isset($_POST["stop"])) {
        $running = false;
    } else {
        //wait 1 second
        $seconds++;
        echo "{$seconds}";
    }
}

?>