//=====This is where I hook the feature h1 from the html and save it as a variable. I can use "querySelector" with "#" to access the id.=====

const tagline = document.querySelector("#feature-tagline");

//=====This is where I hook the nav-brand from the html and save it as a variable.I can use "querySelector" with "." to access the class.=====

const navBrand = document.querySelector(".nav-brand");

//=====A function is block of code that we will save to be repeated. This function will change the text in our feature h1 when we run it.======

function changeSlogan(newText) {
  tagline.textContent = newText;
}
//This is where I "call" the function, telling the browser to run it.Notice that the "newText" argument has been replaced by the text I would like to be put into the h1.
changeSlogan("Rayna C. Wiltz");

//=====This function will change the background color of any element we choose, to any color we choose. This is why there are two arguments in the parentheses.======

function changeColor(element, color) {
  element.style.backgroundColor = color;
};
//Again, this is where I am "calling" the function. I have "called" the function to work on the element "navBrand" and will add the background color of "lightpink".
changeColor(navBrand, "softpink");

//Here I have "called" the function to work on the element with the class ".menu-container" and will add the background color of "lightblue".
changeColor(document.querySelector(".menu-container"), "softpink")