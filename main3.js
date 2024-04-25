 let cart=[]
 let add= document.querySelectorAll(".add-btn");
// let imgProduct=document.querySelectorAll(".card-img-top")
let cartBody=document.querySelector(".cart-body");
// let salaries=document.querySelectorAll(".salary");
let totalSalary=document.querySelector(".total-price")
// let nameOfProduct=document.querySelectorAll(".card-text")
let parentCart=document.createElement("div");
// parentCart.style.display="flex"
// parentCart.style.alignItems="center"
// parentCart.style.width="auto";
// parentCart.style.height="auto";
// parentCart.style.margin="20px"
parentCart.className="parent-add"
document.addEventListener("DOMContentLoaded", function() {
fetch('products3.json')
    .then(response => response.json())
    .then(data => {
        const productsContainers1 = document.getElementsByClassName('products-container-1');
        const productsContainers2 = document.getElementsByClassName('products-container-2');
        const productsContainers3 = document.getElementsByClassName('products-container-3');
     
        // Append products with IDs 1, 2, 3
        Array.from(productsContainers1).forEach(container => {
            data.filter(product => [1, 2, 3,4,5].includes(product.id)).forEach(product => {
                const productElement = createProductElement(product);
                container.appendChild(productElement);
            });
        });
    
        // Append products with IDs 4, 5, 6
        Array.from(productsContainers2).forEach(container => {
            data.filter(product => [6,7,8,9,10].includes(product.id)).forEach(product => {
                const productElement = createProductElement(product);
                productElement.classList.add('different-class-name-1');
                container.appendChild(productElement);
            });
        });
    
        // Append products with IDs 7, 8, 9
        Array.from(productsContainers3).forEach(container => {
            data.filter(product => [11,12,13,14,15].includes(product.id)).forEach(product => {
                const productElement = createProductElement(product);
                productElement.classList.add('different-class-name-2');
                container.appendChild(productElement);
            });
        });
    
      
        // Add event listener to all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCartClicked);
        });
    });
    
    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2 class="product-name">${product.name}</h2>
            
            <p class="price">Price: $${product.price}</p>
            <button class="view-details-btn card-btn" data-id="${product.id}">View Details</button> <!-- New button for viewing details -->
            <button class="add-to-cart-btn card-btn" data-name="${product.name}" data-price="${product.price}">Add to Cart+</button>
           
        `;
        
        // Attach event listener to the view details button
        const viewDetailsButton = productElement.querySelector('.view-details-btn');
        viewDetailsButton.addEventListener('click', function() {
            // Store product details in localStorage
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            // Redirect to another page
            window.location.href = 'http://127.0.0.1:5501/product3-details.html'; // Change the URL to the page where you want to display the details
        });
        
        return productElement;
    }
    
    
    

function addToCartClicked(event) {
    const button = event.target;
    const name = button.dataset.name;
    const price = button.dataset.price;
    //window.localStorage.setItem("Total Salary",0)
    //window.localStorage.clear()
    window.onload()
    addToCart(name, price);
}

function addToCart(name, price) {
    // Retrieve existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new cart item
    const newItem = { name, price };

    // Add the new item to the cart
    cartItems.push(newItem);

    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.onload()
    console.log('Added to cart:', newItem);
}

function displayCartItems() {
    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear previous content in cartBody
    cartBody.innerHTML = '';

    // Create a container to hold the cart items
    let cartItemsContainer = document.createElement('div');

    // Variable to hold total price
    let totalPrice = 0;

    cartItems.forEach(item => {
        // Create a new div for each item
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name}: $${item.price}`;
        // Create a span for the remove button (X)
        let removeButton = document.createElement('span');
        removeButton.textContent = ' X';
        removeButton.style.color = 'red';
        removeButton.style.cursor = 'pointer';
        removeButton.addEventListener('click', function() {
            // Remove item from cart
            removeCartItem(item);
            // Update display
            displayCartItems();
        });
        // Append the remove button to the item div
        itemDiv.appendChild(removeButton);
        // Append the new item div to the container
        cartItemsContainer.appendChild(itemDiv);
        // Add item price to total price
        totalPrice += +item.price;
    });
    // Display total price
    let totalPriceDiv = document.createElement('div');
    totalPriceDiv.textContent = `Total: $${totalPrice}`;
    cartItemsContainer.appendChild(totalPriceDiv);
    // Append the container to cartBody
    cartBody.appendChild(cartItemsContainer);
}
function removeCartItem(itemToRemove) {
    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // Filter out the item to be removed
    cartItems = cartItems.filter(item => !(item.name === itemToRemove.name && item.price === itemToRemove.price));
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
}
window.onload=displayCartItems;
});
// ----------------------------------
let btnTop = document.querySelector('.top');
window.onscroll = function () {
    if (window.scrollY >= 600) {
      //btnTop.style.display="block";
        btnTop.style.opacity = "1";
    } else {
      //btnTop.style.display="none";
        btnTop.style.opacity = "0";
    }
}