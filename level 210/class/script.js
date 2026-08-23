function duplicateEncode(word){
    
 word = word.toLowerCase()
  
 let result = ""

  for(let i = 0; i < word.length ; i++){
  let count = 0
    
  for(let j = 0; j<word.length; j++){
    if(word[i] == word[j]){
    count = count + 1
    }
     
  }
  
    if(count == 1){
    result = result + "("
    }else{result = result + ")"}
    
  }
return result
}


function createPhoneNumber(numbers){
 
  let num = "(aaa) aaa-aaaa"
  
  for(let i = 0; i < numbers.length; i++){
  num = num.replace("a", numbers[i])
  }
  return num
}

var number =function(array){
   
  let arr = []
  
  for(let i = 0; i < array.length; i++){
    arr.push((i + 1) + ': ' + array[i])
  }
  
  return arr
} 