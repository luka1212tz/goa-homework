const name = "MasterJaneza"; //primitive
const age = 29; //primitive
const skills = ["JavaScript", "React"]; //not primitive 
const greet = function() { return "Hello!"; }; //not primitive 
const isCool = true; //primitive
const details = { country: "Georgia" }; //not primitive 


function isFalsy(x) {
  if (x == false) {
    return true
  } else {
    return false
  }
}


console.log(isFalsy(""))
