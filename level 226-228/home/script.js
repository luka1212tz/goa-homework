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



function stray(numbers) {
  numbers.sort((a,b) => a - b)
  if (numbers[0] !== numbers[1]){
    return numbers[0]
  }else{
    return numbers[numbers.length - 1]
  }
  
}


let str = "Fundamentals";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") {
        result += "4";
    } else if (str[i] == "e" || str[i] == "E") {
        result += "3";
    } else if (str[i] == "l") {
        result += "1";
    } else {
        result += str[i];
    }
}

console.log(result);



function nerdify(txt) {
    let result = "";

    for (let i = 0; i < txt.length; i++) {
        if (txt[i] == "a" || txt[i] == "A") {
            result += "4";
        } else if (txt[i] == "e" || txt[i] == "E") {
            result += "3";
        } else if (txt[i] == "l") {
            result += "1";
        } else {
            result += txt[i];
        }
    }

    return result;
}