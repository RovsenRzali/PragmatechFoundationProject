arr = [23, 45, 12, 67, 34, 89, 245];

// cüt ədədləri göstər.
// tək ədədləri göstər.
// 3-ə bölünənləri göstər.
// 20-dən böyük olanları göstər.

let odd = "";
let even = "",
  uceBolunen = "",
  iyirmibBoyuk = "";

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    odd += arr[i] + " ";
  } else if (arr[i] % 2 != 0) {
    even += arr[i] + " ";
  } else if (arr[i] % 3 == 0) {
    uceBolunen += arr[i] + " ";
  } else if (arr[i] > 20) {
    iyirmibBoyuk += arr[i] + " ";
  }
}

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 3 == 0) {
    uceBolunen += arr[i] + " ";
  } else if (arr[i] > 20) {
    iyirmibBoyuk += arr[i] + " ";
  }
}

//console.log(`odd: ${odd}`, `even: ${even}`);
//console.log(`3ebolunen: ${uceBolunen}`, `IyirimidenBoyuk: ${iyirmibBoyuk}`);

function evenNumber(_arr) {
  let evenNumbers = [];
  for (let item in _arr) {
    if (_arr[item] % 2 == 0) {
      evenNumbers.push(_arr[item]);
    }
  }
  return evenNumbers;
}

function oddNumber(_arr) {
  let oddNumbers = [];
  for (let item in _arr) {
    if (_arr[item] % 2 != 0) {
      oddNumbers.push(_arr[item]);
    }
  }
  return oddNumbers;
}

// console.log(oddNumber(arr));

function threeDecade(_arr) {
  let threeNumbers = [];
  for (let item in _arr) {
    if (_arr[item] % 3 == 0) {
      threeNumbers.push(_arr[item]);
    }
  }
  return threeNumbers;
}

// console.log(threeDecade(arr));

function twentyBig(_arr) {
    let twentyBigs = [];
    for (let item in _arr) {
      if (_arr[item] > 20) {
        twentyBigs.push(_arr[item]);
      }
    }
    return twentyBigs;
  }
  
// console.log(twentyBig(arr));

// Bu yazıdığımız kodları optimalaşdıraq

// yuxardakı kodları bu cür optimalasdıra bilirik.
function cutEded(_arr) {
    return _arr % 2 == 0
}

function tekEded(_arr) {
    return _arr % 2 != 0
}

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

  function filter (_arr,func) {
    let result = [];
    for (let item in _arr) {
      if (func(_arr[item])) {
        result.push(_arr[item]);
      }
    }
    return result;
  }

  console.log(filter(arr,cutEded))
