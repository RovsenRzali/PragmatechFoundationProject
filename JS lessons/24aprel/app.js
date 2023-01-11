const slides = document.querySelector(".slides");

let moveX = 0;

function goRight() {
  // moveX -= 1200;
  // slides.style.transform = `translateX(${moveX}px)`;
  if (moveX <= -4 * 1200) {
    moveX = 0;
    slides.style.transform = `translateX(${moveX}px)`;
  } else {
    moveX -= 1200;
    slides.style.transform = `translateX(${moveX}px)`;
  }
}

function goLeft() {
  //   moveX += 1200;
  //   slides.style.transform = `translateX(${moveX}px)`;
  if (moveX >= 0) {
    moveX = -4 * 1200;
    slides.style.transform = `translateX(${moveX}px)`;
  } else {
    moveX += 1200;
    slides.style.transform = `translateX(${moveX}px)`;
  }
}
