
document.addEventListener("DOMContentLoaded", function () {
    
 
    const heroTitle = document.querySelector(".about-text-content h1");
    if(heroTitle) {
        heroTitle.style.opacity = 0;
        heroTitle.style.transform = "translateY(-20px)";
        heroTitle.style.transition = "all 0.8s ease-out";
        
        setTimeout(() => {
            heroTitle.style.opacity = 1;
            heroTitle.style.transform = "translateY(0)";
        }, 200);
    }

   
    const passionImgBox = document.querySelector(".passion-images-box");
    if(passionImgBox) {
        window.addEventListener("scroll", function () {
            const top = passionImgBox.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                passionImgBox.style.opacity = "1";
                passionImgBox.style.transform = "translateY(0)";
            } else {
                passionImgBox.style.opacity = "0";
                passionImgBox.style.transform = "translateY(80px)";
            }
        });
    }

    
    const discoverBtn = document.querySelector(".discover-btn");
    if (discoverBtn) {
        discoverBtn.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Thank you for your interest in Pizzaro's fresh ingredients and daily passion!");
        });
    }

    
    const journeyCards = document.querySelectorAll(".journey-card");
    if (journeyCards.length > 0) {
        window.addEventListener("scroll", function () {
            journeyCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (cardPosition < screenPosition) {
                    card.classList.add("show");
                }
                else {
                    card.classList.remove("show");
                }
            });
        });
    }
});