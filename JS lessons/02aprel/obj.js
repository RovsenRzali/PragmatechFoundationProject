/*obyektin icinde olan _name property adlanır
  funksiya ise metod adlanir
  */
let obj = {
  _name: "Rovshan",
  One: function () {
    console.log("Apply")
  },
};

//obj.One()

let number = [1,23,45,67,8,9,65,43,21]

number.sort(function(x,y){
    return x- y
})
console.log(number)


