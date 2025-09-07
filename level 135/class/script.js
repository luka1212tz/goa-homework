function repeatStr (n, s) {
  return s.repeat(n);
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
