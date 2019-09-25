// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".navlinks");
// console.log("variables loaded successfully");
//
//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//     console.log("Burger clicked");
//   });
// }
//
// navSlide();
// console.log("Burger click executed");

var burger = document.getElementsByClassName("burger")
burger.addEventListener("click", navSlideDown);

function navSlideDown() {
  var nav = document.getElementsByClassName("navlinks");
  nav.classList.toggle("nav-active");
  console.log("Own Slider function executed");
}
