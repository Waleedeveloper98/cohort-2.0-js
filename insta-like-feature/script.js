let likeBtn = document.querySelector(".like")
let popup = document.querySelector(".popup")
let flag = false;

likeBtn.addEventListener("click", function () {
    if (!flag) {
        popup.style.scale = 5
        popup.style.opacity = .8
        likeBtn.classList.remove("ri-heart-line")
        likeBtn.classList.add("ri-heart-fill")
        likeBtn.style.color = "red"
        setTimeout(function () {
            popup.style.scale = 1;
            popup.style.opacity = 0
        }, 2000)
        flag = true
    } else {
        popup.style.display = "none"
        likeBtn.classList.remove("ri-heart-fill")
        likeBtn.classList.add("ri-heart-line")
        likeBtn.style.color = "black"
        flag = false
    }
})