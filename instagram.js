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

var slideIndex = 0;
var kontakt = true;


function showSlides() {
  console.log("showslide running");

  var i;
  var slides = document.getElementsByClassName("mySlides");

    console.log("Inside while loop");
    // Makes the previous picture invisible
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Stops the while loop
    // if (slideIndex == 3) {
    //   console.log("SlideIndex = " + slideIndex);
    //   kontakt = false;
    //   console.log("FALSE");
    // }

    // The slide number
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";



    // Makes a slide visible
    setTimeout(showSlides, 1000); // Change image every 4 seconds

  // while (kontakt == true)
}
