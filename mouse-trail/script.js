let stage = document.querySelector(".stage");

stage.addEventListener("mousemove", function (dets) {
    let x = dets.clientX
    let y = dets.clientY
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    let particle = document.createElement("div")
    particle.classList.add("particle")
    particle.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    particle.style.left = x + "px"
    particle.style.top = y + "px"
    stage.appendChild(particle)
    particle.addEventListener("animationend", function () {
        particle.remove()
    })
})