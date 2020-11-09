# muddy-paws

						
You should clearly demonstrate what issues / bugs you encountered, what you learnt from them and how did you resolve them. A good reflection will demonstrate a clear understanding of the issue, and how it may be mitigated in the future.
 
					
Reflection

Although I have experience with a lot of different programming languages, I only started learning javascript this semester and I’ve had a mixed relationship with it. While the flexibility of js can be convenient, it also makes it hard to choose the best way to approach a problem. I also really dislike the hacky way of injecting html through JS for dynamic content. While adding in the "remove from cart" button to the cart page I got stuck debugging a problem in the html string. I ended up dealing with this by moving the html into the html file while testing then moving it back into the javascript once I got it working.

I also had trouble updating the layout after adding dynamic content. This was especially a problem in the cart page. I overcame this by using the cart length to determine the height of the container then changing it in the javascript file.




Examples


a. Demonstrate 5 programming concepts that you learned in Javascript and used in this assignment with an example.

1. Local Storage - Local storage provides an easy way to store and retrieve user-specific data while they are using the site. Without this, the data would be reset everytime the user reloaded the page.
2. Filtering - I found that the filtering function was really helpful in a few different scenarios. It is a nice, concise way to get sort the list. I used it when implementing the woishlist. Rather than having two different lists, I just had one cart list and added an inCart boolean to signify which were in the cart and which were in the wishlist.
    cart.filter((cartItem) => cartItem.inCart === true)
3. Map - The map function is basically a loop the returns a modified version of the list. This was really convineinet for generating the html
4. 
5. Json/ Maps - I decided not to use a class or prototype for this project because I found it more convenient to keep the data in objects. I like how javascript allows you to use both object.attrubute and object["attribute"] to get specific attributes.
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