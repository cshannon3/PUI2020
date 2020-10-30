

function onLoad() {
  renderNavBar();
  renderFooter();
}



function renderNavBar(){
    let count = window.localStorage.getItem('cartCount');
    if (!count || count === "0") {
      count="";
    }else {count = `<div id="cart-count">${count}</div>`;}
    let navHtml = document.getElementById("nav");
    navHtml.innerHTML = `
    <img class="logo" src="static/images/nav/logo.png" alt="muddy paws logo">
    <div class="nav-links">
        <a class="nav-link" href="index.html">Home</a>
        <a class="nav-link" href="products.html">Products</a>
        <a class="nav-link" href="blog.html">Blog</a>
        <a class="nav-link"  href="about.html">About Us</a>
        <a class="nav-link" href="contact.html">Contact Us</a>
    </div>
    <div class="search-bar">
        <div class="search-icon"><img src="static/icons/search.png" alt="search"></div>
        <div class="search-input"></div>
    </div>
    <div class="socials">
        <div class="social"><img class="social-icon" src="static/icons/mail.png" alt="mail">
            <p class="social-text">mud@gmail.com</p>
        </div>
        <div class="social"><img class="social-icon" src="static/icons/phone.png" alt="phone">
            <p class="social-text">1-100-897-6754</p>
        </div>
        <div class="social"><img class="social-icon" src="static/icons/instagram.png" alt="instagram">
            <p class="social-text">@muddypaws</p>
        </div>
    </div>
    <div class="cart" >
        <p class="cart-text">Cart</p>
        <div class="cart-icon">${count}</div>
    </div>`;
  
  }


  function renderFooter(){
    let newsletterHtml = document.getElementById("newsletter");
    let entries = ["First Name", "Last Name", "Email"]
    newsletterHtml.innerHTML = `
    <div class="newsletter-title">Join The Club</div>
    <div  class="newsletter-entries">`
    +entries.map((entry)=> `
        <div class="entry-field">
            <div class="field-label">${entry}</div>
            <div class="field-container">   ${entry}</div>
        </div>
    `).join('') + 
      `<div class="sign-up-button">Sign Up</div>
    </div>
    `;
  
    let icons = ["mail", "phone", "facebook", "shopping-cart", "twitter"];
    document.getElementById("footer").innerHTML =  `<div class="footer-socials">` 
        + icons.map((icon)=> `<img class="social-icon" src="static/icons/${icon}.png" alt="${icon}">`).join('')
        +`</div><div class="footer-text">Site Created By Connor Shannon, 2020</div>`;
  }