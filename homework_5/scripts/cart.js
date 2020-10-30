


function onLoadCart(){
    onLoad();
   let cart =  JSON.parse(window.localStorage.getItem("cart"));
    document.getElementById("cart-items").innerHTML= cart.map((item)=> 
    `
    <div class="cart-item" key=${item.id}>
    <hr class="cart-divider" />
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
    ` ).join('') ;
  }
  
  