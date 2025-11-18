const quotes = [
    "Stay hungry, stay foolish.",
    "Dream big. Start small.",
    "Less talk, more action.",
    "Progress, not perfection.",
    "Do it with passion.",
    "Believe you can.",
    "One step at a time.",
    "Consistency beats talent.",
    "Focus on the good.",
    "Make today count."
];
let btn = document.querySelector("button");
let main = document.querySelector("main");


btn.addEventListener("click", function () {
    let h2 = document.createElement("h2")
    let quote = quotes[Math.floor(Math.random() * quotes.length)]
    h2.innerHTML = quote
    let x = Math.random() * 90
    let y = Math.random() * 90
    let rotate = Math.floor(Math.random() * 360)
    let scale = Math.floor(Math.random() * 2) + .4
    h2.style.left = x + "%"
    h2.style.top = y + "%"
    h2.style.rotate = rotate + "deg"
    h2.style.scale = scale
    main.appendChild(h2)
})