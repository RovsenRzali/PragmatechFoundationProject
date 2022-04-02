// inputs

let students = [
  {
    ad: "Eli",
    soyad: "Piriyev",
    yas: 23,
  },
  {
    ad: "Ehmed",
    soyad: "Memmedov",
    yas: 34,
  },
  {
    ad: "Sara",
    soyad: "Qurbanova",
    yas: 40,
  },
  {
    ad: "Sevda",
    soyad: "Ezizova",
    yas: 58,
  },
  {
    ad: "Qurban",
    soyad: "Sadiqzade",
    yas: 60,
  },
];

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

function printInfo(x) {
  x--;
  console.log(
    "Ad:" + students[x]["ad"],
    "Soyad:" + students[x]["soyad"],
    "Yas:" + students[x]["yas"]
  );
}

printInfo(1); //write number of student here from 1 to 5

// for(let key in students) {
//   console.log(key,students[key])
// }
