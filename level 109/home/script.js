
let person = {
  name: "ლუკა",
  age: 25,
  city: "თბილისი"
};

console.log("1. ობიექტის თვისებები:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}


let prices = {
  apple: 2,
  banana: 3,
  orange: 1.5
};

let sum = 0;
for (let key in prices) {
  sum += prices[key];
}
console.log("2. ფასების ჯამი:", sum);


let data = {
  name: "ნინო",
  age: 30,
  isStudent: false,
  score: 85,
  city: "ბათუმი"
};

console.log("3. რიცხვითი მნიშვნელობები:");
for (let key in data) {
  if (typeof data[key] === "number") {
    console.log(key + ": " + data[key]);
  }
}

let books = {
  "ვეფხისტყაოსანი": "შოთა რუსთაველი",
  "უცხო": "ალბერ კამიუ",
  "1984": "ჯორჯ ორუელი"
};

let bookTitles = [];
for (let key in books) {
  bookTitles.push(key);
}
console.log("4. წიგნების სია:", bookTitles);


let numbers = [4, 7, 2, 9, 1];
let total = 0;
for (let num of numbers) {
  total += num;
}
console.log("5. რიცხვების ჯამი:", total);


let text = "გამარჯობა";
console.log("6. სტრიქონის სიმბოლოები:");
for (let char of text) {
  console.log(char);
}


let words = ["თბილისი", "სახლი", "კომპიუტერი", "მზე", "მეგობარი"];
console.log("7. სიტყვები, რომელთა სიგრძე > 5:");
for (let word of words) {
  if (word.length > 5) {
    console.log(word);
  }
}


let nums = [2, 4, 6, 8];
let squares = [];
for (let num of nums) {
  squares.push(num * num);
}
console.log("8. კვადრატები:", squares);
