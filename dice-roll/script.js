let btn = document.querySelector("button")
let dice = document.querySelector(".dice")

btn.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    dice.classList.remove('shake')
    void dice.offsetWidth

    dice.classList.add("shake")
    let int = setInterval(() => {
        randomNumber = Math.floor(Math.random() * 6) + 1
        dice.innerHTML = randomNumber;
    }, 50);
    setTimeout(() => {
        clearInterval(int)
        dice.innerHTML = randomNumber;
    }, 1000);
})