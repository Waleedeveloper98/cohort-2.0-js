let main = document.querySelector("main")

window.addEventListener("DOMContentLoaded", function () {
    let intrvl = setInterval(() => {
        let prev = document.querySelector(".bubble")
        if (prev) prev.remove()

        let bubble = document.createElement("div")
        bubble.classList.add("bubble")
        let x = Math.random() * 90
        let y = Math.random() * 90
        let c1 = Math.floor(Math.random() * 256)
        let c2 = Math.floor(Math.random() * 256)
        let c3 = Math.floor(Math.random() * 256)
        let scale = Math.random() * 2.5 + 0.5
        bubble.style.backgroundColor = `rgb(${c1},${c2},${c3})`
        bubble.style.left = x + "%"
        bubble.style.top = y + "%"
        bubble.style.transform = `translate(-50%, -50%)`;
        bubble.style.setProperty("--scale", scale);

        main.appendChild(bubble)
    }, 3000);
})