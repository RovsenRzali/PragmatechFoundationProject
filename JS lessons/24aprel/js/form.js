// selectin içindəki dəyərləri necə götürürük
let selectValue = document.querySelector('select[name="city"]')
console.log(selectValue.value)

let checkBox = document.querySelector('input[name="Şərtlər"]')
console.log(checkBox.checked)

function readData(e) {
    e.preventDefault() /*inputdakı dəyərləri sıfırlayır. Bu olmayanda
    submit-ə tıkladığımız zaman konsolda SubmitEvent object qalmır */
    console.log(e)
    console.log(e.target)
    /*e.target hadisənin harda baş verdiyin göstərir */
    console.log(e.target.children)
}