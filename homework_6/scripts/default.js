/*
This code contains onload functions for each page
onLoad() - handles the cart count for the cart icon on the nav bar 
        and is called on every page

onLoadProducts() 
  - Dynamically generates product tiles from a json file of product data.
  - On product clicked - saves active product to local storage then directs to details.html

onLoadProduct() 
  - Checks local storage for active product 
  - changes text and image to match current item
  - adds onClick Listeners to color and size boxes and trigger updates to ui if they are clicked
  
  addToCart(id) 
    - When "Add To Cart" button is clicked, retrieve color, quantity, and size information 
      from DOM and create a json object that stores CartItem information
    - Retrieve cart from local storage and add item to cart
    - Redirect to cart page

onLoadCart()
  - Retrieve cart from local storage and dynamically generate product tiles from json data
  
  removeFromCart(id) 
    - remove item from cart then set new cart into local storage
  saveForLater(id) 
    - set inCart property to false and save updated cart into local storage
*/

let product = null;



// Called any time the page reloads in order to update the cart count
function onLoad() {
  // cartCount is retrieved from local storage and added to the html
  let count = window.localStorage.getItem('cartCount');
  if (!count || count === "0") {
    count="";
  }else {count = `<div id="cart-count">${count}</div>`;}
  document.getElementById("cart-icon").innerHTML= count;
}


// Add the product cards to the ui of products.html
function onLoadProducts(){
    onLoad();
    // Grab the products element on the page so the products tiles can be added
    let productsHtml = document.getElementById("products");
    // get productsList from products.js and add a card for each product
    productsList.forEach((product)=>{
      var productCard = document.createElement("div");   
      productCard.className = "product-card";
      productCard.innerHTML=`
            <img src=${product.default} alt="dog">
          <h4>${product.name}</h4>
          <div class  = "items-row">
              <small>Avail in 4 colors</small>
              <span class="fa fa-star"> <b>${product.rating}</b></span>
          </div>
          <p class="product-price">${product.price}</p>
      `;
      // Add onClick listener for when the product is chosen
      productCard.addEventListener("click", ()=>{
        window.localStorage.setItem("activeProduct", JSON.stringify(product));
        window.location.href = "details.html";
      });
      productsHtml.appendChild(productCard);
    });
}



function onLoadProduct() {
    onLoad();
    product = JSON.parse(window.localStorage.getItem("activeProduct"));
    // Product Page
    let sizeOptions = document.getElementsByClassName("size");
    let colorOptions = document.getElementsByClassName("color");
    document.getElementById("details-title").innerHTML = product.name;
    document.getElementById('center-img').src = product.default;
    document.getElementById('details-price').innerHTML = product.price;

    for (let i = 0; i < sizeOptions.length; i++) { sizeOptions[i].addEventListener("click", (e) => onOptionClicked("size", sizeOptions[i])); }
  
    for (let j = 0; j < colorOptions.length; j++) {
      colorOptions[j].addEventListener("click", (e) => {
        let color = onOptionClicked("color", colorOptions[j])[1];
        let colorImg = document.getElementsByClassName(`product-img ${color}`)[0].src;
        document.getElementById('center-img').src = colorImg;
      });
    }
    function onOptionClicked(optionType, newSelection) {
      let oldSelection = document.getElementsByClassName(`${optionType} selected`)[0]
      if (oldSelection) oldSelection.classList.remove("selected");
      newSelection.classList.add("selected");
      return newSelection.classList;
    }
  }


function addToCart(inCart) {
    let selection = document.getElementsByClassName("selected");
    console.log(selection);
    let currentCart = [];
    if (window.localStorage.getItem("cart")) {
      currentCart = JSON.parse(window.localStorage.getItem("cart"));
    }
    // Get all the information about the current item from the Dom
    let selected = {
      "id":product.id,
      "name": product.name,
      "price": product.price,
      "color":selection[0].classList[1],
      "image":document.getElementById('center-img').src,
      "size":selection[1].classList[1],
      "quantity":document.getElementById('quantity').selectedIndex+1,
      "inCart":inCart,
  };
    // add item to the front of the cart list 
    currentCart.unshift(selected);
    // save updated cart and update cart count
    window.localStorage.setItem('cart', JSON.stringify(currentCart));
    window.localStorage.setItem('cartCount', getItemCount(currentCart));
    // navigate to cart page
    window.location.href = "cart.html";
  }

function selectProduct(id){
  console.log(id);
  let c = productsList.findIndex(element => element.id === id);
  window.localStorage.setItem("activeProduct", JSON.stringify(productsList[c]));
  window.location.href = "details.html";
}



function onLoadCart() {
  onLoad();
  let cart = JSON.parse(window.localStorage.getItem("cart"));
  let total = 0;
  cart.filter((cartItem) => cartItem.inCart === true).forEach((item) =>{
    total+= parseFloat(item.quantity) * parseFloat(item.price.substring(1));
  });
  
  document.getElementById("checkout-subtotal").innerHTML = "$"+total;
  console.log(total);

  console.log(cart);
  let c = `<h3 class="cart-text"> Cart </h3>   <hr class="cart-divider" />`;
  c += cart.filter((cartItem) => cartItem.inCart === true).map((item) =>{
   const id=item.id;
    return `
    <div class="cart-item" key=${item.id}>
    <h3 class="item-title">${item.name}</h3>
    <div class="cart-item-content">
      <img class="cartimg" src="${item.image}" />
     <div> 
     <div class="cart-text">Quantity:<span class="item-value"> ${item.quantity}</span></div>
        <div class="cart-text">Color:<span class="item-value"> ${item.color}</span></div>
        <div class="cart-text">Size:<span class="item-value">${item.size}</span></div>
        <div class="cart-text">Price(each):<span class="item-value"> ${item.price}</span></div>
        <div class="cart-buttons">
          <button onclick="removeFromCart('${id}');">Delete</button>
          <button onclick="setSaveForLater('${id}');">Add To Wishlist</button>
          </div>
    </div>
  </div>
    ` }).join('');
  c += `<h3 class="cart-text"> Wishlist </h3>   <hr class="cart-divider" />`;
  c += cart.filter((cartItem) => cartItem.inCart === false)?.map((item) =>
    `
    <div class="cart-item" key=${item.id}>
    <h3 class="item-title">${item.name}</h3>
    <div class="cart-item-content">
      <img class="cartimg" src="${item.image}" />
     <div> 
     <div class="cart-text">Quantity:<span class="item-value"> ${item.quantity}</span></div>
        <div class="cart-text">Color:<span class="item-value"> ${item.color}</span></div>
        <div class="cart-text">Size:<span class="item-value">${item.size}</span></div>
        <div class="cart-text">Price(each):<span class="item-value"> ${item.price}</span></div>
        </div>
        <div class="cart-buttons">
        <button onclick="removeFromCart('${item.id}');">Delete</button>
        <button onclick="setSaveForLater('${item.id}');">Add To Cart</button>
        </div>
    </div>
  </div>
    ` ).join('');
  document.getElementById("cart-items").innerHTML = c;
  document.getElementById("main2").style.height= (400+(cart.length * 350))+"px";
}

function removeFromCart(id){
  cart = JSON.parse(window.localStorage.getItem("cart"));
  cart = cart.filter((cartItem) => cartItem.id !==id);
  window.localStorage.setItem('cart', JSON.stringify(cart));
  window.localStorage.setItem('cartCount', cart.filter((cartItem) => cartItem.inCart === true).length);
  location.reload();
};

function setSaveForLater(id )  {
  cart= JSON.parse(window.localStorage.getItem("cart"));
  let index = cart.findIndex(element => element.id === id);
  cart[index].inCart= !cart[index].inCart;
  window.localStorage.setItem('cart', JSON.stringify(cart));
  window.localStorage.setItem('cartCount', cart.filter((cartItem) => cartItem.inCart === true).length);
  location.reload();
};

// Add the quantities together to get the total number of items in the cart
function getItemCount(cart) {
  let q = 0;
  cart.filter((cartItem) => cartItem.inCart === true).forEach(cartItem => {
      q += parseInt(cartItem.quantity);
  });
  return q;
  }