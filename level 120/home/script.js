// Task 1
let getFullName = (firstName, lastName) => firstName + " " + lastName;

// Task 2
let square = n => n * n;

// Task 3
const numbers = [1, 2, 3, 4, 5];
let [first,,, ,last] = numbers;

// Task 4
const student = { name: 'Emma', age: 20 };
let { name: studentName, age: studentAge } = student;

// Task 5
const product = {
  id: 101,
  details: { name: "Laptop", price: 1200 }
};
let { details: { name: productName, price: productPrice } } = product;

// Task 6
const car = { make: 'Toyota', model: 'Camry', year: 2020 };
for (let key in car) console.log(key + ": " + car[key]);

// Task 7
const colors = ['red', 'green', 'blue'];
for (let color of colors) console.log(color);

// Task 8
for (let char of "JavaScript") console.log(char);

// Task 9
function multiply(a, b = 2) { return a * b; }

// Task 10
function sayHi(name = "სტუმარი") { console.log("Hi, " + name); }
sayHi(undefined); // აჩვენებს default-ს

// Task 11
function getDefaultName() {
  console.log("Generating default...");
  return "Guest";
}
function greet(name = getDefaultName()) {
  console.log("Hello, " + name);
}



// Arrow function არის ფუნქციის დაწერის მოკლე ფორმა.
// იგი არ იძლევა საკუთარი this-ს და ხშირად გამოიყენება callback-ებში.
let sum = (a, b) => a + b;


// Destructuring საშუალებას გვაძლევს მივანიჭოთ მასივის ან ობიექტის ელემენტები ცვლადებს მარტივად.
let [x, y] = [10, 20];
let { title, year } = { title: "Book", year: 2024 };

// for...in გადის ობიექტის გასაღებებზე (property names)
// for...of გადის მასივის ან სტრიქონის მნიშვნელობებზე (values)
let obj = { a: 1, b: 2 }; for (let key in obj) console.log(key);
let arr = [1, 2]; for (let val of arr) console.log(val);


// Object enhancement ნიშნავს როცა ცვლადის სახელითვე ვქმნით ობიექტში თვისებას.
let name = "Luka", age = 18;
let person = { name, age };
// Default parameter გვაძლევს საშუალებას, არგუმენტი თუ არ გადაეცა, გამოიყენოს ნაგულისხმევი მნიშვნელობა.
function welcome(user = "სტუმარი") { console.log("Welcome, " + user); }
