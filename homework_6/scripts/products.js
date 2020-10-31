
function onLoadProducts(){
    onLoad();
    let productsHtml = document.getElementById("products");
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
      productCard.addEventListener("click", ()=>{
        window.localStorage.setItem("activeProduct", JSON.stringify(product));
        window.location.href = "details.html";
      });
      productsHtml.appendChild(productCard);
    });
}


var productsList = [
    {
        "id":"food",
        "name": "Food Harness",
        "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
        "price": "$620.00",
        "rating":4.5,
        "colors": {
            "blueberry":"static/images/details/blueberry.jpg",
            "strawberry":"static/images/details/green.jpg",
            "crazyberry":"static/images/details/purple.jpg",
            "fireorange":"static/images/details/strawberry.jpg",
        },
        "default": "static/images/products/food-harness.jpg",
        "similarProducts":["food"]
    },
    {
        "id":"doggy",
        "name": "Doggy Bag Backpack",
        "description": "Do you wish you could lighten the load a little bit when you go on hikes with your dog? Well, if you purchase this top-of-the-line doggy backpack, your dog will we excited to help!",
        "price": "$200.00",
        "rating":4.3,
        "colors": {
            "blueberry":"static/images/details/blueberry.jpg",
            "strawberry":"static/images/details/green.jpg",
            "crazyberry":"static/images/details/purple.jpg",
            "fireorange":"static/images/details/strawberry.jpg",
        },
        "default": "static/images/details/blueberry.jpg"
    },
    {
        "id":"catpack",
        "name": "CatPack Backpack",
        "description": "Do you wish you could lighten the load a little bit when you go on hikes with your dog? Well, if you purchase this top-of-the-line doggy backpack, your dog will we excited to help!",
        "price": "$4900.00",
        "rating":4.9,
        "colors": {
            "blueberry":"static/images/details/blueberry.jpg",
            "strawberry":"static/images/details/green.jpg",
            "crazyberry":"static/images/details/purple.jpg",
            "fireorange":"static/images/details/strawberry.jpg",
        },
        "default": "static/images/products/catpack.jpg"
    },
    {
        "id":"harness",
        "name": "Dog Harness",
        "description": "Do you wish you could lighten the load a little bit when you go on hikes with your dog? Well, if you purchase this top-of-the-line doggy backpack, your dog will we excited to help!",
        "price": "$219.99",
        "rating":4.0,
        "colors": {
            "blueberry":"static/images/details/blueberry.jpg",
            "strawberry":"static/images/details/green.jpg",
            "crazyberry":"static/images/details/purple.jpg",
            "fireorange":"static/images/details/strawberry.jpg",
        },
        "default": "static/images/products/dogharness.jpg"
    },
];