var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Makes the previous picture invisible
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("Picture - invisible");
  }

  // The slide number
  slideIndex++;
  console.log("SlideIndex = " + slideIndex);

  if (slideIndex > slides.length) {
    slideIndex = 1
    console.log("SlideIndex set to 1");
  }
  
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }

  // Makes a slide visible
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 4 seconds
}
