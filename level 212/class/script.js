function findShort(s){

  let wordss = s.split(" ")
  let short = wordss[0].length

  for(let i = 0; i < wordss.length; i++){
    if (wordss[i].length < short ){
      short = wordss[i].length
    }
  }

  return short
  
}
function disemvowel(str) {
  
  let result = ""
  
  for(let i = 0; i < str.length ; i++){
   let lt = str[i]

   if(lt !== "a" && lt !== "e" && lt !== "i" && lt !== "o" && lt !== "u" && lt !== "A" && lt !== "E" && lt !== "I" && lt !== "O" && lt !== "U" ){
      result = result + lt
      } 
    
    
    
  }
  
  return result
  
  
}