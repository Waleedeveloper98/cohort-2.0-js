let generateButton = document.querySelector("#generate-btn");
let hexCodeDisplay = document.querySelector("#hex-code");
let colorBox = document.querySelector("#color-box");

let hexCharacters = "0123456789ABCDEF";

generateButton.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexColor += hexCharacters[randomIndex];
    }

    hexCodeDisplay.innerHTML = hexColor;
    colorBox.style.backgroundColor = hexColor;
});
