let sumTwoSmallestNumbers = function(numbers) {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num < first) {
      second = first;
      first = num;
    } else if (num < second) {
      second = num;
    }
  }

  return first + second;
};


let isSquare = function(n) {
  if (n < 0) {
    return false;
  }

  let root = Math.sqrt(n);
  if (root % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
