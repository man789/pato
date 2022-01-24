let date_index = new Date();
let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

day.innerHTML = date_index.getUTCDate();
hour.innerHTML = date_index.getHours();
minute.innerHTML = date_index.getMinutes();
second.innerHTML = date_index.getSeconds();

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
let navLink = document.querySelector(".nav-link");
let link = document.querySelectorAll(".main-nav__link");
let cross = document.querySelector('.cross');

cross.addEventListener("click", hasClick);

myBurger.addEventListener("click", hasClick);
for(i=0; i<link.length; i++){
    link[i].addEventListener("click", hasClick)
}
function hasClick(){
    myBurger.classList.toggle("active");
    navLink.classList.toggle("active");
}
