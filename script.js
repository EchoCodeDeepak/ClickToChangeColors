const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "white") {
            body.style.backgroundColor = "white"
            body.style.color = "black"
        }
        if (e.target.id === "black") {
            body.style.backgroundColor = "black"
            body.style.color = "royalblue"
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = "blue"
            body.style.color = "white"
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = "purple"
            body.style.color = "white"
        }
    });
});