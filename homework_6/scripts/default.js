

function onLoad() {
    let count = window.localStorage.getItem('cartCount');
    if (!count || count === "0") {
      count="";
    }else {count = `<div id="cart-count">${count}</div>`;}
    document.getElementById("cart-icon").innerHTML= count;
}


