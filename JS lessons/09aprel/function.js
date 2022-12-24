
// app.js-dəki funksiyalari dahada optimalaşdıraq.
arr = [23, 45, 12, 67, 34, 89, 245];

// function cutEded(_arr) {
//     return _arr % 2 == 0
// }

const cutEded = _arr => _arr % 2 ==0


// function tekEded(_arr) {
//     return _arr % 2 != 0
// }

const tekEded = _arr => _arr % 2 != 0


function evenNumber2(_arr) {
    let evenNumbers = [];
    for (let item in _arr) {
      if (evenNumber(_arr[item])) {
        evenNumbers.push(_arr[item]);
      }
    }
    return evenNumbers;
  }

  //console.log(evenNumber2(arr))

  function numberFilter (_arr,func) {
    let result = [];
    for (let item in _arr) {
      if (func(_arr[item])) {
        result.push(_arr[item]);
      }
    }
    return result;
  }
// artiq bu lazim deil
  //console.log(filter(arr,cutEded))

  console.log(numberFilter(arr,_arr => _arr % 5 == 0))

  console.log(numberFilter(arr,_arr => _arr >40 && _arr<100))