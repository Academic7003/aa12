let itimes = document.querySelector("#itimes");
let ihamburger = document.querySelector("#ihamburger");
let hamburgerjs = document.querySelector("#hamburgerjs");
let langs = document.querySelectorAll(".lang");
let earth = document.querySelector("#earth");
let langsjs = document.querySelector("#langsjs");

document.addEventListener("DOMContentLoaded", function () {
  langsjs.style.display = "none";
  ihamburger.style.display = "block";
  itimes.style.display = "none";
  // pgs[0].style.display = "flex";
});

earth.addEventListener("click", function () {
  if (langsjs.style.display == "none") {
    langsjs.style.display = "block";
  } else if (langsjs.style.display == "block") {
    langsjs.style.display = "none";
  }
});

for (i = 0; i < langs.length; i++) {
  langs[i].addEventListener("click", function () {
    let current = document.querySelector(".activeLang");
    current.className = current.className.replace(" activeLang", "");
    this.className += " activeLang";
    langsjs.style.display = "none";
  });
}

ihamburger.addEventListener("click", function () {
  if (ihamburger.style.display == "block") {
    ihamburger.style.display = "none";
    itimes.style.display = "block";
    hamburgerjs.style.left = "0px";
  }
});
itimes.addEventListener("click", function () {
  if (itimes.style.display == "block") {
    itimes.style.display = "none";
    ihamburger.style.display = "block";
    hamburgerjs.style.left = "-100%";
  }
});
