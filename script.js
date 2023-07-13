const currentImg = document.querySelector("#current");
const imgs = document.querySelector(".imgs")

imgs.addEventListener("click",(event)=>{
    currentImg.src = event.target.src;
    currentImg.classList.add("fade-in");

    setTimeout(() => {
        currentImg.classList.remove("fade-in")
    }, 500);
    
})



