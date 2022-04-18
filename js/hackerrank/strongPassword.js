let clientPswrd = ["2b"]

numbers = [0,1,2,3,4,5,6,7,8,9]
lower_case = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
special_characters = '!@#$%^&*()-+'

function oneRanddomNum(){
  oneRanddomNumber = []
  for (i = 0; i <= 0; i++) {
    oneRanddomNumber.push(numbers[Math.floor(Math.random() * numbers.length)])
  }
  return oneRanddomNumber
}

function oneLowerCase(){
  oneRanndowmLowerCase = []
  for (i = 0; i <= 0; i++) {
    oneRanndowmLowerCase.push(lower_case[Math.floor(Math.random() * lower_case.length)])
  }
  return oneRanndowmLowerCase
}

function oneUpperCase(){
  oneRanndowmUpperCase = []
  for (i = 0; i <= 0; i++) {
    oneRanndowmUpperCase.push(upper_case[Math.floor(Math.random() * upper_case.length)])
  }
  return oneRanndowmUpperCase
}

function oneSpclCharacter(){
  oneRanddomSpclCharacter = []
  for (i = 0; i <= 0; i++) {
    oneRanddomSpclCharacter.push(special_characters[Math.floor(Math.random() * special_characters.length)])
  }
  return oneRanddomSpclCharacter
}

//console.log(oneSpclCharacter())

function CorrectPassword () {
  AddClientPswrd = []
    AddClientPswrd.push(oneRanddomNum() + oneLowerCase() + oneUpperCase() + oneSpclCharacter())
    //AddClientPswrd.push(oneSpclCharacter())

    correctClientPassword = clientPswrd + AddClientPswrd

    if (correctClientPassword.length <= 5) {
      console.log(correctClientPassword + 1 + ' En azı 6 element olmalidır')
    } else {

      console.log(correctClientPassword + ' correct')
    }

}

CorrectPassword ()


