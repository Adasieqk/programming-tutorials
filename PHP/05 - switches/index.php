<?php

$date = date("l");

switch ($date) {
    case "Monday":
        echo "Monday";
        break;
    case "Tuesday":
        echo "Tuesday";
        break;
    case "Wednesday":
        echo "Wednesday";
        break;
    case "Thursday":
        echo "Thursday";
        break;
    case "Saturday":
        echo "Saturday";
        break;
    default:
        echo "{$date} is not valid";
}
