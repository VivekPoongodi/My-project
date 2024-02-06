// Navbar
const login = document.getElementById("logbox");

function showLogin() {
    login.style.display = "block";
}

function hideLogin() {
    login.style.display = 'none';
}

// Carousel
const carouselImages = [
    'https://wallpapercave.com/wp/wp11127527.jpg',
    'https://wallpapercrafter.com/sizes/2560x1440/69057-fields-tree-plain-nature.jpg',
    'https://previews.123rf.com/images/ivantsov/ivantsov1503/ivantsov150301698/37379993-beautiful-green-forest.jpg'
];
const mainImg = document.getElementById('mainImg');
const dots = document.querySelectorAll('.dot');

let currentIndex = 1;

function updateCarousel() {
    mainImg.src = carouselImages[currentIndex];

    dots.forEach((dot, index) => {
        dot.style.color = (index === currentIndex) ? "black" : "gray";
    });

    currentIndex = (currentIndex + 1) % carouselImages.length;
}

setInterval(updateCarousel, 4000);

// Add to Cart
function afterfun() {
    const cartBtns = document.querySelectorAll('.prod-btn');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

afterfun();

function addToCart() {
    const product = this.parentElement;
    const image = product.querySelector('.card-img').src;
    const title = product.querySelector('.prod-title').innerText;
    const price = product.querySelector('.prod-price').innerText;

    console.log("prod btn");
    displayCartItem(image, title, price);
}

let cartCount = 0;
let cartTotal = 0;

function displayCartItem(img, title, price) {
    const container = document.querySelector('.inner');

    const cartItem = document.createElement('div');
    cartItem.classList.add('inner');
    cartItem.innerHTML = `
        <div class="cart-product">
            <img src="${img}" class="cart-img" alt="">
            <div class="cart-details">
                <h3 class="cart-title">${title}</h3>
                <p class="cart-price">${price}</p>
                <label for="number">Quantity</label>
                <input type="number" value="1">
            </div>
            <i class="fa-solid fa-trash" onclick="removeCartItem(this)" style="font-size: xx-large; padding-top: 20px;"></i>
            <b><hr style="margin-top: 5px; margin-top: 5px;"></b>
        </div>`;

    container.appendChild(cartItem);

    // Update cart count and total
    cartCount++;
    cartTotal += parseInt(price.slice(10));
console.log(cartTotal)
    document.getElementById('cart').innerHTML = cartCount;
    document.getElementById('total').innerHTML = cartTotal;
}

function removeCartItem(trashIcon) {
    const cartProduct = trashIcon.closest('.cart-product');
    alert('remove this');

    const priceElement = cartProduct.querySelector('.cart-price');
    const removedPrice = parseInt(priceElement.innerText.slice(10));

    // Remove the specific cart product
    if (cartProduct) {
        cartProduct.remove();
        cartCount--;
        cartTotal -= removedPrice;

        document.getElementById('cart').innerHTML = cartCount;
        document.getElementById('total').innerHTML = cartTotal;
    }
}

// Cart close
function CartClose(){
const cartBox = document.querySelector('.cart-box');
    cartBox.style.display = 'none';
};

// Cart open
function openCart() {
    var open = document.getElementById('cart-main');
    open.style.display = 'block';
    console.log("Opening cart...");
}

// Upload products
function displayBlock(num)
{
    const block=document.getElementsByClassName('outer-upload')
    if(num==1){
        
block[0].style.display='block'
    }
else{
    block[0].style.display='none'
}
}

function uploadProduct(event) {

// selection
let select=document.getElementById("select-product").value
    event.preventDefault();
    const input = document.getElementById('imageInput');
    
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageDataUrl = e.target.result;

            const uploadTitle = document.querySelector('.upload-title').value;
            const uploadPrice = document.querySelector('.upload-price').value;
            const uploadLocation = document.querySelector('.upload-location').value;
            const mainProd = document.getElementsByClassName('main-prod')[select];

            mainProd.innerHTML += `
                <div class="Prod-card">
                    <img src="${imageDataUrl}" class="card-img" alt="">
                    <div class="card-detail">    
                        <h4 class="prod-title">Product Title: ${uploadTitle}</h4>
                        <h4 class="prod-price">Price: Rs ${uploadPrice}</h4>
                        <h3 class="location">Location: ${uploadLocation}</h3>
                    </div>
                    <button class="prod-btn" onclick="afterfun()">Add To Cart</button>
                </div>`;
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please select an image.");
    }
    console.log("run");
}


// Product card contents
const prodTitles = document.querySelectorAll('.prod-title');
prodTitles.forEach(title => {
    title.innerHTML = "Product Title: " + title.innerHTML;
});

const prodPrices = document.querySelectorAll('.prod-price');
prodPrices.forEach(price => {
    price.innerHTML = "Price: Rs " + price.innerHTML;
});

const locations = document.querySelectorAll('.location');
locations.forEach(place => {
    place.innerHTML = "Location: " + place.innerHTML;
});


function uploadImage() {
    const previewImage = document.getElementById('previewImage');

  

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please select an image.");
    }
}

