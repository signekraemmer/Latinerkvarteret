var burger = document.getElementsByClassName("burger");
burger[0].addEventListener("click", navSlideDown);

function navSlideDown() {
  var nav = document.getElementsByClassName("navlinks");
  nav[0].classList.toggle("navactive");
  console.log("Own Slider function executed");
}
