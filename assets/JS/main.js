// تحديد العناصر
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// إضافة حدث النقر على زر القائمة (الهامبرجر)
mobileMenu.addEventListener('click', () => {
    // التبديل بين إظهار وإخفاء القائمة في الموبايل
    navLinks.classList.toggle('active');
    
    // يمكنك هنا إضافة أنيميشن للـ bars إذا أردت تحويلها لشكل X
});