// inputs

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = {
    adlar: names,
    soyadlar: surnames,
    yaslar: ages
}


//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

function singlePersonDetail(x) {
  x--
  console.log("Ad:" + students["adlar"][x], "Soyad:" + students["soyadlar"][x], "Yas:" + students["yaslar"][x])
}

// singlePersonDetail(1)  //write here number of student from 1 to 5


 let i = 0;

function showAllStudent() {
  if (i < 5) {
  console.log("Ad:" + students["adlar"][i], "Soyad:" + students["soyadlar"][i], "Yas:" + students["yaslar"][i])
  i++;
  showAllStudent();
 }
}

// showAllStudent(); // if you want to see all students use this part