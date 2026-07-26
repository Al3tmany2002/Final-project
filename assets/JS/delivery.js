// 1. نمسك كل أزرار الفلترة وكل كروت البيتزا
const filterButtons = document.querySelectorAll('.filter-btn');
const pizzaCards = document.querySelectorAll('.pizza-card');

// 2. نضيف "أذن صاغية" (Event Listener) لكل زر
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // أ) إزالة اللون البرتقالي (active) من كل الأزرار
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // ب) إضافة اللون البرتقالي للزر الذي تم الضغط عليه فقط
        button.classList.add('active');
        
        // ج) معرفة نوع الفلتر من الزر المضغوط (مثلاً: spicy)
        const filterValue = button.getAttribute('data-filter');
        
        // د) نمر على كل كارت بيتزا لفحصه
        pizzaCards.forEach(card => {
            // نعرف تصنيف الكارت (مثلاً: spicy meat)
            const cardCategory = card.getAttribute('data-category');
            
            // إذا كان الفلتر 'all' (الكل) أو تصنيف الكارت يحتوي على الكلمة المطلوبة
            if (filterValue === 'all' || cardCategory.includes(filterValue)) {
                // نظهر الكارت (عن طريق إزالة كلاس hide)
                card.classList.remove('hide');
            } else {
                // نخفي الكارت (عن طريق إضافة كلاس hide)
                card.classList.add('hide');
            }
        });
    });
});










// // 1. استرجاع العربة من المتصفح (localStorage) أو إنشاء مصفوفة فارغة إذا كانت أول زيارة
let cart = JSON.parse(localStorage.getItem('pizzaCart')) || [];

// // تحديد العناصر من الـ HTML
const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCart');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
// تحديد عنصر صندوق الإشعارات
const toastBox = document.getElementById('toastBox');

// وظيفة إظهار الإشعار الجميل
function showToast(message) {
    if(cart.length === 0)
    {
        toastBox.innerText = '❌ ' + message; // إضافة علامة صح بجوار النص
    toastBox.classList.add('show');
    }else{
           toastBox.innerText = '✅ ' + message; // إضافة علامة صح بجوار النص
    toastBox.classList.add('show');
    }

    // إخفاء الرسالة تلقائياً بعد 3 ثواني (3000 مللي ثانية)
    setTimeout(() => {
        toastBox.classList.remove('show');
    }, 3000);
}

// // تحديث شكل العربة فور تحميل الصفحة لتعرض المنتجات المحفوظة
updateCartUI();

// // وظيفة جديدة: حفظ العربة في ذاكرة المتصفح
function saveCartToLocalStorage() {
    localStorage.setItem('pizzaCart', JSON.stringify(cart));
}

// // وظيفة إضافة المنتج للعربة
function addToCart(productName, productPrice) {
    // إضافة المنتج للمصفوفة
    cart.push({ name: productName, price: productPrice });
    
    // حفظ التحديثات في المتصفح
    saveCartToLocalStorage();
    
    // تحديث الواجهة (الأرقام والأسعار)
    updateCartUI();
    
    // إظهار رسالة سريعة للمستخدم تؤكد الإضافة (بدلاً من فتح العربة)
    showToast(`Add to your Car "${productName}"`);
}

// // وظيفة تحديث شكل العربة والأرقام
function updateCartUI() {
    // تحديث العداد
    cartCount.innerText = cart.length;
    
    // تفريغ الحاوية قبل إعادة رسمها
    cartItemsContainer.innerHTML = '';
    
    let total = 0;

    // إذا كانت العربة فارغة
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Car is Empty</p>';
        cartTotal.innerText = 'LE 0';
        return;
    }

    // رسم المنتجات
    cart.forEach((item, index) => {
        total += item.price;
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <span class="price">${item.price} LE </span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Delete</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    // تحديث الإجمالي
    cartTotal.innerText = `${total} LE `;
}

// // وظيفة حذف منتج من العربة
function removeFromCart(index) {
    cart.splice(index, 1); // حذف العنصر
    saveCartToLocalStorage(); // حفظ التعديل في المتصفح بعد الحذف
    updateCartUI(); // تحديث الواجهة
}

// // وظائف فتح وإغلاق العربة
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
}

// // وظيفة إتمام الطلب
function checkout() {
    if (cart.length === 0) {
        showToast("Your Car is Empty! add Proudct to your Car");
    } else {
        showToast("Your Order is succes.");
        // تفريغ العربة بعد الطلب
        cart = [];
        saveCartToLocalStorage(); // مسح العربة من المتصفح أيضاً
        updateCartUI();
        closeCart();
    }
}

// // ربط الأزرار بالأحداث
cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);







