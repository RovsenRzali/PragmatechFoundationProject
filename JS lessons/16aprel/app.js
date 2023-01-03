// Html elemenleri (CRUD)
// C --creat
// R --read
// U --update
// D --delete

class Human {
  constructor() {
    this.name = "Object";
  }
}

const obj = new Human();

const arr = new Array();
let num = 5;
let bl = new Object();
let elem = document.querySelector("h1");

// Creat
let paragraph = document.createElement("p");
// Read
document.body.appendChild(paragraph);
// Update
paragraph.innerHTML = "Hello";
// Delete
document.body.removeChild(paragraph);

// for (i = 0; i < 100; i++) {
//   let paragraph2 = document.createElement("p");
//   document.body.appendChild(paragraph2);
//   paragraph2.innerHTML = `${i} time`;
//   paragraph2.style.color = `#${i}a2`;
// }

// 1 outout dıir
// 2 lazim olan input lari çıxarmaq
// box-container
// div elementin yaratmaq
// div elementinə class vermək
// box
// 30 eded box divi yaratmaq
// box divini box container divinin icinə əlavə etmək
// 3 sütun mentiqini tətbiq etmək
//
// 3 input dan output-a gedən yolu tapmalıyam.

function creatGrid(elementCount, columnCount, gap) {
  let boxContainer = document.createElement("div");
  boxContainer.className = "box-container";
  boxContainer.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
  boxContainer.style.gap = `${gap}px`;

  for (i = 0; i <= elementCount; i++) {
    let ranR = Math.floor(Math.random() * 255);
    let ranG = Math.floor(Math.random() * 255);
    let ranB = Math.floor(Math.random() * 255);
    let box = document.createElement("div");
    boxContainer.appendChild(box);
    box.className = "box";
    box.style.background = `rgb(${ranR},${ranG},${ranB})`
    box.style.width = "200px";
    box.style.height = "200px";
  }
  document.body.appendChild(boxContainer);
}

creatGrid(100, 6, 20);
