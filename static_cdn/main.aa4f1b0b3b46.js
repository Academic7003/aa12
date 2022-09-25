let buttons = document.querySelectorAll(".buttons");
let left = document.querySelector("#leftjs");
let right = document.querySelector("#rightjs");
let js1s = document.querySelectorAll(".js1");
let dns = document.querySelectorAll(".dns");
let body = document.querySelector(".body");
let i;
let j = 0;
let itimes = document.querySelector("#itimes");
let ihamburger = document.querySelector("#ihamburger");
let hamburgerjs = document.querySelector("#hamburgerjs");
let langs = document.querySelectorAll(".lang");
let earth = document.querySelector("#earth");
let langsjs = document.querySelector("#langsjs");
let leftArr = document.querySelector(".leftArr");
let rightArr = document.querySelector(".rightArr");
let pgs = document.querySelectorAll(".pg");

document.addEventListener("DOMContentLoaded", function () {
  langsjs.style.display = "none";
  pgs[0].style.display = "flex";
});
leftArr.addEventListener('click', function(){
  if(pgs[1].style.display == 'flex'){
    leftArr.style.display = 'none';
    pgs[0].style.display = 'flex';
    pgs[1].style.display = 'flex';
    pgs[2].style.display = 'flex';
    pgs[3].style.display = 'none';
    rightArr.style.display = 'flex';
  }
  else if(pgs[2].style.display == 'flex'){
    leftArr.style.display = 'flex';
    pgs[1].style.display = 'flex';
    pgs[2].style.display = 'flex';
    pgs[3].style.display = 'flex';
    pgs[4].style.display = 'none';
  }
  else if(pgs[3].style.display == 'flex'){
    leftArr.style.display = 'flex';
    pgs[2].style.display = 'flex';
    pgs[3].style.display = 'flex';
    pgs[4].style.display = 'flex';
    pgs[5].style.display = 'none';
  }
  else if(pgs[4].style.display == 'flex'){
    leftArr.style.display = 'flex';
    pgs[3].style.display = 'flex';
    pgs[4].style.display = 'flex';
    pgs[5].style.display = 'flex';
    pgs[6].style.display = 'none';
  }
  else if(pgs[5].style.display == 'flex'){
    leftArr.style.display = 'flex';
    pgs[4].style.display = 'flex';
    pgs[5].style.display = 'flex';
    pgs[6].style.display = 'flex';
    pgs[7].style.display = 'none';
  }
  else if(pgs[6].style.display == 'flex'){
    leftArr.style.display = 'flex';
    pgs[5].style.display = 'flex';
    pgs[6].style.display = 'flex';
    pgs[7].style.display = 'flex';
    pgs[8].style.display = 'none';
  }
  else if(pgs[7].style.display == 'flex'){
    leftArr.style.display = 'flex';
    pgs[6].style.display = 'flex';
    pgs[7].style.display = 'flex';
    pgs[8].style.display = 'flex';
    pgs[9].style.display = 'none';
    rightArr.style.display = 'flex';
  }
})
rightArr.addEventListener("click", function () {
  if (pgs[0].style.display == 'flex'){
    pgs[0].style.display = 'none';
    leftArr.style.display = 'flex';
    pgs[1].style.display = 'flex';
    pgs[2].style.display = 'flex';
    pgs[3].style.display = 'flex';
  }
  else if (pgs[1].style.display == 'flex'){
    pgs[1].style.display = 'none';
    pgs[2].style.display = 'flex';
    pgs[3].style.display = 'flex';
    pgs[4].style.display = 'flex';
  }
  else if (pgs[2].style.display == 'flex'){
    pgs[2].style.display = 'none';
    pgs[3].style.display = 'flex';
    pgs[4].style.display = 'flex';
    pgs[5].style.display = 'flex';
  }
  else if (pgs[3].style.display == 'flex'){
    pgs[3].style.display = 'none';
    pgs[4].style.display = 'flex';
    pgs[5].style.display = 'flex';
    pgs[6].style.display = 'flex';
  }
  else if (pgs[4].style.display == 'flex'){
    pgs[4].style.display = 'none';
    pgs[5].style.display = 'flex';
    pgs[6].style.display = 'flex';
    pgs[7].style.display = 'flex';
  }
  else if (pgs[5].style.display == 'flex'){
    pgs[5].style.display = 'none';
    pgs[6].style.display = 'flex';
    pgs[7].style.display = 'flex';
    pgs[8].style.display = 'flex';
  }
  else if (pgs[6].style.display == 'flex'){
    rightArr.style.display = 'none';
    pgs[6].style.display = 'none';
    pgs[7].style.display = 'flex';
    pgs[8].style.display = 'flex';
    pgs[9].style.display = 'flex';
  }
 
});

document.addEventListener("DOMContentLoaded", function () {
  langsjs.style.display = "none";
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

document.addEventListener("DOMContentLoaded", function () {
  ihamburger.style.display = "block";
  itimes.style.display = "none";
});
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
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.addEventListener("DOMContentLoaded", function () {
      for (i = 0; i < js1s.length; i++) {
        if (buttons[0].classList.contains("active")) {
          if (i == 0) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        } else if (buttons[1].classList.contains("active")) {
          if (i == 10) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      }
    });
    buttons[0].addEventListener("click", function () {
      for (let i = 0; i < js1s.length; i++) {
        if (i == 0) {
          js1s[i].style.display = "block";
        } else {
          js1s[i].style.display = "none";
        }
      }
      right.style.display = "flex";
      left.style.display = "none";
    });
    buttons[1].addEventListener("click", function () {
      for (let i = 0; i < js1s.length; i++) {
        if (i == 10) {
          js1s[i].style.display = "block";
        } else {
          js1s[i].style.display = "none";
        }
      }
      right.style.display = "flex";
      left.style.display = "none";
    });
    right.addEventListener("click", function () {
      if (js1s[0].style.display === "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 1) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        left.style.display = "flex";
      } else if (js1s[1].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 2) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[2].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 3) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[3].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 4) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        // right.style.display = "none";
      } else if (js1s[4].style.display == "block") {
        left.style.display = "flex";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 5) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[5].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 6) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[6].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 7) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[7].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 8) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[8].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 9) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        right.style.display = "none";
      } else if (js1s[10].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 11) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        left.style.display = "flex";
      } else if (js1s[11].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 12) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[12].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 13) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[13].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 14) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[14].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 15) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[15].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 16) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[16].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 17) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[17].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 18) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[18].style.display == "block") {
        // right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if (i != 19) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        right.style.display = "none";
      }
    });
    left.addEventListener("click", function () {
      if (js1s[1].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 0) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
        left.style.display = "none";
      } else if (js1s[2].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 1) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[3].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 2) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[4].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 3) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[5].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 4) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[6].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 5) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[7].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 6) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[8].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 7) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[9].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 8) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
        right.style.display = "flex";
      } else if (js1s[10].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 8) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
        right.style.display = "flex";
      } else if (js1s[11].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 10) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
        left.style.display = "none";
      } else if (js1s[12].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 11) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[13].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 12) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[14].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 13) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[15].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 14) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[16].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 15) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[17].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 16) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[18].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 17) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      } else if (js1s[19].style.display == "block") {
        for (i = 0; i < js1s.length; i++) {
          if (i == 18) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
        right.style.display = "flex";
      }
    });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      for (i = 0; i < js1s.length; i++) {
        if (buttons[0].classList.contains("active")) {
          if (i == 0 || i == 1) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        } else if (buttons[1].classList.contains("active")) {
          if (i != 10 && i != 11) {
            js1s[i].style.display = "block";
          } else {
            js1s[i].style.display = "none";
          }
        }
      }
    });

    buttons[0].addEventListener("click", function () {
      for (let i = 0; i < js1s.length; i++) {
        if (i < 2) {
          js1s[i].style.display = "block";
        } else {
          js1s[i].style.display = "none";
        }
      }
      right.style.display = "flex";
      left.style.display = "none";
    });
    buttons[1].addEventListener("click", function () {
      for (let i = 0; i < js1s.length; i++) {
        if (i > 9 && i < 12) {
          js1s[i].style.display = "block";
        } else {
          js1s[i].style.display = "none";
        }
      }
      right.style.display = "flex";
      left.style.display = "none";
    });
    right.addEventListener("click", function () {
      if (js1s[0].style.display === "block") {
        for (let i = 0; i < js1s.length; i++) {
          if (i != 2 && i != 3) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        left.style.display = "flex";
      } else if (js1s[2].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 4) & (i != 5)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[4].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 6) & (i != 7)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[6].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 8) & (i != 9)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        right.style.display = "none";
      } else if (js1s[10].style.display == "block") {
        left.style.display = "flex";
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 12) & (i != 13)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[12].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 14) & (i != 15)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[14].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 16) & (i != 17)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[16].style.display == "block") {
        right.style.display = "none";
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 18) & (i != 19)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      }
    });

    left.addEventListener("click", function () {
      if (js1s[0].style.display === "block") {
        //   for (let i = 0; i < js1s.length; i++) {
        //     if (i != 2 && i != 3) {
        //       js1s[i].style.display = "none";
        //     } else {
        //       js1s[i].style.display = "block";
        //     }
        //   }
      } else if (js1s[2].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 0) & (i != 1)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        left.style.display = "none";
        right.style.display = "flex";
      } else if (js1s[4].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 2) & (i != 3)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[6].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 4) & (i != 5)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[8].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 6) & (i != 7)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        right.style.display = "flex";
      } else if (js1s[12].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 10) & (i != 11)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        left.style.display = "none";
      } else if (js1s[14].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 12) & (i != 13)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[16].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 14) & (i != 15)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
      } else if (js1s[18].style.display == "block") {
        for (let i = 0; i < js1s.length; i++) {
          if ((i != 14) & (i != 15)) {
            js1s[i].style.display = "none";
          } else {
            js1s[i].style.display = "block";
          }
        }
        right.style.display = "flex";
      }
    });
  }
}

var x = window.matchMedia("(max-width: 650px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// document.addEventListener("DOMContentLoaded", function () {
//   for (i = 0; i < js1s.length; i++) {
//     if (buttons[0].classList.contains("active")) {
//       if (i == 0 || i == 1) {
//         js1s[i].style.display = "block";
//       } else {
//         js1s[i].style.display = "none";
//       }
//     } else if (buttons[1].classList.contains("active")) {
//       if (i != 10 && i != 11) {
//         js1s[i].style.display = "block";
//       } else {
//         js1s[i].style.display = "none";
//       }
//     }
//   }
// });

// buttons[0].addEventListener("click", function () {
//   for (let i = 0; i < js1s.length; i++) {
//     if (i < 2) {
//       js1s[i].style.display = "block";
//     } else {
//       js1s[i].style.display = "none";
//     }
//   }
//   right.style.display = 'flex';
//   left.style.display  = 'none';
// });
// buttons[1].addEventListener("click", function () {
//   for (let i = 0; i < js1s.length; i++) {
//     if (i > 9 && i < 12) {
//       js1s[i].style.display = "block";
//     } else {
//       js1s[i].style.display = "none";
//     }
//   }
//   right.style.display = 'flex';
//   left.style.display  = 'none';
// });
// right.addEventListener("click", function () {
//   if (js1s[0].style.display === "block") {
//     for (let i = 0; i < js1s.length; i++) {
//       if (i != 2 && i != 3) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//     left.style.display = 'flex';
//   } else if (js1s[2].style.display == "block") {
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 4) & (i != 5)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//   } else if (js1s[4].style.display == "block") {
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 6) & (i != 7)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//   }else if (js1s[6].style.display == "block") {
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 8) & (i != 9)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//     right.style.display = 'none';
//   }else if (js1s[10].style.display == "block") {
//     left.style.display = 'flex';
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 12) & (i != 13)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//   }
//   else if (js1s[12].style.display == "block") {
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 14) & (i != 15)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//   }
//   else if (js1s[14].style.display == "block") {
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 16) & (i != 17)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//   }
//   else if (js1s[16].style.display == "block") {
//     right.style.display = 'none';
//     for (let i = 0; i < js1s.length; i++) {
//       if ((i != 18) & (i != 19)) {
//         js1s[i].style.display = "none";
//       } else {
//         js1s[i].style.display = "block";
//       }
//     }
//   }

// });

// left.addEventListener("click", function () {
//     if (js1s[0].style.display === "block") {

//     //   for (let i = 0; i < js1s.length; i++) {
//     //     if (i != 2 && i != 3) {
//     //       js1s[i].style.display = "none";
//     //     } else {
//     //       js1s[i].style.display = "block";
//     //     }
//     //   }

//     } else if (js1s[2].style.display == "block") {
//       for (let i = 0; i < js1s.length; i++) {
//         if ((i != 0) & (i != 1)) {
//           js1s[i].style.display = "none";
//         } else {
//           js1s[i].style.display = "block";
//         }
//       }
//       left.style.display = 'none';
//       right.style.display = 'flex';
//     } else if (js1s[4].style.display == "block") {
//       for (let i = 0; i < js1s.length; i++) {
//         if ((i != 2) & (i != 3)) {
//           js1s[i].style.display = "none";
//         } else {
//           js1s[i].style.display = "block";
//         }
//       }
//     }else if (js1s[6].style.display == "block") {
//       for (let i = 0; i < js1s.length; i++) {
//         if ((i != 4) & (i != 5)) {
//           js1s[i].style.display = "none";
//         } else {
//           js1s[i].style.display = "block";
//         }
//       }

//     }
//     else if (js1s[8].style.display == "block") {
//         for (let i = 0; i < js1s.length; i++) {
//           if ((i != 6) & (i != 7)) {
//             js1s[i].style.display = "none";
//           } else {
//             js1s[i].style.display = "block";
//           }
//         }
//        right.style.display = 'flex';
//       }
//       else if (js1s[12].style.display == "block") {
//         for (let i = 0; i < js1s.length; i++) {
//           if ((i != 10) & (i != 11)) {
//             js1s[i].style.display = "none";
//           } else {
//             js1s[i].style.display = "block";
//           }
//         }
//        left.style.display = 'none';

//       }
//       else if (js1s[14].style.display == "block") {
//         for (let i = 0; i < js1s.length; i++) {
//           if ((i != 12) & (i != 13)) {
//             js1s[i].style.display = "none";
//           } else {
//             js1s[i].style.display = "block";
//           }
//         }

//       }
//       else if (js1s[16].style.display == "block") {
//         for (let i = 0; i < js1s.length; i++) {
//           if ((i != 14) & (i != 15)) {
//             js1s[i].style.display = "none";
//           } else {
//             js1s[i].style.display = "block";
//           }
//         }

//       }
//       else if (js1s[18].style.display == "block") {
//         for (let i = 0; i < js1s.length; i++) {
//           if ((i != 14) & (i != 15)) {
//             js1s[i].style.display = "none";
//           } else {
//             js1s[i].style.display = "block";
//           }
//         }
//         right.style.display = 'flex';
//       }
//   });
