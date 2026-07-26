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
});