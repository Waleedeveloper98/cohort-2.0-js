let elems = document.querySelectorAll(".elem")

elems.forEach(function (elem) {
    console.log(elem.childNodes[3])
    elem.addEventListener("mouseenter", function () {
        elem.style.backgroundColor = "orange"
        elem.childNodes[3].style.opacity = 1
    })
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent"
        elem.childNodes[3].style.opacity = 0
    })
    elem.addEventListener("mousemove", function(e){
        elem.childNodes[3].style.left = e.x + "px"
    })
})









// elems.forEach(function (elem) {
//     let img = elem.querySelector("img")
//     elem.addEventListener("mouseenter", function () {
//         img.style.opacity = 1;
//     })
//     elem.addEventListener("mouseleave", function () {
//         img.style.opacity = 0;
//     })
// })
