function oddOrEven(num) {
  if (num % 2 == 0) {
    return "Even number"
  } else {
    return "Odd number"
  }
}

// ternary operators
function oddOrEven2(num){
    return (num%2 == 0 ? "Even number" : "Odd number")
} 

console.log(oddOrEven2(51))