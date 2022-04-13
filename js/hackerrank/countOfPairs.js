 /*arr in icindeki cut edelerin sayini hesablayan funnksiya yaz */
arr = [1,2,3,1,4,6,4,3,2,1,1,6]

function oneNumberCount(_arr){
  birEdedi = []
  for (let index in _arr){
    if (_arr[index] == 1) {
     birEdedi.push(_arr[index])
    }
  }
  return birEdedi
}

function twoNumberCount(_arr){
  ikiEdedi = []
  for (let index in _arr){
    if (_arr[index] == 2) {
     ikiEdedi.push(_arr[index])
    }
  }
  return ikiEdedi
}

function threeNumberCount(_arr){
  ucEdedi = []
  for (let index in _arr){
    if (_arr[index] == 3) {
     ucEdedi.push(_arr[index])
    }
  }
  return ucEdedi
}

function fourNumberCount(_arr){
  dordEdedi = []
  for (let index in _arr){
    if (_arr[index] == 4) {
     dordEdedi.push(_arr[index])
    }
  }
  return dordEdedi
}

function fiveNumberCount(_arr){
  beshEdedi = []
  for (let index in _arr){
    if (_arr[index] == 5) {
     beshEdedi.push(_arr[index])
    }
  }
  return beshEdedi
}

function sixNumberCount(_arr){
  altiEdedi = []
  for (let index in _arr){
    if (_arr[index] == 6) {
     altiEdedi.push(_arr[index])
    }
  }
  return altiEdedi
}


 /* console.log(oneNumberCount(arr).length / 2)
console.log(twoNumberCount(arr).length / 2)
console.log(threeNumberCount(arr).length / 2)
console.log(fourNumberCount(arr).length / 2)
console.log(fiveNumberCount(arr).length / 2)
console.log(sixNumberCount(arr).length) */


function sumPairs(){
console.log((oneNumberCount(arr).length / 2) + (twoNumberCount(arr).length / 2) + (threeNumberCount(arr).length / 2) +
(fourNumberCount(arr).length / 2) + (fiveNumberCount(arr).length / 2) + (sixNumberCount(arr).length))
}

sumPairs()