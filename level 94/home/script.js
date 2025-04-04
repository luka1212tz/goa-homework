function rowSumOddNumbers(n) {
    return n * n * n;
  }

  
  function findNextSquare(sq) {
   
    let i = 1;
    while (i * i < sq) {
      i++;
    }
  
   
    if (i * i === sq) {
      let next = i + 1;
      return next * next;
    } else {
      return -1;
    }
  }
