// JavaScript to handle adding items to the cart and showing account details

let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `${item.name} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
    }
});

// Account login toggle functionality
function toggleLogin() {
    const accountDetails = document.getElementById('accountDetails');
    accountDetails.style.display = accountDetails.style.display === 'none' ? 'block' : 'none';
}
