// تحديد العناصر
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// إضافة حدث النقر على زر القائمة (الهامبرجر)
mobileMenu.addEventListener('click', () => {
    // التبديل بين إظهار وإخفاء القائمة في الموبايل
    navLinks.classList.toggle('active');
    
    // يمكنك هنا إضافة أنيميشن للـ bars إذا أردت تحويلها لشكل X
});
/* =========================================
  Home js
   ========================================= */
   // تفاعل الأزرار في الصفحة
document.getElementById('getPizzaBtn').addEventListener('click', function() {
    alert('Welcome to Pizzaro! Let\'s choose your delicious pizza.');
});

document.getElementById('orderNowBtn').addEventListener('click', function() {
    alert('Margherita Classic has been added to your cart successfully! ($8.90)');
});




/* =========================================
  Home js2
   ========================================= */
// تحديد جميع بطاقات الفئات
const categoryCards = document.querySelectorAll('.category-card');

// إضافة حدث النقر لكل بطاقة
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        // إزالة الكلاس active من جميع البطاقات
        categoryCards.forEach(c => c.classList.remove('active'));
        
        // إضافة الكلاس active للبطاقة التي تم النقر عليها فقط
        card.classList.add('active');
        
        // يمكنك هنا إضافة أي كود آخر (مثل جلب منتجات القسم عبر الـ API)
        console.log('تم اختيار الفئة:', card.querySelector('h3').textContent);

// تحديد جميع أزرار "Order Now"
const orderButtons = document.querySelectorAll('.product-card .order-btn');

// إضافة حدث النقر لكل زر
orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // العثور على الكارد الأب الخاص بالزر لمعرفة اسم المنتج وسعره
        const card = e.target.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;

        // تأثير بسيط أو رسالة تنبيه عند الطلب
        alert(`تم إضافة "${productName}" إلى السلة بنجاح!\nالسعر: ${productPrice}`);
        
        // يمكنك هنا ربط الكود بقاعدة بيانات أو سلة تسوق حقيقية (Cart)
    });
});
// تحديد جميع أزرار "Order Now"
const orderButtons = document.querySelectorAll('.product-card .order-btn');

// إضافة حدث النقر لكل زر
orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // العثور على الكارد الأب الخاص بالزر لمعرفة اسم المنتج وسعره
        const card = e.target.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;

        // تأثير بسيط أو رسالة تنبيه عند الطلب
        alert(`تم إضافة "${productName}" إلى السلة بنجاح!\nالسعر: ${productPrice}`);
        
        // يمكنك هنا ربط الكود بقاعدة بيانات أو سلة تسوق حقيقية (Cart)
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // تفاعل زر الطلب في البانر الترويجي
    const promoButton = document.querySelector('.promo-btn');
    if (promoButton) {
        promoButton.addEventListener('click', () => {
            alert('أهلاً بك! تم النقر على طلب البيتزا الساخنة من البانر الترويجي.');
        });
    }

    // تفاعل النقر على الأطباق الموصى بها لعرض تفاصيلها
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach(card => {
        card.addEventListener('click', () => {
            const dishName = card.querySelector('.dish-name').textContent;
            const dishPrice = card.querySelector('.dish-price').textContent;
            console.log(`تم اختيار الطبق: ${dishName} بسعر ${dishPrice}`);
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    
    // تفاعل زر "Discover More"
    const discoverButton = document.querySelector('.discover-btn');
    if (discoverButton) {
        discoverButton.addEventListener('click', () => {
            alert('أهلاً بك! يتم الانتقال الآن لعرض المزيد من التفاصيل عنا.');
        });
    }

});
document.addEventListener('DOMContentLoaded', () => {
    
    // تفاعل إضافي لبطاقات آراء العملاء عند النقر عليها
    const voiceCards = document.querySelectorAll('.voice-card');
    
    voiceCards.forEach(card => {
        card.addEventListener('click', () => {
            const customerName = card.querySelector('.customer-info h4').textContent;
            const reviewTitle = card.querySelector('.card-top h3').textContent;
            
            console.log(`تم النقر على تقييم العميل: ${customerName} - العنوان: ${reviewTitle}`);
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    
    // تفاعل زر طلب التوصيل باستخدام الكلاس الجديد
    const pizzaroOrderButton = document.querySelector('.pizzaro-order-btn');
    
    if (pizzaroOrderButton) {
        pizzaroOrderButton.addEventListener('click', () => {
            alert('أهلاً بك! تم استلام طلبك، ويتم الآن تجهيز خدمة التوصيل السريع.');
        });
    }

});


    });
});