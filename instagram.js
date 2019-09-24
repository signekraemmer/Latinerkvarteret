document.getElementById("post").addEventListener("click", postShow);
console.log("After the click event");

function postShow() {
  console.log("postShow() running");
  var post = document.getElementById("post");

  if (post.style.opacity == 0) {
    post.style.opacity = 1;
    console.log("Turned Visible");
  }

// Also catches errors, if the opacity value is random
  else {
    post.style.opacity = 0;
    console.log("Turned Invisible");
  }
}



// InstaStory
document.getElementsByClassName("activatebutton").addEventListener("click", showSlides);
var slideIndex = 0;

function showSlides() {
  console.log("showslide running");
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Makes the previous picture invisible
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // The slide number
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  // Makes a slide visible
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1000); // Change image every 4 seconds
}
