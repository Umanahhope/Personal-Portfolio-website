// navbar function
window.addEventListener("scroll", function(){
 const header = document.querySelector('header');
 header.classList.toggle("sticky", window.scrollY > 0);
})

//  Toggle Menu

function toggleMenu(){
 const MenuBar = document.querySelector(".menuToggle");
 const nav = document .querySelector (".nav");
 MenuBar.classList.toggle("active");
 nav.classList.toggle("active");


}
