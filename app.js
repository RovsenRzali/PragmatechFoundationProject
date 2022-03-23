// var string = "This is the midday show with Cheryl Waters";
// var urlFriendly = "-";

// for (var i=0; i<string.length; i++) {
//   if (string[i] === " ") {
//     urlFriendly += "+";
//   }else{
//     urlFriendly += string[i];
//   }
// }
// console.log(urlFriendly);

const username = "This is the mid day show with Cheryl Waters"
const urlFriendly = username.replace(/ /g, "8")

console.log(urlFriendly)