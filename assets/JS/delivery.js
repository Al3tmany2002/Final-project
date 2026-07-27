
const filterButtons = document.querySelectorAll('.filter-btn');
const pizzaCards = document.querySelectorAll('.pizza-card');


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
      
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
       
        button.classList.add('active');
        
        
        const filterValue = button.getAttribute('data-filter');
        
        
        pizzaCards.forEach(card => {
           
            const cardCategory = card.getAttribute('data-category');
            
           
            if (filterValue === 'all' || cardCategory.includes(filterValue)) {
                
                card.classList.remove('hide');
            } else {
               
                card.classList.add('hide');
            }
        });
    });
});











let cart = JSON.parse(localStorage.getItem('pizzaCart')) || [];


const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCart');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

const toastBox = document.getElementById('toastBox');


function showToast(message) {
    if(cart.length === 0)
    {
        toastBox.innerText = '❌ ' + message; 
    toastBox.classList.add('show');
    }else{
           toastBox.innerText = '✅ ' + message; 
    toastBox.classList.add('show');
    }

    
    setTimeout(() => {
        toastBox.classList.remove('show');
    }, 3000);
}


updateCartUI();


function saveCartToLocalStorage() {
    localStorage.setItem('pizzaCart', JSON.stringify(cart));
}


function addToCart(productName, productPrice) {
    
    cart.push({ name: productName, price: productPrice });
    

    saveCartToLocalStorage();
    
    
    updateCartUI();
    
 
    showToast(`Add to your Car "${productName}"`);
}


function updateCartUI() {
  
    cartCount.innerText = cart.length;
    
   
    cartItemsContainer.innerHTML = '';
    
    let total = 0;

    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Car is Empty</p>';
        cartTotal.innerText = 'LE 0';
        return;
    }

    
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

    
    cartTotal.innerText = `${total} LE `;
}


function removeFromCart(index) {
    cart.splice(index, 1); 
    saveCartToLocalStorage(); 
    updateCartUI(); 
}


function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
}


function checkout() {
    if (cart.length === 0) {
        showToast("Your Car is Empty! add Proudct to your Car");
    } else {
        showToast("Your Order is succes.");
        
        cart = [];
        saveCartToLocalStorage(); 
        updateCartUI();
        closeCart();
    }
}


cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);







