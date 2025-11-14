let statusText = document.querySelector(".status")
let btn = document.querySelector("button")
let flag = false;

btn.addEventListener("click", function () {
    if (!flag) {
        statusText.textContent = "Friends"
        btn.style.backgroundColor = "grey"
        btn.textContent = "Remove"
        flag = true;
    } else {
        statusText.textContent = "No Friends"
        btn.style.backgroundColor = "blue"
        btn.textContent = "Add Friends"
        flag = false;
    }
})