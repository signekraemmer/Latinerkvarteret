console.log("instagram.js loaded...");

document.getElementById("activatepost").addEventListener("click", postShow);
console.log("After the click event");

function postShow() {
  console.log("postShow() running");
  var post = document.getElementById("post");

  if (post.style.display == "none") {
    post.style.display = "block";
    console.log("Turned Visible");
  }

  // Also catches errors, if the opacity value is random
  else {
    post.style.display = "none";
    console.log("Turned Invisible");
  }
}

document.getElementById("post").addEventListener("click", postHide);

function postHide() {
  var post = document.getElementById("post");
  post.style.display = "none";

}





// InstaStory
var activatebtn = document.getElementsByClassName("activatebutton");
activatebtn[0].addEventListener("click", showSlides);

// document.getElementById("igstorybtn").addEventListener("click", showSlides);

var slideIndex = 0;


function showSlides() {
  console.log("showSlide() running");

  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Makes the previous picture invisible
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // The slide number
  slideIndex++;

  slides[slideIndex - 1].style.display = "block";

  // Makes a slide visible
  var timer = setTimeout(showSlides, 1000); // Change image every 4 seconds

debugger;
  // Stops the while loop
  if (slideIndex == slides.length) {
    clearTimeout(timer);
    slideIndex = 0;
    // The last frame get deleted instantly, and we need to figure out a way to keep it for x seconds
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  }
}
