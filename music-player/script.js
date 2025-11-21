let songs = [
    {
        songName: "Energy Beat",
        url: "./music/1.mp3",
        image: "./images/1.jpg"
    },
    {
        songName: "Feel The Energy",
        url: "./music/2.mp3",
        image: "./images/2.jpg"
    },
    {
        songName: "Lofi Background",
        url: "./music/3.mp3",
        image: "./images/3.jpg"
    },
    {
        songName: "Calm Music",
        url: "./music/4.mp3",
        image: "./images/4.jpg"
    },
]

let audio = new Audio()
let bigSongImage = document.querySelector("#left")
let allSongsContainer = document.querySelector("#all-songs")
let play = document.querySelector("#play")
let backward = document.querySelector("#back")
let forward = document.querySelector("#forward")

let selectedSong = 0;

function mainFunction() {
    let clutter = ""
    songs.forEach(function (song, index) {
        clutter += `<div id=${index} class="song-card">
                    <div class="part1">
                        <img src=${song.image} alt=${song.songName}>
                        <h2>${song.songName}</h2>
                    </div>
                    <h6>3.56</h6>
                </div>`
    })
    allSongsContainer.innerHTML = clutter
    audio.src = songs[selectedSong].url
    bigSongImage.style.backgroundImage = `url(${songs[selectedSong].image})`
}
mainFunction()

allSongsContainer.addEventListener("click", function (e) {
    mainFunction()
    play.innerHTML = `<i class="ri-pause-large-line"></i>`
    selectedSong = e.target.id
    flag = 1
    audio.play()
})
let flag = 0;
play.addEventListener("click", function () {
    if (flag === 0) {
        play.innerHTML = `<i class="ri-pause-large-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-large-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function (e) {
    if (selectedSong < songs.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
        play.innerHTML = `<i class="ri-pause-large-line"></i>`;
        backward.style.opacity = 1
    } else {
        forward.style.opacity = .3
    }
})
backward.addEventListener("click", function (e) {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
        play.innerHTML = `<i class="ri-pause-large-line"></i>`;
        backward.style.opacity = 1
    } else {
        backward.style.opacity = .3
    }
})