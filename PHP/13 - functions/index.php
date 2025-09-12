<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>


<?php

//functions    ex. add(), subtract(), ...

// function happy_birthday($name, $age)   // $name only exists in this function
// {
//     echo "Happy Birthday {$name}! <br>";
//     echo "You are {$age} years old <br> <br>";

// }

// happy_birthday("Adam", 35);




function hyp(float $a, float  $b)
{
    $c = sqrt($a ** 2 + $b ** 2);
    return $c;
}

echo hyp(3.5, 4.5);


?>