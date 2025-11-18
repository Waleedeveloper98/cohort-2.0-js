let btn = document.querySelector("button")
let main = document.querySelector("main")

btn.addEventListener("click", function () {
    let box = document.createElement("div")
    box.classList.add("box")
    let x = Math.random() * 90;
    let y = Math.random() * 90;
    let rotate = Math.floor(Math.random() * 360)
    let scale = Math.floor(Math.random() * (2 - .5 + .5)) + .5
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    box.style.left = x + "%"
    box.style.top = y + "%"
    box.style.rotate = rotate + "deg"
    box.style.scale = scale
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    main.appendChild(box)
})