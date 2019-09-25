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

document.getElementsByClassName("burger").addEventListener("click", navSlideOwn);

function navSlideOwn() {
  var nav = document.getElementsByClassName("navlinks");
  nav.classList.toggle("nav-active");
  console.log("Own Slider function executed");
}
