// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() 
// {
//   if (window.pageYOffset > sticky) 
//   {
//     header.classList.add("sticky");
//   } 
  
//   else 
//   {
//     header.classList.remove("sticky");
//   }
// }


const mobileBtn = document.getElementById('mobile-cta')

nav = document.querySelector('nav')

mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => 
{
  nav.classList.add('menu-btn');
}
)

mobileBtnExit.addEventListener('click', () => 
{
  nav.classList.remove('menu-btn');
}
)