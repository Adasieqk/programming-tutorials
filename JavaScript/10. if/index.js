const submit = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("output");

submit.onclick = function () {

    number = input.value;
    number = Number(number);

    if (number < 0) {
        output.textContent = "Your number is negative";
    }
    else if (number > 0) {
        output.textContent = "Your number is positive";
    }
    else if (number == 0) {
        output.textContent = "Your number is equal to 0";
    }
    else {
        output.textContent = "Error";
    }
}
