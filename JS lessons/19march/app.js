let a = 45;


//console.log(Boolean(a=23))
// scope da let-in yazılması ilə yazılmaması rasında böyük bir fərq var.

if(a=4) {
    let  a = 67;
    console.log(a)
} else{
    let a = 12;
    console.log(a)
}

console.log(a)

if(a=4) {
    a = 67;
    console.log(a)
} else{
    let a = 12;
    console.log(a)
}

console.log(a)

// funsiyalarda da a-nın qabağına let yazmaqla yazmamaq arasında fərq var.
function Foo() {
     a = 45;
    console.log(a)
}

Foo()   
console.log(a)

function Foo2() {
    a = 56;
}

console.log(a)
Foo2()   
console.log(a)

// 01:39 da qaldım.

