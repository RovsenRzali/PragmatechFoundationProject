let aircraft = [
  {
    callSign: "UTA 743",
    typeOf: "SU-95",
    registration: "VP-BRV",
  },
  {
    callSign: "AHY 272",
    typeOf: "E-190",
    registration: "4k Az65",
  },
  {
    callSign: "IAE 447",
    typeOf: "B737",
    registration: "RA-89036",
  },
];

/*
bu metod xəstə metodu, bunu elə etməliyəmki verilən datada
hər hansı məlumat dəyişdikdə belə aşağıdakı funskiya işləsin.   */
// function showAllPlane() {
//   for (i = 0; i < aircraft.length; i++) {
//     console.log(
//       `${
//         aircraft[i]["callSign"] +
//         aircraft[i]["typeOf"] +
//         aircraft[i]["registration"]
//       }`
//     );
//   }
// }

// function showAllPlane(_data) {
//     for (i = 0; i < _data.length; i++) {
//       console.log(
//         `${
//             _data[i]["callSign"] + ", " +
//             _data[i]["typeOf"] + ", " +
//             _data[i]["registration"]
//         }`
//       );
//     }
//   }

function GetAllDataFromArr(_data) {
  for (i = 0; i < _data.length; i++) {
    console.log(
      `${
        _data[i]["callSign"] +
        ", " +
        _data[i]["typeOf"] +
        ", " +
        _data[i]["registration"]
      }`
    );
  }
}

//GetAllDataFromArr(aircraft)



// function showObjectData(_obj) {
//   for (let key in _obj) {
//     console.log(`${key} ${_obj[key]}`);
//   }
// }

// function showObjectData(_obj) {
//     _objData = ""
//     for (let key in _obj) {
//        _objData += `${key}: ${_obj[key]}.`;
//     }
//     console.log(_objData)
//   }

// showObjectData({
//     _Name: "Rovshan",
//     Surname: "Rzali",
//   });

let obj = {
    id: 1,
    price: 23,
  };

function showObjectData(_obj) {
  _objData = "";
  for (let key in _obj) {
    _objData += `${key}:${_obj[key]}. ${""}`;
  }
  return  _objData;
}

//console.log(showObjectData(obj));


function GetAllDataFromArr(_data) {
    _allData = ""
    for (i=0;i<_data.length;i++) {
        _allData += showObjectData(_data[i]) + "\n"
      }
    console.log(_allData);
}

GetAllDataFromArr(aircraft)
