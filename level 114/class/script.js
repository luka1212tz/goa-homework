
let numbers = [2, 4, 6, 8, 10];


numbers.forEach(function(num) {
  console.log(num * num);
});


const prices = [10, 20, 30];

let sum = prices.reduce(function(total, price) {
  return total + price;
}, 0);

console.log(`reduce : ${sum}`);






const nums = [10, 5, 2, 7, 19, 203];

let difference = nums.reduceRight(function(total, num) {
  return total - num;
});

console.log(`reduceright : ${difference}`);





