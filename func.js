// function declaration
// function one() {

// }
// one()

// function assigment
// let two = function () {
// anonim function
// bu funksiyani yalniz assigment edəndən sonra cagirmaq olar.
// Əgər yuxarida cagirsaq error verəcək.
// }
// two()

// arrow function
// let three = () => {

// }

// Deklarativ üsülla yazilmis funksiya
function calculateSum() {
  let a = 5;
  let b = 6;
  let c = a + b;
  console.log(c);
}

calculateSum();

function calculateSubtraction() {
  let a = 5;
  let b = 6;
  let c = a - b;
  console.log(c);
}

calculateSubtraction();

function calculateMultiplication() {
  let a = 5;
  let b = 6;
  let c = a * b;
  console.log(c);
}

calculateMultiplication();

function calculateDivision() {
  let a = 5;
  let b = 6;
  let c = a / b;
  console.log(c);
}

// imperativ üsüla yazılan funksiya
let a = 5;
let b = 7;
let operation = "";

if (operation == "+") {
  calculateSum();
} else if (operation == "-") {
  calculateSubtraction();
} else if (operation == "*") {
  calculateMultiplication();
} else if (operation == "/") {
  calculateDivision();
}
