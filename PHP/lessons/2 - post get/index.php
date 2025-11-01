<?php

$num1 = $_POST["num1"];
$num2 = $_POST["num2"];

$sum = $num1 + $num2;

echo $sum . "<br>";
echo "The price is \${$num2}";
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
        <label for="num1"></label> <br>
        <input type="text" name="num1"><br>

        <label for="num2"></label> <br>
        <input type="text" name="num2"><br>

        <input type="submit" value="Log in">
    </form>


</body>

</html>