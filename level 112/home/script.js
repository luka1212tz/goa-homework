
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" }
];

let userWithId3 = users.find(user => user.id === 3);


let colors = ["red", "green", "blue", "yellow"];
colors.reverse(); 
let prices = [19.99, 5.99, 25.5, 3.49];
prices.sort((a, b) => b - a); // Descending order


let someString = "Hello, world!";
let characters = Array.from(someString);


let data1 = [1, 2, 3];
let data2 = "I am not an array";

let isData1Array = Array.isArray(data1);
let isData2Array = Array.isArray(data2);

