strings = [
  "Boeingdream",
  "AirbusCompany",
  "JeetEngine",
  "EmbraierE190",
  "CessnaBombardier",
];

let reverseStrings = [];
for (i = strings.length - 1; i >= 0; i--) {
  reverseStrings.push(strings[i]);
}

//  console.table(reverseStrings)

array = ["ay", "leptop"];

function reverseWord(_arr) {
  let reverseWord = "";
  for (i = _arr.length - 1; i >= 0; i--) {
    reverseWord += _arr[i] + "";
  }
  return reverseWord;
}

// for (let i in reverseStrings) {
//   console.log(reverseWord(reverseStrings[i]));
// }

function isCapitalLetter(_arr) {
  return _arr == _arr.toUpperCase();
}

let countBigLetter = 0;
for (let index in strings) {
  for (let i in strings[index])
    if (isCapitalLetter(strings[index][i])) {
      countBigLetter++;
    }
}
//console.log(countBigLetter)



function pairLetter(_arr) {
  let cutherfler = [];
  for (let index in _arr) {
    for (i = 0; i < _arr[index].length; i++) {
        if (_arr[index][i] === _arr[index][i + 1]) {
        cutherfler.push(_arr[index][i]);
      }
    }
}
 
  console.log(cutherfler );
}

//pairLetter(strings);

function firstLetter(_arr) {
    let basherfler = [];
    for (let index in _arr) {
      for (i = 0; i < _arr.length-(_arr.length-1); i++) {
          basherfler.push(_arr[index][0]);
      }
  }
   
    console.log(basherfler);
  }
  
  firstLetter(strings);
