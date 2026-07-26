
// تحديد العناصر
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// القائمة
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= Slider =================

const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".dish-card");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

let currentSlide = 0;

function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

next.addEventListener("click", () => {
    const maxSlide = cards.length - getCardsPerView();

    if (currentSlide < maxSlide) {
        currentSlide++;
        updateSlider();
    }
});

prev.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

window.addEventListener("resize", updateSlider);

updateSlider();
cards.forEach((card,index)=>{

    const heart=document.createElement("i");

    heart.className="fa-regular fa-heart";

    heart.style.position="absolute";
    heart.style.top="20px";
    heart.style.right="25px";
    heart.style.fontSize="24px";
    heart.style.cursor="pointer";
    heart.style.color="#fff";

    card.style.position="relative";

    card.appendChild(heart);

    if(localStorage.getItem("fav"+index)=="true"){

        heart.classList.replace("fa-regular","fa-solid");
        heart.style.color="red";

    }

    heart.onclick=function(){

        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");

        if(heart.classList.contains("fa-solid")){

            heart.style.color="red";
            localStorage.setItem("fav"+index,true);

        }else{

            heart.style.color="white";
            localStorage.setItem("fav"+index,false);

        }

    }

});
localStorage.removeItem("cart");

const addBtns=document.querySelectorAll(".add-btn");

let cart=localStorage.getItem("cart");

if(cart==null){

    cart=0;

}

document.getElementById("cart-count").textContent=cart;

addBtns.forEach(btn=>{

    btn.onclick=function(){

        cart++;

        document.getElementById("cart-count").textContent=cart;

        localStorage.setItem("cart",cart);

        btn.innerHTML='<i class="fa-solid fa-check"></i>';

        setTimeout(()=>{

            btn.innerHTML='<i class="fa-solid fa-plus"></i>';

        },700);

    }

});
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const images = document.querySelectorAll(".dish-card img");

const nextImg = document.getElementById("next-img");
const prevImg = document.getElementById("prev-img");

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener("click", function () {

        currentIndex = index;
        popupImg.src = images[currentIndex].src;
        popup.style.display = "flex";

    });

});

nextImg.addEventListener("click", function (e) {

    e.stopPropagation();

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    popupImg.src = images[currentIndex].src;

});

prevImg.addEventListener("click", function (e) {

    e.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    popupImg.src = images[currentIndex].src;

});

popup.addEventListener("click", function () {

    popup.style.display = "none";

});
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});