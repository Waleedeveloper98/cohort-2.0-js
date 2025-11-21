const people = [
    {
        image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*5es856*_ga*NTEwNjExNDEzLjE3NjM3MDc4Nzg.*_ga_8JE65Q40S6*czE3NjM3MDc4NzckbzEkZzEkdDE3NjM3MDc4ODkkajQ4JGwwJGgw",
        name: "Ayesha Khan",
        description: "Frontend developer with a passion for clean UI and smooth animations.",
        tags: ["JavaScript", "React", "UI/UX"]
    },
    {
        image: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?_gl=1*k4jsqu*_ga*NTEwNjExNDEzLjE3NjM3MDc4Nzg.*_ga_8JE65Q40S6*czE3NjM3MDc4NzckbzEkZzEkdDE3NjM3MDc5MDIkajM1JGwwJGgw",
        name: "Zara Malik",
        description: "Content creator and social media strategist helping brands grow online.",
        tags: ["marketing", "content", "branding"]
    },
    {
        image: "https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?_gl=1*izaben*_ga*NTEwNjExNDEzLjE3NjM3MDc4Nzg.*_ga_8JE65Q40S6*czE3NjM3MDc4NzckbzEkZzEkdDE3NjM3MDc5MTgkajE5JGwwJGgw",
        name: "Hania Noor",
        description: "Fitness trainer focused on building strength and sustainable routines.",
        tags: ["fitness", "health", "workout"]
    },
    {
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*1tt5v07*_ga*NTEwNjExNDEzLjE3NjM3MDc4Nzg.*_ga_8JE65Q40S6*czE3NjM3MDc4NzckbzEkZzEkdDE3NjM3MDgwMTUkajUwJGwwJGgw",
        name: "Hamza Ahmed",
        description: "Full-stack developer who loves building modern web apps and learning new tech.",
        tags: ["JavaScript", "Node.js", "React"]
    },
    {
        image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?_gl=1*l8hykv*_ga*NTEwNjExNDEzLjE3NjM3MDc4Nzg.*_ga_8JE65Q40S6*czE3NjM3MDc4NzckbzEkZzEkdDE3NjM3MDgwMjckajM4JGwwJGgw",
        name: "Usman Farooq",
        description: "Fitness enthusiast and personal trainer helping people transform their lifestyle.",
        tags: ["fitness", "training", "health"]
    }
];


let main = document.querySelector("main");
let item = ""
people.forEach((profile) => {
    let { image, name, description, tags } = profile
    let li = ""
    for (let i = 0; i < tags.length; i++) {
        li += `<li> ${tags[i]} </li>`
    }
    item += `<div class="card">
            <img src=${image} alt="">
            <h2 class="name">${name}</h2>
            <p class="description">${description}</p>
            <h5>Skills</h5>
            <ul class="tags">
                ${li}
            </ul>
        </div>`
})
main.innerHTML = item

