// ========== 1. for...in ციკლი ==========
// გამოიყენება ობიექტის გასასვლელად (property name-ებზე გადის)

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log("➡️ for...in მაგალითი:");
for (let key in car) {
  console.log(key + ": " + car[key]);
}
// შედეგი:
// brand: Toyota
// model: Corolla
// year: 2020



// ========== 2. for...of ციკლი ==========
// გამოიყენება მასივების, სტრიქონების და სხვა iterable ობიექტების გასასვლელად
// იგი გადის მნიშვნელობებზე (value), არა გასაღებებზე

let names = ["Luka", "Ana", "Nika"];

console.log("\n➡️ for...of მაგალითი:");
for (let name of names) {
  console.log(name);
}




// ========== 3. Default Parameters (ნაგულისხმევი პარამეტრები) ==========
// გამოიყენება, როცა ფუნქციას არგუმენტი არ გადაეცემა და საჭიროა სტანდარტული მნიშვნელობა

function greet(name = "მოწვეული") {
  console.log("გამარჯობა, " + name + "!");
}

console.log("\n➡️ Default Parameters მაგალითი:");
greet("ლუკა");  // გამარჯობა, ლუკა!
greet();        // გამარჯობა, მოწვეული!



/* ========== 4. Arrow Function (ისრის ფუნქცია) ==========
  მოკლე და თანამედროვე ფორმა ფუნქციის დასაწერად.
  ხშირად გამოიყენება მაშინ, როცა ფუნქცია მარტივია ან უბრალოდ ერთ ხაზიანი.
*/

let square = (x) => x * x;

console.log("\n➡️ Arrow Function მაგალითი:");
console.log("5-ის კვადრატი:", square(5)); // 25
