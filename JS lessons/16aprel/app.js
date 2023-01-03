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

// for (i = 0; i < 30; i++) {
//     let division = document.createElement("div");
//     document.body.appendChild(division);
//     division.innerHTML = `${i} time`;
//     division.style.width = '200px'
//     division.style.height = '200px'
//     division.style.border = ' 1px solid'
//     division.style.color = `#${i}a2`;
//   }

//   division.style.display = 'flex-grow'


