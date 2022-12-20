// (function one() {
//   for (i = 0; i < 4; i++) {
//     let a = 5;
//     console.log(a);
//   }
// })();

let i = 0
function two() {
  console.log(i);
  i++;
  if (i < 7) {
    two();
  }
}

//two();

// while(i<9){
//     console.log(i)
//     i++
// }

/* 
 2 növ data struktur var:
   - indexvalue
   - keyvalue
*/
// array lər indexvalue 
// birdə keyvalue 

let obj = {
    ad:'Rovshan',
    soyad:'Rzali',
    yas: 28

}

for (let key in obj) {
    console.log(key, obj[key])
}




