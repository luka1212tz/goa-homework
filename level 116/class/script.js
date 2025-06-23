
const userOld = {
  name: "Luka",
  surname: "modebadze",
  age: 13,
  fullname: function(){
    `${name} + ${surname}`
  }
}

name = "luka"
surname = "modebadze"
age = 13

const usernew = {
    name,surname,age,
    fullname(){
    `${name} + ${surname}`
    }
}


//შეგიძლია შევქმნარ ცვლადი გარეთ და გამოვიყენოდ ის როგორც propertie და ასევე fullname: function(){} მაგივრად პირდაპირ ვწერს fullname(){}