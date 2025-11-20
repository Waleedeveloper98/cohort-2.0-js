let downloadBtn = document.querySelector("button")
let percentage = document.querySelector(".percent")
let progressBar = document.querySelector(".download-box .inner");
let prog = 0;
downloadBtn.addEventListener("click", function () {
    percentage.style.opacity = 1;
    downloadBtn.innerHTML = "Downloading"
    downloadBtn.disabled = true
    let intrvl = setInterval(() => {
        prog++
        progressBar.style.width = prog + "%"
        percentage.innerHTML = prog + "%"
        if (prog === 100) {
            downloadBtn.innerHTML = "Downloaded"
            clearInterval(intrvl)
        }
    }, 50)

})