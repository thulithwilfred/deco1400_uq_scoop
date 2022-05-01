/* Mobile Animations */
var list = document.getElementById("navMenu-list");
list.style.maxHeight = "0px";

function shownav() {
    if (list.style.maxHeight == "0px") {
        list.style.maxHeight = "150px"
    } else {
        list.style.maxHeight = "0px"
    }
}

/* The following script is implemented for the slide-show on the Home Page
 * The JS has been referenced from a design sample in W3-Schools
 * as per: https://www.w3schools.com/howto/howto_js_slideshow.asp
 */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //Recursive call to update slide (5000ms -> 5s)
  setTimeout(showSlides, 5000);
}