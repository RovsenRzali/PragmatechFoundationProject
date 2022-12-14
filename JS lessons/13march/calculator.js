let x = false;
let y = true;
let operator = "+";

if(x*1===x && y*1===y) {
    if(operator == "+") {
        console.log(`${x} + ${y} = ${x+y}`)
    } else if(operator == "-") {
        console.log(`${x} - ${y} = ${x-y}`)
    } else if(operator == "*") {
        console.log(`${x} * ${y} = ${x*y}`)
    } else if(operator == "/") {
        console.log(`${x} / ${y} = ${x/y}`)
    } else {
        console.log("Daxil etdiyiniz əməliyyyat riyazi operator deil.")
    }
} else {
    console.log("Daxil etdiyiniz dəyərlərdən biri və ya hər ikizi ədəd deil.")
}

