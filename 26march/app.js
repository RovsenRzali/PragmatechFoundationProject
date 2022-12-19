// function declaration
function one() {
  let x, y, z;
  x = 5;
  y = 6;
  z = x + y;
  console.log(z);
}
// function execution
one();

// funksiyanin adi icra etdiyi işə uyğun olmalıdı. 
// funksiya  "single responsibiity" olmalidir
// funksiya reuseable olmalidir.

function  oneReuseable(x,y) {
    z = x + y
    console.log(z)
}

oneReuseable(7,8)
oneReuseable(9,10)


//function scope
function PrintFullName(_name, _surname) {
    console.log(`${_name}-${_surname}`)
}

PrintFullName('Rovshan', "Rzali")

function totalSalary() {
    return  tSalary = 6000
}

function numberStaff() {
    return nStaff = 20
}

function averageSalary() {
    let aSalary = totalSalary() / numberStaff()
    console.log(aSalary)
}

averageSalary()

// block scope
if(true) {
    var tMaas = 900
}

console.log(tMaas)
