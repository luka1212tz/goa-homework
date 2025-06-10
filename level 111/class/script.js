let greetUser = (name = "guest") => {
  if (name == "") {
    name = "guest";
  }
  return "Hello, " + name + "!";
}


console.log(greetUser(""))
console.log(greetUser())
console.log(greetUser("luka"))




let power = (num1, num2 = 2) => {
  return num1 ** num2
}

console.log(power(2,4))
console.log(power(2))