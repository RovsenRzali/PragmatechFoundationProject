// Element CRUD
// Element selection and travering
// event handling
// qeurySelectir

images = ["01.png", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.png"];

const slides = document.querySelector(".slides");
const slider = document.querySelector('.slider')

// let slideElementWidth = 1200;
let sliderWidth = 1400;
let sliderHeight = 800;

let slideElementWidth = sliderWidth;
let slideElementCount = images.length;

slider.style.width = `${sliderWidth}px`
slider.style.height = `${sliderHeight}px`
slides.style.width = `calc(${slideElementWidth}px * ${slideElementCount})`;


for (let img of images) {
  let slide = `
  <div class="slide" style = "width:${sliderWidth}px">
  <img src="${img}" alt="#">
  </div>`;
  slides.innerHTML += slide; 
}

// const slide1 = document.querySelectorAll('.slide')
// slide1.style.width = `${sliderWidth}px`;

let moveX = 0;

function goRight() {
  // moveX -= 1200;
  // slides.style.transform = `translateX(${moveX}px)`;
  if (moveX <= -(slideElementCount - 1) * slideElementWidth) {
    moveX = 0;
    slides.style.transform = `translateX(${moveX}px)`;
  } else {
    moveX -= slideElementWidth;
    slides.style.transform = `translateX(${moveX}px)`;
  }
}

function goLeft() {
  //   moveX += 1200;
  //   slides.style.transform = `translateX(${moveX}px)`;
  if (moveX >= 0) {
    moveX = -(slideElementCount - 1) * slideElementWidth;
    slides.style.transform = `translateX(${moveX}px)`;
  } else {
    moveX += slideElementWidth;
    slides.style.transform = `translateX(${moveX}px)`;
  }
}

