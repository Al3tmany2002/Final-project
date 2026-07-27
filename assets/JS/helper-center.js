
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    
    const header = item.querySelector('.accordion-header');
    
    
    header.addEventListener('click', () => {
        
        
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        
        item.classList.toggle('active');
    });
});


// ================= Dark Mode =================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");
        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");
            darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}
