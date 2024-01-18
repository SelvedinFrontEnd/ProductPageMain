let counter = document.querySelector(".count");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let cart = document.querySelector(".cart")
let cartMenu = document.querySelector(".cart-menu")
let cartItems = document.querySelector(".cart-items");
let addToCart = document.querySelector(".btn");
let emptyCart = document.querySelector(".empty-cart");
let price = 125;
let upperCart = document.querySelector(".upper-cart");
let fullCart;
let cartNumber = document.querySelector(".cart-number");


cart.addEventListener("click", () =>{
    if(cartMenu.style.visibility === "visible"){
        cartMenu.style.visibility = "hidden"
        emptyCart.style.visibility = "hidden";
    }else {
        cartMenu.style.visibility = "visible"
        if(getComputedStyle(upperCart).display === "none"){
            emptyCart.style.visibility = "visible"; 
        }
    }
})

plus.addEventListener("click", () => {
    counter.innerHTML ++
});

minus.addEventListener("click", () => {
    if(counter.innerHTML > 0){
        counter.innerHTML --
    }
});

function deleteItem(){
    emptyCart.style.visibility = "visible";
    upperCart.style.display = "none"
    cartNumber.style.display = "none";
}

addToCart.addEventListener("click", cartAdd);

function cartAdd(){
   

    let count = parseInt(counter.innerHTML)

    fullCart = document.createElement("div");
    fullCart.classList.add("full")

    let total = count * 125

    cartNumber.innerHTML = count;
    

    if(count != 0){ 
        cartNumber.style.display = "flex";
        upperCart.style.display = "block"
        emptyCart.style.visibility = "hidden";
        upperCart.innerHTML =  fullCart.innerHTML =`
                                <div class="flex">
                                <img class="small-product" src=images/image-product-1-thumbnail.jpg>
                                <div class="flex-2">
                                <div class="gray">Fall Limited Edition Sneakers</div>
                                <div class="gray">$125.00 x ${count} <span class="dark"> $${total.toFixed(2)}</span></div>
                                </div>
                                <svg onClick="deleteItem()" class"remove" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                                </div>
                                <button class="checkout">Checkout</button>
                                ` 
    }
    
}
    

let slideLeft = document.querySelector(".circle-left");
let slideRight = document.querySelector(".circle-right");

let currentIndex = 0;
const images = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg']
const currentImage = document.querySelector(".picture")

function showSlide(index) {
    if(index < 0){
        index = images.length - 1;
    }else if(index >= images.length){
        index = 0;
    }

    currentImage.src = images[index];
    currentIndex = index;
}

slideRight.addEventListener("click", () =>{
    showSlide(currentIndex + 1);
})

slideLeft.addEventListener("click", () =>{
    showSlide(currentIndex - 1);
})

function showBigImage(imageSrc) {
    currentImage.src = imageSrc;
}



let menuClose = document.querySelector(".menu-close");
let menuOpen = document.querySelector(".menu-open");
let menu = document.querySelector(".menu-items")

menuClose.addEventListener("click", () => {
    menu.style.display = "none"
    document.getElementById("overlay").style.display = "none"
})

menuOpen.addEventListener("click", () => {
    menu.style.display = "flex"
    document.getElementById("overlay").style.display = "block"
})

