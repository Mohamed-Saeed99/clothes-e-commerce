document.addEventListener("DOMContentLoaded", function() {
    // Retrieve product details from localStorage
    const productDetails = JSON.parse(localStorage.getItem('selectedProduct'));

    // Update HTML elements with product details
    if (productDetails) {
        document.getElementById('product-name').textContent = productDetails.name;
        document.getElementById('product-image').src = productDetails.image;
        document.getElementById('product-description').textContent = productDetails.description;
        document.getElementById('product-color').textContent = `Avaliable color: ${productDetails.color}`;
        document.getElementById('product-size').textContent = `Avaliable size: ${productDetails.size}`;
        document.getElementById('product-price').textContent = `Price: $${productDetails.price}`;
    } else {
        // Handle case where product details are not found in localStorage
        console.error('Product details not found in localStorage');
    }
});