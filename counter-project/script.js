let h1 = document.querySelector("h1");
let increment = document.querySelector("#increment")
let decrement = document.querySelector("#decrement")

let count = 0;

function updateCount() {
    h1.innerHTML = count;
    if (count > 0) {
        h1.style.color = "green"
    } else if (count < 0) {
        h1.style.color = "red"
    } else {
        h1.style.color = "black"
    }
}

increment.addEventListener("click", function () {
    count++
    updateCount()
})
decrement.addEventListener("click", function () {
    count--
    updateCount()
})