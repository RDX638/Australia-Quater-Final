let className = "inverted";
let scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector("header").style.background = "rgba(0, 0, 0, 0.4)";

  } else {
    document.querySelector("header").style.background ="";
  }
};