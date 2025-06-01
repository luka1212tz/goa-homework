function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  const names = prompt("Enter name").split(", ");
  const payer = names[Math.floor(Math.random() * names.length)];
  console.log(`${payer} will pay for the meal today!`);

  let result = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  } else {
    result.push(i);
  }
}

console.log(result);

  