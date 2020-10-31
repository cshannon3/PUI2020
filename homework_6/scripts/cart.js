


function onLoadCart() {
  onLoad();
  let cart = JSON.parse(window.localStorage.getItem("cart"));
  let c = `<h3 class="cart-text"> Cart </h3>   <hr class="cart-divider" />`;
  c += cart.filter((cartItem) => cartItem.inCart === true).map((item) =>
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
    </div>
  </div>
    ` ).join('');
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
    </div>
  </div>
    ` ).join('');
  document.getElementById("cart-items").innerHTML = c;
}

