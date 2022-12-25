strings = [
  "Boeingdream",
  "AirbusCompany",
  "JetEngine",
  "EmbraierE190",
  "CessnaBombardier",
];

// Tesadufi bir adi cap et +
// Herf en cox olan soz+
// sozleri tersden yazdirsin+
// array icerisndeki elementləri tərs sırayla yazdırsın
// nece boyuk herf var
// qosa herfleri cap etsin
// Ancaq bas herfleri versin

function RandomElement() {
  let random = Math.floor(Math.random() * 10);
  let number = "";
  if (random > strings.length) {
    number = "0";
  } else {
    number = Math.floor(Math.random() * 10);
  }
  return number;
}

function RandomElement(_arr) {
  let random = Math.floor(Math.random() * _arr.length);
  return _arr[random];
}

//console.log(RandomElement(strings))

// function enUzunSoz(_arr) {
//     sozuzunluqlari = [11,6,3,8,6]
//     console.log(Math.max(...sozuzunluqlari))
// }

function enUzunSoz(_arr) {
  sozuzunluqlari = [];
  for (let soz in _arr) {
    sozuzunluqlari.push(_arr[soz].length);
  }
  console.log(sozuzunluqlari);
  console.log(Math.max(...sozuzunluqlari));
  let bigWord = Math.max(...sozuzunluqlari);
  let findindex = sozuzunluqlari.indexOf(bigWord);
  console.log(_arr[findindex]);

  //muellimin yazdigi variant
  for (let index in _arr) {
    if (_arr[index].length == bigWord) {
      console.log(_arr[index]);
    }
  }
}

//enUzunSoz(strings)

function reverseArray(_arr) {
  let reverseArray = [];
  for (i = _arr.length - 1; i >= 0; i--) {
    reverseArray.push(_arr[i]);
  }
  console.log(reverseArray);
}

//revereArray (strings)
//rxeverseArray ("Rovshan")

function reverseWord(_word) {
  let reverseWord = "";
  for (i = _word.length - 1; i >= 0; i--) {
    reverseWord += _word[i] + ",";
  }
  console.log(reverseWord);
}

//reverseWord("Elnur")

// for (let i in strings) {
//   reverseWord(strings[i])
//  }

// Böyük hərflərin sayın tapmaq
// function isCapitalLetter(_letter) {
//   console.group(_letter.toUpperCase())
// }

// function isCapitalLetter(_letter) {
//   if (_letter == _letter.toUpperCase()) {
//     console.log("It is big letter");
//   } else {
//     console.log("It is little letter");
//   }
// }

// isCapitalLetter("A");

function isCapitalLetter(_letter) {
  return _letter == _letter.toUpperCase()
}

//console.log(isCapitalLetter("s"))

str = "RovshAnRzaliBBBBB"
let bigLetter = 0

// for (let i in str) {
//   if (isCapitalLetter(str[i])) {
//     //bigLetter += 1
//     bigLetter++
//   }
// }

// console.log(bigLetter)

// indi bunu strig dəki bütün sözlərə tətbiq edək.

for (let index in strings) {

  
for (let i in strings[index]) {
  if (isCapitalLetter(strings[index][i])) {
    //bigLetter += 1
    bigLetter++
  }
}

}

console.log(bigLetter)

// 02:50 də qaldım.
