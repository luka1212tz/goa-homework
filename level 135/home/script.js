//1 ვერგავიგე პირობა


function countSmileys(arr) {
  let count = 0;

  for (let face of arr) {
    if (face.length === 2) {
      if ((face[0] === ':' || face[0] === ';') && 
          (face[1] === ')' || face[1] === 'D')) {
        count++;
      }
    } else if (face.length === 3) {
      if ((face[0] === ':' || face[0] === ';') && 
          (face[1] === '-' || face[1] === '~') && 
          (face[2] === ')' || face[2] === 'D')) {
        count++;
      }
    }
  }

  return count;
}





function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number)
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return `${max} ${min}`
}


function digitalRoot(n) {
      
    let sum = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
                   
  
  return sum;
}































function isIsogram(...str){
  let string = ''
  str = str.join('').toLowerCase()
  for(let i = 0; i < str.length; i++){
      if(string.includes(str[i])){
        return false
      }
      string = string + str[i]
  }
  return true
}
