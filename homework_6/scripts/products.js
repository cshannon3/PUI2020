
var productsList = [
    {
        "id":"food",
        "tags":["Dogs", "Harness"],
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
        "tags":["Dogs", "Backpacks"],
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
        "default": "static/images/details/blueberry.jpg",
        "reviews":[
            {
                "author":"Joe Shmo",
                "date": "Aug 19th, 2019",
                "rating":2,
                "title":"Not Real Yak Wool",
                "content":"There’s no way this is real Yak Wool. My guess is that it’s either llama or sheep!"
            },
            {
                "author":"Joe Shmo",
                "date": "Aug 19th, 2019",
                "rating":5,
                "title":"Works for Chinchillas!",
                "content":" I’ve been taking my chinchilla on hikes for years and have been looking for something just like this. Even though this is made for dogs, I thought I’d take a chance purchasing. Luckily this works great for chinchillas too! I’ll be telling all the chincilla owners I know about this place. Thanks!"
            },
            {
                "author":"Joe Shmo",
                "date": "Aug 19th, 2019",
                "rating":4,
                "title":"Best Product Ever!!!!",
                "content":"I used to bring my 6 year old on all our hikes so he could carry all my stuff. But now with this backpack, I can have my dog carry it instead and leave my son at home."
            },
            {
                "author":"Joe Shmo",
                "date": "Aug 19th, 2019",
                "rating":4,
                "title":"Finally My Dog Can Carry His Own Shit",
                "content":"Our dog has become way to pampered. We’ve been trying to teach her some personal responsibility by focing her to prepare her own dinner and carry her own shit around. This product has been great for this!"
            },

        ],
    },
    {
        "id":"catpack",
        "name": "CatPack Backpack",
        "tags":["Cats", "Backpacks"],
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
        "tags":["Dogs", "Harness"],
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


// /*
// This code is for the product list page and product details page

// They both contain an on

// */

// let product = null;

// function onLoadProducts(){
//     onLoad();
//     let productsHtml = document.getElementById("products");
//     productsList.forEach((product)=>{
//       var productCard = document.createElement("div");   
//       productCard.className = "product-card";
//       productCard.innerHTML=`
//             <img src=${product.default} alt="dog">
//           <h4>${product.name}</h4>
//           <div class  = "items-row">
//               <small>Avail in 4 colors</small>
//               <span class="fa fa-star"> <b>${product.rating}</b></span>
//           </div>
//           <p class="product-price">${product.price}</p>
//       `;
//       productCard.addEventListener("click", ()=>{
//         window.localStorage.setItem("activeProduct", JSON.stringify(product));
//         window.location.href = "details.html";
//       });
//       productsHtml.appendChild(productCard);
//     });
// }



// function onLoadProduct() {
//     onLoad();
//     product = JSON.parse(window.localStorage.getItem("activeProduct"));
//     // Product Page
//     let sizeOptions = document.getElementsByClassName("size");
//     let colorOptions = document.getElementsByClassName("color");
//     document.getElementById("details-title").innerHTML = product.name;
//     document.getElementById('center-img').src = product.default;
//     document.getElementById('details-price').innerHTML = product.price;

//     //let selectionValue =document.getElementById("selectionVal");
//     for (let i = 0; i < sizeOptions.length; i++) { sizeOptions[i].addEventListener("click", (e) => onOptionClicked("size", sizeOptions[i])); }
  
//     for (let j = 0; j < colorOptions.length; j++) {
//       colorOptions[j].addEventListener("click", (e) => {
//         let color = onOptionClicked("color", colorOptions[j])[1];
//         let colorImg = document.getElementsByClassName(`product-img ${color}`)[0].src;
//         document.getElementById('center-img').src = colorImg;
//       });
//     }
//     function onOptionClicked(optionType, newSelection) {
//       let oldSelection = document.getElementsByClassName(`${optionType} selected`)[0]
//       if (oldSelection) oldSelection.classList.remove("selected");
//       newSelection.classList.add("selected");
//       return newSelection.classList;
//     }
//   }


// function addToCart(inCart) {
//     let selection = document.getElementsByClassName("selected");
//     console.log(selection);
//     let currentCart = [];
//     if (window.localStorage.getItem("cart")) {
//       currentCart = JSON.parse(window.localStorage.getItem("cart"));
//     }
//     let selected = {
//       "id":product.id,
//       "name": product.name,
//       "price": product.price,
//       "color":selection[0].classList[1],
//       "image":document.getElementById('center-img').src,
//       "size":selection[1].classList[1],
//       "quantity":document.getElementById('quantity').selectedIndex+1,
//       "inCart":inCart,
//   };
//   console.log(currentCart);
//     currentCart.unshift(selected);
//     // c//urrentCart.push(currentCart);
//     window.localStorage.setItem('cart', JSON.stringify(currentCart));
//     window.localStorage.setItem('cartCount', getItemCount(currentCart));
//    // currentCart.filter((cartItem) => cartItem.inCart === true).length);//currentCart.length);
//     // Size, quantity, color, item id
//     window.location.href = "cart.html";
//   }

// function selectProduct(){
//   window.location.href = "details.html";
// }
