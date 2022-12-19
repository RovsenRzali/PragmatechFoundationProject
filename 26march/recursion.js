
let i = 1;

function Dosomething() {
    console.log("Rescursion")
    i++
    if(i<5) {
        Dosomething()
    }
}


Dosomething()