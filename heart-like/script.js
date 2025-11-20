let card = document.querySelector(".card")
let heart = document.querySelector("i")

card.addEventListener("dblclick", function(e){
    if(e.target.matches("img")){
        heart.style.opacity = 1;
        heart.style.transform = `translate(-50%,-50%) scale(1.5) rotate(0deg)`
        
        
        setTimeout(()=>{
            heart.style.transform = `translate(-50%,-260%) scale(1.5) rotate(0deg)`
        },1000)
        setTimeout(()=>{
            heart.style.opacity = 0;
        },1200)
        setTimeout(()=>{
            heart.style.transform = `translate(-50%,-50%) scale(.5) rotate(-40deg)`
        },1500)
    }
    
})