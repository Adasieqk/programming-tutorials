<?php

//string funtions

$username = "Bro The Code";
$phone = "123-456-7890";

// $username = strtolower($username);

// $username = strtoupper($username);

// $username = trim($username);   // removes white spaces before or/and after string 

// $username = str_pad($username, 20, "0");

// $phone = str_replace("-", "", $phone);

// $username = strrev($username);

// $username = str_shuffle($username);

// $equals = strcmp($username, "Bro Code");     //compares 2 strings:   0 - same strings, -1 different, the second arg has less letters, 1 - different, second arg has more letters

// $count = strlen($username);

// $index = strpos($username, " ");

// $firstname = substr($username, 0, 3);

// $fullname = explode(" ", $username);
// foreach ($fullname as $name) {
//     echo $name . "<br>";
// }


$user = array("Bro", "The", "Code");
$user = implode("-", $user);

echo $user;
