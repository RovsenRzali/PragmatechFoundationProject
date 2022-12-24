strings = ["Boeingdream", "AirbusCompany", "Jet", "Embraier", "Cessnabombardier"];

// Tesadufi bir adi cap et +
// Herf en cox olan soz
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
  console.log(sozuzunluqlari)
  console.log(Math.max(...sozuzunluqlari))
  let bigWord = Math.max(...sozuzunluqlari)
  let index = sozuzunluqlari.indexOf(bigWord)
  console.log(_arr[index])
}

enUzunSoz(strings)

// 01.54 də qaldim