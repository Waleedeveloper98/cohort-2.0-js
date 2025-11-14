let crsr = document.querySelector("#cursor")
let main = document.querySelector("main")

main.addEventListener("mousemove", function(e){
    crsr.style.left = e.clientX + "px";
    crsr.style.top = e.clientY + "px"
})
