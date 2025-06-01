
function checkType(value) {
  let type = typeof value;
  if (
    value === null ||
    type === "string" ||
    type === "number" ||
    type === "boolean" ||
    type === "undefined" ||
    type === "symbol" ||
    type === "bigint"
  ) {
    return "primitive";
  }
  return "non-primitive";
}


function allFalsy(arr) {
  return arr.every(item => !item);
}


function removeFalsy(arr) {
  return arr.filter(item => Boolean(item));
}


function countTruthiesAndFalsies(arr) {
  let result = { truthy: 0, falsy: 0 };
  for (let item of arr) {
    if (item) {
      result.truthy++;
    } else {
      result.falsy++;
    }
  }
  return result;
}


let a = "hello";
let b = a;
b = "world";
console.log(a);
console.log(b); 

let x = { name: "Janeza" };
let y = x;
y.name = "Master";
console.log(x.name);
console.log(y.name); 


const arr = ["JS", "React", "Node"];


for (let key in arr) {
  console.log(key);
}


for (let value of arr) {
  console.log(value); 
}


let obj = { name: "Luka", age: 25, country: "Georgia" };
let fruits = ["apple", "banana", "cherry"];

console.log("Object keys:");
for (let key in obj) {
  console.log(key); 
}

console.log("Array values:");
for (let value of fruits) {
  console.log(value); 
}
