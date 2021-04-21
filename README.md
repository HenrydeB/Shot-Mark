# Shotmark: An E-Commerce Shopping Cart for Used Film Gear

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
*
* [Live Version](#live-version)


## General Info
While I was sitting around, wondering what kind of e-commerce platform I should try to work on, I tried to think about what else I am passionate about. As large companies continue
to rapidly advance their media presence, e-commerce is becoming more and more important for developers to learn, so in an effort to not be left behind in the dust, I thought I'd 
try my hand at this. After being a part of the film industry for a number of years, I know how expensive the industry can be and how hard it is to find good gear for a good price.
From there, I wondered why not make something similar to the clothes resale websites/apps such as Poshmark, but make it for photography and videography gear?

In the grand scheme of things, I admit, this is a relatively simple setup for now, seeing as I can't actually sell anything on there yet (nor do I have the intention to quite yet). 
For now, this uses the MERN stack, storing the product data such as stock and availability, price, and background information. The server then relays the information to the front end 
with Express, then React and Redux provide the functionality such as adding product to cart, loading items to the product page, and changing/resetting the number of times in your cart.
After the page is refreshed, the items stay in the cart!

Here is the home page

![homescreeen](https://user-images.githubusercontent.com/69326962/115483442-66a4f900-a216-11eb-838e-740f9c84d524.png)

Each product has their own page, where we can see all related information to each product

![product](https://user-images.githubusercontent.com/69326962/115483467-71f82480-a216-11eb-9783-39e7f20c68f0.png)

After you press add to cart, the cart screen opens, where you will see the all items you have previously placed in your cart

![cart](https://user-images.githubusercontent.com/69326962/115483483-7de3e680-a216-11eb-9063-387079977bb5.png)

After you press the trashcan button, the item gets removed from the cart

![emptycart](https://user-images.githubusercontent.com/69326962/115483510-89371200-a216-11eb-9648-5ef0cbc1f74f.png)


## Technologies

* React
* Redux
* Express.js
* MongoDB

## Live Version
As of now, the site is not live, but a version of it will be live shortly!
