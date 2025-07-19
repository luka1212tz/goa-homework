function invert(array) {
  return array.map(num => -num);
}

function digitize(n) {
  return String(n).split('').reverse().map(Number);
}


function check(a, x) {
  return a.includes(x);
}


function simpleMultiplication(n) {
  if (n % 2 === 0) {
    return n * 8;
  } else {
    return n * 9;
  }
}


function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum / marks.length);
}
