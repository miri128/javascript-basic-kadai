document.addEventListener("DOMContentLoaded", function () {
    const messageElement = document.getElementById("text");
    const buttonElement = document.getElementById("btn");

    buttonElement.addEventListener("click" , function () {
        messageElement.innerText = "ボタンをクリックしました";
    });
});