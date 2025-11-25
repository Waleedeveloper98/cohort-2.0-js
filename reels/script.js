const reels = [
    {
        video: "./videos/reel1.mp4",
        userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        userName: "travel_with_ali",
        isFollowed: false,
        caption: "Waves crash against rocky sea stacks under cloudy sky.",
        likeCount: 1200,
        isLiked: false,
        commentCount: 85,
    },
    {
        video: "./videos/reel2.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        userName: "fitness_maniac",
        isFollowed: true,
        caption: "Morning workout grind never stops!",
        likeCount: 3400,
        isLiked: true,
        commentCount: 210,
    },
    {
        video: "./videos/reel3.mp4",
        userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        userName: "foodielife",
        isFollowed: false,
        caption: "Street food heaven 🍜🔥",
        likeCount: 890,
        isLiked: false,
        commentCount: 47,
    },
    {
        video: "./videos/reel4.mp4",
        userProfile: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
        userName: "codingwithsam",
        isFollowed: true,
        caption: "Building UI components all day 👨‍💻",
        likeCount: 2300,
        isLiked: false,
        commentCount: 102,
    },
    {
        video: "./videos/reel5.mp4",
        userProfile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
        userName: "explore_pakistan",
        isFollowed: false,
        caption: "Northern areas are pure magic! 🏔️",
        likeCount: 5100,
        isLiked: true,
        commentCount: 420,
    },
    {
        video: "./videos/reel6.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        userName: "daily_quotes",
        isFollowed: true,
        caption: "Stay focused. Stay consistent.",
        likeCount: 980,
        isLiked: false,
        commentCount: 61,
    },
    {
        video: "./videos/reel7.mp4",
        userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        userName: "funny_vibes",
        isFollowed: false,
        caption: "POV: Your wifi dies during a game 😂",
        likeCount: 7600,
        isLiked: true,
        commentCount: 510,
    },
    {
        video: "./videos/reel8.mp4",
        userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        userName: "style_by_ayesha",
        isFollowed: true,
        caption: "New outfit for the weekend ✨",
        likeCount: 1400,
        isLiked: true,
        commentCount: 95,
    },
    {
        video: "./videos/reel9.mp4",
        userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        userName: "pets_world",
        isFollowed: false,
        caption: "This dog is the cutest today! 🐶💖",
        likeCount: 6200,
        isLiked: true,
        commentCount: 330,
    },
    {
        video: "./videos/reel10.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        userName: "vlogger_madi",
        isFollowed: false,
        caption: "Day in my life - come along!",
        likeCount: 2100,
        isLiked: false,
        commentCount: 140,
    }
];
let reelsContainer = document.querySelector(".reels")
let clutter = ""
reels.forEach((reel) => {
    let { video, userProfile, userName, isFollowed, caption, likeCount, isLiked, commentCount } = reel
    clutter += `<div class="reel">
                <video muted loop autoplay src="${video}"></video>
                <div class="user-details">
                    <div class="top">
                        <img src="${userProfile}"
                            alt="${userName}">
                        <h2 class="username">${userName}</h2>
                        <button>${isFollowed ? "Unfollow" : "Follow"}</button>
                    </div>
                    <p class="caption">
                        ${caption}
                    </p>
                </div>
                <div class="side-bar">
                    <div class="box">
                        ${isLiked ? `<i id="heart" class="ri-heart-3-fill"></i>`: `<i class="ri-heart-3-line"></i>`}
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