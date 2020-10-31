

let product = null;

function onLoadProduct() {
    onLoad();
    product = JSON.parse(window.localStorage.getItem("activeProduct"));
    // Product Page
    let sizeOptions = document.getElementsByClassName("size");
    let colorOptions = document.getElementsByClassName("color");
  
    //let selectionValue =document.getElementById("selectionVal");
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
    currentCart.unshift(selected);
    // c//urrentCart.push(currentCart);
    window.localStorage.setItem('cart', JSON.stringify(currentCart));
    window.localStorage.setItem('cartCount', currentCart.length);//currentCart.length);
    // Size, quantity, color, item id
    window.location.href = "cart.html";
  }