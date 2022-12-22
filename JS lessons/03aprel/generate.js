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
