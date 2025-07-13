
let numbers1 = [2, 4, 6, 8];
let allEven = numbers1.every(num => num % 2 === 0);


let strings = ["apple", "banana", "kiwi", "grape"];
let hasLongString = strings.some(str => str.length > 5);


let numbers2 = [1, 2, 3, 4];
let doubledNumbers = [];
numbers2.forEach(num => {
  doubledNumbers.push(num * 2);
});


let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 19 }
];
let allAdults = users.every(user => user.age >= 18);


let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 25 },
  { name: "Monitor", price: 120 }
];
let hasAffordableProduct = products.some(product => product.price < 20);




let users1= [
  { name: "Luka", email: "luka@example.com" },
  { name: "Nika", email: "nika@example.com" }
];


