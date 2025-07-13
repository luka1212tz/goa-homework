
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log("➡️ for...in მაგალითი:");
for (let key in car) {
  console.log(key + ": " + car[key]);
}





let names = ["Luka", "Ana", "Nika"];

console.log("\n➡️ for...of მაგალითი:");
for (let name of names) {
  console.log(name);
}




function greet(name = "მოწვეული") {
  console.log("გამარჯობა, " + name + "!");
}

console.log("\n➡️ Default Parameters მაგალითი:");
greet("ლუკა"); 
greet();        




let square = (x) => x * x;

console.log("\n➡️ Arrow Function მაგალითი:");
console.log("5-ის კვადრატი:", square(5)); 
