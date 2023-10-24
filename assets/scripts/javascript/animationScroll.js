var reveals = document.querySelectorAll(".reveal");
function reveal() {
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 30;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

var revealesRight = document.querySelectorAll(".reveal-right");
function revealesByRight() {
    for (var i = 0; i < revealesRight.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealesRight[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        revealesRight[i].classList.add("active");
      } else {
        revealesRight[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", revealesByRight);