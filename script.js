// Product data (can be extended with more products)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'images/product1.jpeg' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'images/product2.jpeg' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'images/product3.jpeg' }
];

let cart = [];

// Function to display products
function displayProducts() {
  const productList = document.querySelector('.product-list');
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productItem);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Update the cart display and button
function updateCart() {
  const cartBtn = document.getElementById('cart-btn');
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  
  // Update cart button count
  cartBtn.textContent = `🛒 Cart (${cart.length})`;
  
  // Clear existing items in cart
  cartItems.innerHTML = '';
  
  // Add items to cart popup
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  
  // Display total price
  totalPrice.textContent = total.toFixed(2);
}

// Show or hide the cart popup
document.getElementById('cart-btn').addEventListener('click', () => {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
});

// Close the cart popup
document.getElementById('close-cart-btn').addEventListener('click', () => {
  document.getElementById('cart-popup').style.display = 'none';
});

// Display products when the page loads
window.onload = displayProducts;
