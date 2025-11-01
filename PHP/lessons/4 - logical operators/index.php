
<?php

// && = both true (AND)
// || = at least one true (OR)
// ! true if false, false if true


$age = 25;
$citizen = true;

if ($age >= 18 && $citizen) {
    echo "You can vote";
} else {
    echo "You cannot vote";
}
