submit = document.getElementById("submit");
checked = document.getElementById("checked");
output = document.getElementById("output");

submit.onclick = function () {
    if (checked.checked) {
        output.textContent = "You have selected the option";
    }
    else {
        output.textContent = "You have not selected the option";
    }
}



