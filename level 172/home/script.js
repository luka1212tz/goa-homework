function flattenAndSort(array) {

  let arr = []
  for (let sub of array) {
    arr.push(...sub)
  }
  return arr.sort((a, b) => a - b)
}



var number =function(array){
   
  let arr = []
  
  for(let i = 0; i < array.length; i++){
    arr.push((i + 1) + ': ' + array[i])
  }
  
  return arr
}

function capitalize(s){
  
  let even = ""
  let odd = ""
  let arr = []
  
  for(let i = 0; i < s.length; i++){
    if(i % 2 == 0){
    even = even + s[i].toUpperCase()
    odd = odd + s[i]
    }else{
     even = even + s[i]
     odd = odd + s[i].toUpperCase() 
    }
  }
  
  arr = [even , odd]
  return arr

};