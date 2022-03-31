// inputs

let names = ["Eli", "Ehmed", "Sara", "Sevda", "Qurban"];
let surnames = ["Piriyev", "Memmedov", "Qurbanova", "Ezizova", "Sadiqzade"];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages];

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

function singleStudent(y = 0) {
  x = y * 0;
  a = x + 0;
  b = x + 1;
  c = x + 2;

  console.log(
    "Ad:" + students[a][y],
    "Soyad:" + students[b][y],
    "Yas:" + students[c][y]
  );
}

singleStudent(0) // show single data

function callallStudent(y = 0) {
  x = y * 0;
  a = x + 0;
  b = x + 1;
  c = x + 2;

  if (y < 5) {
    console.log(
      "Ad:" + students[a][y],
      "Soyad:" + students[b][y],
      "Yas:" + students[c][y]
    );
    y++;
    callallStudent(y);
  }
}

callallStudent(); // show all data
