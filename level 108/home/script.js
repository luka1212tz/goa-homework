
let score = 0;
function increaseScore() {
  score += 10;
}
increaseScore();
increaseScore();
console.log(score);


function secretCode() {
  let code = '1234';
}
secretCode();



let name = "World";
function greet() {
  let name = "Alice";
  console.log(name);
}
greet();
console.log(name);


function counterGame() {
  let counter = 0;
  counter += 1;
  console.log(counter);
}
counterGame();
counterGame();


function testScope() {
  undeclaredVar = 42;
}
testScope();
console.log(undeclaredVar);

// 6
// გლობალური ცვლადი არის ის, რომელიც შეიქმნა ფუნქციის გარეთ და ხელმისაწვდომია ყველგან

// 7
// ლოკალური ცვლადი არის ის, რომელიც გამოცხადდა ფუნქციის შიგნით და მხოლოდ იქ ჩანს


export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}



console.log(5 + 3);
console.log(10 - 4);






import createUser, { deleteUser } from './userService.js';
createUser("Alice");
deleteUser(1);


let addNums = (a, b) => a + b;
console.log(addNums(3, 4));

let double = x => x * 2;
console.log(double(5));


let firstChar = str => str[0];
let shout = str => str.toUpperCase();
console.log(firstChar("hello"));
console.log(shout("hello"));

let isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(7));
console.log(isPrime(8));

let checkNumber = num => {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
};
console.log(checkNumber(-5));
console.log(checkNumber(0));
console.log(checkNumber(8));

let fizzBuzz = num => {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  else if (num % 3 === 0) return "Fizz";
  else if (num % 5 === 0) return "Buzz";
  else return num;
};
console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));
