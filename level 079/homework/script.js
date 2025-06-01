
let sumNumbers = 0;
for (let i = 1; i <= 10; i++) {
    sumNumbers += i;
}
console.log(`საბოლოო რიცხვების ჯამი არის ${sumNumbers}`);


for (let i = 1; i <= 10; i++) {
    console.log(`${i} - ის კვადრატი არის ${i ** 2}`);
}


let text = "გამარჯობა";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


for (let i = 1; i <= 20; i++) {  
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
