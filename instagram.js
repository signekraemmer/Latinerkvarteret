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
