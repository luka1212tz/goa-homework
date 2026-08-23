function countBits(n) {
  return n.toString(2).split('1').length - 1;
}

function uniqueInOrder(iterable) {
  const result = [];

  for (let item of iterable) {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
  }

  return result;
}