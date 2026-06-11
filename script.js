const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

closeBtn.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage();

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage();

});