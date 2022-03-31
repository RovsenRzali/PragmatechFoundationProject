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
  console.log("Ad:" + names[x], "Soyad:" + surnames[x], "Yas:" + ages[x])
}

singlePersonDetail(0)
singlePersonDetail(1)


let i = 0;

function showAllStudent() {
  if (i < 9) {
  console.log("Ad:" + names[i], "Soyad:" + surnames[i], "Yas:" + ages[i])
  i++;
  showAllStudent();
}
}

showAllStudent();