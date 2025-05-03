function replace(s) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      if (
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
      ) {
        result += '!';
      } else {
        result += ch;
      }
    }
    return result;
  
  
  }


  let isSquare = function(n) {
    if (n < 0) {
      return false;
    }
  
    let root = Math.sqrt(n);
    if (Number.isInteger(root)) {
      return true;
    } else {
      return false;
    }
  };
  