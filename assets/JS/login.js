document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('pizzaroLoginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail').value;
            alert(`Welcome back! Login attempt recorded for: ${emailInput}`);
        });
    }
});