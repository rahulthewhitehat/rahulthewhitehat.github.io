const currentImg = document.querySelector("#current");
const imgs = document.querySelector(".imgs")
const img = document.querySelectorAll(".imgs img")

img[0].style.opacity = 0.6;
imgs.addEventListener("click",(event)=>{
    imgs.forEach((element)=>{
        element.style.opacity = 1; } )
    currentImg.src = event.target.src;
    currentImg.classList.add("fade-in");

    setTimeout(() => {
        currentImg.classList.remove("fade-in")
    }, 500);

    event.target.style.opacity = 0.6;
})



