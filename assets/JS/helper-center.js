// تحديد جميع عناصر الأكورديون
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    // تحديد زر العنوان داخل كل عنصر
    const header = item.querySelector('.accordion-header');
    
    // إضافة حدث النقر (Click)
    header.addEventListener('click', () => {
        
        // (اختياري) إغلاق باقي العناصر إذا كانت مفتوحة عند فتح عنصر جديد
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // فتح أو إغلاق العنصر الحالي
        item.classList.toggle('active');
    });
});