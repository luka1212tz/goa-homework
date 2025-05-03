function smallEnough(arr, limit) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > limit) {
        return false;
      }
    }
    return true;
  }

  
  function countRedBeads(n) {
    if (n < 2) {
      return 0;
    } else {
      return (n - 1) * 2;
    }
  }
  