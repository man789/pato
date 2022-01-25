// When the user scrolls the page, execute myFunction
window.onscroll = function(){
    functionStick();
};
// Get the navbar
let myNav = document.querySelector(".main-nav");
// Get the offset position of the navbar
let sticky = 0;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function functionStick(){
    if(window.pageYOffset > sticky){
        myNav.classList.add("sticky");
    }else{
        myNav.classList.remove("sticky");
    }
}

// Burger Menu
let myBurger = document.querySelector(".burger-menu");
let navLink = document.querySelector(".nav-right");
let navbg = document.querySelector(".bg-js");
let link = document.querySelectorAll(".main-nav__link");
let cross = document.querySelector('.cross');

myBurger.addEventListener("click", hasClick);
cross.addEventListener("click", hasClick);
navbg.addEventListener("click", hasClick);
for(i=0; i<link.length; i++){
    link[i].addEventListener("click", hasClick)
}

function hasClick(){
    navLink.classList.toggle("active");
    navbg.classList.toggle("active");
}
