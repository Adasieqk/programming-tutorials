const submit = document.getElementById("submit");
const label = document.getElementById("label");

submit.onclick = function () {
    randomNum = Math.floor(Math.random() * 6) + 1;
    label.textContent = randomNum;
}