

let sumArray = (arr = [1, 2, 3]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log("დავალება 3:");
console.log(sumArray([4, 5, 6]));
console.log(sumArray());         


let joinStrings = (str1, str2 = "") => str1 + str2;

console.log("\nდავალება 4:");
console.log(joinStrings("Hello", "World")); 
console.log(joinStrings("Hello"));          


let multiply = (a, b = 10) => a * b;

console.log("\nდავალება 5:");
console.log(multiply(5, 5));  
console.log(multiply(5));     