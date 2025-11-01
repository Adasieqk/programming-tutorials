<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>
<form action="index.php" method="post">
    <input type="radio" name="credit-card" value="Visa"> <!--  should have same NAME to make only one checked at a time -->
    Visa <br>
    <input type="radio" name="credit-card" value="Mastercard">
    Mastercard <br>
    <input type="radio" name="credit-card" value="American Express">
    American Express <br>

    <input type="submit" name="confirm" value="Confirm">
</form>

</html>

<?php



if (isset($_POST["confirm"])) {

    $credit_card = null;

    if (isset($_POST["credit-card"])) {
        $credit_card = $_POST["credit-card"];
    }

    switch ($credit_card) {
        case "Visa":
            echo "You selected Visa";
            break;
        case "Mastercard":
            echo "You selected Mastercard";
            break;
        case "American Express":
            echo "You selected American Express";
            break;
        default:
            echo "Please make a selection";
    }
}

?>