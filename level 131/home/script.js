console.log(1);
console.log(2);
console.log(3);


function func() {
  let sum = 0;
  for (let i = 0; i < 11; i++) {
    sum += i;
  }
  return sum;
}

console.log(1);
console.log(func())
console.log(3);


let name = prompt("saxeli:"); 
console.log("hi,", name);
