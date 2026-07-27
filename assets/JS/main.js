
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');


mobileMenu.addEventListener('click', () => {
   
    navLinks.classList.toggle('active');
    
   
});
/* =========================================
//* =========================================
  Home js & Home js2
========================================= */

document.getElementById('getPizzaBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Welcome to Pizzaro! Let\'s choose your delicious pizza.');
});

document.getElementById('orderNowBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Margherita Classic has been added to your cart successfully! ($8.90)');
});

const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        console.log('تم اختيار الفئة:', card.querySelector('h3').textContent);
    });
});

const orderButtons = document.querySelectorAll('.product-card .order-btn');

orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;
        alert(`تم إضافة "${productName}" إلى السلة بنجاح!\nالسعر: ${productPrice}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const promoButton = document.querySelector('.promo-btn');
    if (promoButton) {
        promoButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('أهلاً بك! تم النقر على طلب البيتزا الساخنة من البانر الترويجي.');
        });
    }

    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach(card => {
        card.addEventListener('click', () => {
            const dishName = card.querySelector('.dish-name').textContent;
            const dishPrice = card.querySelector('.dish-price').textContent;
            console.log(`تم اختيار الطبق: ${dishName} بسعر ${dishPrice}`);
        });
    });

    const discoverButton = document.querySelector('.discover-btn');
    if (discoverButton) {
        discoverButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('أهلاً بك! يتم الانتقال الآن لعرض المزيد من التفاصيل عنا.');
        });
    }

    const voiceCards = document.querySelectorAll('.voice-card');
    voiceCards.forEach(card => {
        card.addEventListener('click', () => {
            const customerName = card.querySelector('.customer-info h4').textContent;
            const reviewTitle = card.querySelector('.card-top h3').textContent;
            console.log(`تم النقر على تقييم العميل: ${customerName} - العنوان: ${reviewTitle}`);
        });
    });

    const pizzaroOrderButton = document.querySelector('.pizzaro-order-btn');
    if (pizzaroOrderButton) {
        pizzaroOrderButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('أهلاً بك! تم استلام طلبك، ويتم الآن تجهيز خدمة التوصيل السريع.');
        });
    }

    
    const cartBox = document.getElementById('cartBox');
    if (cartBox) {
        cartBox.addEventListener('click', () => {
            alert('سلة المشتريات فارغة حالياً، ابدأ بإضافة بعض البيتزا اللذيذة!');
        });
    }

});