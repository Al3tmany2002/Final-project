document.addEventListener("DOMContentLoaded", () => {
  
    const cards = document.querySelectorAll(".polaroid-card");
    
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform += " translateY(30px)";
        
        setTimeout(() => {
            card.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
        }, index * 70);
    });

   
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const prevBtn = document.getElementById("prev-img");
    const nextBtn = document.getElementById("next-img");
    
   
    const cardImages = document.querySelectorAll(".polaroid-card img");
    let currentIndex = 0;

    if (popup && popupImg && cardImages.length > 0) {
        cardImages.forEach((img, index) => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                currentIndex = index;
                popupImg.src = img.src;
                popup.style.display = "flex";
            });
        });

       
        const showImage = (index) => {
            if (index < 0) {
                currentIndex = cardImages.length - 1;
            } else if (index >= cardImages.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            popupImg.src = cardImages[currentIndex].src;
        };

        if (prevBtn) {
            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                showImage(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                showImage(currentIndex + 1);
            });
        }

       
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    }
});