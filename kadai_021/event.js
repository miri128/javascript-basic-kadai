document.addEventListener("DOMContentLoaded", function () {
    const messageElement = document.getElementById("text");
    const buttonElement = document.getElementById("btn");

    buttonElement.addEventListener("click" , function () {
        setTimeout(function () {
            messageElement.innerText = "ボタンをクリックしました";
        }, 2000);        
    });
});