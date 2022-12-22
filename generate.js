let user01 = {
    type: "B787",
    register: "VP-BRV"
}

let user02 = {
    type: "B777",
    register: "BL-BRV"
}

let user03 = {
    type: "B747",
    register: "4L-GEO"
}

function objGenerate (_type, _register) {
    return {
        type: _type,
        register: _register
    }
}

const user04 = objGenerate('CRJ33',"BEL-AVIA")
const user05 = objGenerate('Cessna',"4kAz005")

console.log(user05)

function UserConstructor(_ad,_soyad) {
    this.ad = _ad
    this.soyad = _soyad
}

const obj = new UserConstructor('Rovshan',"Rzali")

console.log( obj)

// new obyektinin olunma şəkli
const user = {}
user.ad = "Memmed"
user.soyad ="Hesenov"

console.log(user)

const user2 = new Object ()
user2.ad = "HP"
user2.soyad ="Notebook"

console.log(user2)

class User {
    constructor(_ad,_soyad) {
        this.ad = _ad
        this.soyad = _soyad
    }

    showData(){
        return this.ad
    }
}

const obj02 = new User('Samsung', "J6")
console.log(obj02)
console.log(obj02.showData())






