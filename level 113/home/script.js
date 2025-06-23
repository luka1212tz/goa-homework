let numbers = [2, 4, 6, 8]; 
let allEven = numbers.every(num => num % 2 === 0);
console.log("All even:", allEven); 

let strings = ["apple", "banana", "car", "elephant"]; 
let hasLongString = strings.some(str => str.length > 5);
console.log("Has long string:", hasLongString);

let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 25 }
]; 
let allAdults = users.every(user => user.age >= 18);
console.log("All adults:", allAdults); 

let products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Pencil", price: 5 }
]
let hasAffordableProduct = products.some(product => product.price < 20);
console.log("Has affordable product:", hasAffordableProduct);
