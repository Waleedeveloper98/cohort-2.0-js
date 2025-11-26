const reels = [
    {
        isMuted: true,
        video: "./videos/reel1.mp4",
        userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        userName: "@starzapasmr",
        isFollowed: false,
        caption: "Cutting Glass Avocado ASMR 🥑",
        likeCount: 1200,
        isLiked: false,
        commentCount: 85,
    },
    {
        isMuted: true,
        video: "./videos/reel2.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        userName: "@MarblesSatisfying",
        isFollowed: true,
        caption: "Satisfying Reverse Beads ASMR 🦋🧡🦋",
        likeCount: 3400,
        isLiked: true,
        commentCount: 210,
    },
    {
        isMuted: true,
        video: "./videos/reel3.mp4",
        userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        userName: "@fredspaintingservices",
        isFollowed: false,
        caption: "ASMR cleaning this paintbrush is so satisfying",
        likeCount: 890,
        isLiked: false,
        commentCount: 47,
    },
    {
        isMuted: true,
        video: "./videos/reel4.mp4",
        userProfile: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
        userName: "@kochiasmr",
        isFollowed: true,
        caption: "Regal dry fruit milkshake",
        likeCount: 2300,
        isLiked: false,
        commentCount: 102,
    },
    {
        isMuted: true,
        video: "./videos/reel5.mp4",
        userProfile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
        userName: "@ZenNapStudio",
        isFollowed: false,
        caption: "Chocolate 🍫 cutting 😍",
        likeCount: 5100,
        isLiked: true,
        commentCount: 420,
    },
    {
        isMuted: true,
        video: "./videos/reel6.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        userName: "@OddlySatisfying",
        isFollowed: true,
        caption: "The tiny magnetic balls perfectly attach to each other.",
        likeCount: 980,
        isLiked: false,
        commentCount: 61,
    },
    {
        isMuted: true,
        video: "./videos/reel7.mp4",
        userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        userName: "@ASMRSmash",
        isFollowed: false,
        caption: "Satisfying CHALK Crush! | Mortar and Pestle ASMR ",
        likeCount: 7600,
        isLiked: true,
        commentCount: 510,
    },
    {
        isMuted: true,
        video: "./videos/reel8.mp4",
        userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        userName: "@satisfyingshorts",
        isFollowed: true,
        caption: "Colorful lipstick makeup 💖",
        likeCount: 1400,
        isLiked: true,
        commentCount: 95,
    },
    {
        isMuted: true,
        video: "./videos/reel9.mp4",
        userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        userName: "@AngelaCutASMR",
        isFollowed: false,
        caption: "Cutting Glass Fruit Mirror Strawberry ",
        likeCount: 6200,
        isLiked: true,
        commentCount: 330,
    },
    {
        isMuted: true,
        video: "./videos/reel10.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        userName: "@SlimeSquishing",
        isFollowed: false,
        caption: "🌈 ASMR Slime Squishing 🤩",
        likeCount: 2100,
        isLiked: false,
        commentCount: 140,
    }
];
let reelsContainer = document.querySelector(".reels")
function reelsData() {
    let clutter = ""
    reels.forEach((reel, index) => {
        let { video, userProfile, userName, isFollowed, caption, likeCount, isLiked, commentCount, isMuted } = reel
        clutter += `<div class="reel">
                    <div id=${index} class="mute">
                    ${isMuted ? `<i class="ri-volume-mute-line"></i>` : `<i class="ri-volume-up-line"></i>`}
                    </div>
                <video ${isMuted ? 'muted' : ""} loop autoplay src="${video}"></video>
                <div class="user-details">
                    <div class="top">
                        <img src="${userProfile}"
                            alt="${userName}">
                        <h2 class="username">${userName}</h2>
                        <button id=${index} class="followBtn">${isFollowed ? "Unfollow" : "Follow"}</button>
                    </div>
                    <p class="caption">
                        ${caption}
                    </p>
                </div>
                <div class="side-bar">
                    <div id=${index} class="box liked">
                       ${isLiked
                ? `<i class="ri-heart-3-fill heart"></i>`
                : `<i class="ri-heart-3-line like"></i>`
            }
                        <h6>${likeCount}</h6>
                    </div>
                    <div class="box">
                        <i class="ri-chat-3-line"></i>
                        <h6>${commentCount}</h6>
                    </div>
                    <div class="box">
                        <i class="ri-send-plane-line"></i>
                    </div>
                    <div class="box">
                        <i class="ri-bookmark-line"></i>
                    </div>
                    <div class="box">
                        <i id="more-icon" class="ri-more-2-line"></i>
                    </div>
                </div>
            </div>`
    })
    reelsContainer.innerHTML = clutter
}
reelsData()
reelsContainer.addEventListener("click", function (e) {
    if (e.target.className === "box liked") {
        if (!reels[e.target.id].isLiked) {
            reels[e.target.id].isLiked = true;
            reels[e.target.id].likeCount++
        } else {
            reels[e.target.id].isLiked = false;
            reels[e.target.id].likeCount--
        }
        reelsData()
    }

    if (e.target.className === "followBtn") {
        if (!reels[e.target.id].isFollowed) {
            reels[e.target.id].isFollowed = true;
        } else {
            reels[e.target.id].isFollowed = false;
        }
        reelsData()
    }
    if (e.target.className === "mute") {
        if (!reels[e.target.id].isMuted) {
            reels[e.target.id].isMuted = true
        } else {
            reels[e.target.id].isMuted = false
        }
        reelsData()
    }


})