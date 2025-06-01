function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
      result += x[i] < '5' ? '0' : '1';
    }
    return result;
  }

  
  function countZeros(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      let str = i.toString();
      for (let char of str) {
        if (char === '0') {
          count++;
        }
      }
    }
    return count;
  }
  