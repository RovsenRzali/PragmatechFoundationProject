let result = -1;

// if içərisindəki nəticəni boolean nəticəyə çevirməyə çalış.
// Əgər if-in içərisinə null yazsaq, null-un qarşılığı false olacq və 2ci hissə icra olunacaq
if(result < 50) {
    if (result < 0) {
        console.log("Value can not be small from zero")
    } else {
        console.log("you failed")

    }
} else {
    console.log('Good job')
}

console.log("0: " + Boolean(0))
console.log("1: " + Boolean(1))
console.log("NaN: " + Boolean(NaN))
console.log("null: " + Boolean(null))
console.log("undefined: " + Boolean(undefined))
console.log("Infinity: " + Boolean(Infinity))
