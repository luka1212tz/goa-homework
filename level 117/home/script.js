
const person = { name: "Alice", age: 30, city: "New York" };

let { name, age } = person;

console.log("Task 1:");
console.log("Name:", name); 
console.log("Age:", age);   



let { name: userName, city: userCity } = person;

console.log("\nTask 2:");
console.log("Username:", userName);  
console.log("User City:", userCity); 


const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

let { grades: { math, english } } = student;
