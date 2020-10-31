



function onLoadCart(){

}




// Product Page
let sizeOptions = document.getElementsByClassName("size");
let colorOptions = document.getElementsByClassName("color");

//let selectionValue =document.getElementById("selectionVal");
for(let i = 0; i < sizeOptions.length; i++)
{ sizeOptions[i].addEventListener("click",(e)=>onOptionClicked("size", sizeOptions[i]));}

for(let j = 0; j < colorOptions.length; j++)
{ colorOptions[j].addEventListener("click",(e)=>{
    let color = onOptionClicked("color", colorOptions[j])[1];
    let colorImg = document.getElementsByClassName(`product-img ${color}`)[0].src;
    document.getElementById('center-img').src = colorImg;
});
}

function onOptionClicked(optionType, newSelection){
  let oldSelection = document.getElementsByClassName(`${optionType} selected`)[0]
  if(oldSelection)oldSelection.classList.remove("selected");
  newSelection.classList.add("selected");
  return newSelection.classList;
}

function addToCart(){
    selection = document.getElementsByClassName("selected");
    // Size, quantity, color, item id
    window.location.href = "cart.html";
    
}