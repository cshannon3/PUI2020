
// Create a dictionary of the 3 test shrirt dbs I made so I can 
//store the key in local storage and access the current db from 
//anywhere in the code
let shirtOptions = {
    "default": shirts,
    "max": shirtsMax,
    "missing": shirtsMissing
  };
  
  /* 
  Init products runs when products.html is loaded
  It adds a list of product cards to the product-list div
  */
  let initProducts = () => {
    // Set current db and get a list of all shirts
    let shirtStr = "default";
    setShirt(null, shirtStr,);
    let _shirts = shirtOptions[shirtStr];
  
    
    const container = document.getElementById('product-list');
    for (i in _shirts) {
      let cardData = _shirts[i];
      let img = cardData.colors.white.front ?? cardData.default.front;
      let countKey = !('colors' in cardData) ? 0 : Object.keys(cardData.colors).length;
      let col = countKey == 1 ? "color" : "colors";
      container.innerHTML += `
          <div class="item" id="item-${i}">
              <img src="${img}">
              </img>
              <p class="card-title">${cardData.name}</p>
              <p class="card-count">Available in ${countKey} ${col}</p>
              <div id="item-buttons">
                <button class="default-button" id="button-${i}"
                >Quick View</button>
                <button class="default-button" >
                 See Page
                </button>
              </div>
            </div>
            `;
    }
    for (i in _shirts) {
      const s = i;
      document.getElementById("item-" + s.toString()).addEventListener(
        "click", function (e) {
          // set current shirt to the one chicked
          setShirt(s);
  
          // Check if click target is "quick view" button or details
          if (e.target.innerHTML == "Quick View") {
            
            let data = getShirt();
            const container = document.getElementById('quick-look');
            let front = getShirtImage(null, null, "front", "white");
            let back = getShirtImage(null, null, "back", "white");
            container.innerHTML = `
                    <img src="${front}">
                    <img src="${back}">
                    <div>
                    <p class="quick-title"> ${data.name??""}</p>
                      <p class="quick-description">${data.description??""}</p>
                        <button class="default-button quick-button">Close</button>   
                    </div>
                    `
            container.style.visibility = "visible";
          }
          else {window.location.href = "details.html"; }
        });
    }
    document.getElementById('quick-look').addEventListener(
      "click", function (e) {
        if (e.target.innerHTML == "Close") {
          document.getElementById('quick-look').style.visibility = "hidden";
        }
        else{window.location.href = "details.html";}
      });
  }
  
  
  let initDetails = () => {
    
    // Get current shirt data and reset color and side
    let cardData = getShirt();
    setShirt(null, null, "front", "white");
    
    // Get a list of color options available for this shirt
    let colorOptions = !('colors' in cardData) ? {} : Object.keys(cardData.colors).map(function (key, _) { return key; });
   
    // Get shirt-details div and set div html to details html
    const container = document.getElementById('shirt-details');
    container.innerHTML = `
      <h1>${cardData.name}</h1>
      <div>
        <img id="shirt-img" src = "" > </img>
        <div>
          <p id="price">${cardData.price ?? "$$"}</p>
          <p id="description">${cardData.description ?? ""}</p>
          <div class="selection-box">
            <p>Side: </p>
            <button id="front" class="side-button" onclick="onSideClicked(this)">Front</button>
            <button id="back" class="side-button" onclick="onSideClicked(this)" >Back</button>
          </div>
          <div class="selection-box">
            <p>Color:</p>
            ${colorOptions.map(c => `<button class="color-button" id="${c}-button" onclick="onColorClicked(this)" >${capWord(c)}</button>`).join('')}
          </div>
        </div>
      </div>
    </div> `;
  
    // retrieve current image and add it to the html
    showImage();
  };
  
  
  function onColorClicked(element) {
    let col = element.id.split("-")[0]; // get clicked color name
    window.localStorage.setItem('current-shirt-color', col); //set color to local storage
    showImage();//set new image
  }
  function onSideClicked(element) {
    window.localStorage.setItem('current-shirt-side', element.id);//set sideto local storage
    showImage();//set new image
  }
  
  function showImage(shirtNum, shirtdb, side, color) {
    //use local storage info to get current image
    let imgPath = getShirtImage(shirtNum, shirtdb, side, color);
    // change doc element to image
    document.getElementById('shirt-img').src = imgPath;
  }
  
  /*
  Local Storage Getters And Setters
  - Seperated out functions that read/write local storage so it's easier to track when it happens
  */
  
  // Null-safe way to get either cuurrent shirt or a specific shirt
  function getShirt(shirtNum, shirtdb){
    shirtNum ??=window.localStorage.getItem('current-shirt') ?? 0;
    shirtdb ??=window.localStorage.getItem('current-shirts-db') ?? "default";
    return shirtOptions[shirtdb][shirtNum];
  }
  
  // Null-safe way to get either cuurrent image or a specific shirt image
  function getShirtImage(shirtNum, shirtdb, side, color){
    let cardData = getShirt(shirtNum, shirtdb, side, color);
    // if(shirtNum==null)  shirtNum=window.localStorage.getItem('current-shirt');
    // if(color ==null)color= window.localStorage.getItem('current-shirt-color') ?? "white";
    // if(side ==null)side = window.localStorage.getItem('current-shirt-side') ?? "front";
    shirtNum ??=window.localStorage.getItem('current-shirt');
    color ??= window.localStorage.getItem('current-shirt-color') ?? "white";
    side ??= window.localStorage.getItem('current-shirt-side') ?? "front";
  
    let imgPath = cardData.colors[color][side] ??cardData.default[side ?? "front"];
    return imgPath;
  }
  
  // Null-safe way to set any of the shirt data
  function setShirt(shirtNum, shirtdb, side, color){
    if(shirtdb!=null) {window.localStorage.setItem('current-shirts-db', shirtdb);}
    if(shirtNum!=null) {window.localStorage.setItem('current-shirt', shirtNum);}
    if(side!=null) {window.localStorage.setItem('current-shirt-side', side);}
    if(color!=null) {window.localStorage.setItem('current-shirt-color', color);}
  }
  
  /*
  Utils
  - Any small functions that I thought would be useful
  */
  function capWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }