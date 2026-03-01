function divisors(integer) {
  

  let arr = []
    for(i = 0; integer > i; i++){
       if(integer / i === typeof(2) ){
         arr.push(i)
                            
       }                                
    }  
  
    
  
  
}


function solve(s){
  
 let lowcases = 0
 let uppcases = 0
  
  
  for(let i = 0; i < s.length ; i++){
    if(s[i] === s[i].toUpperCase()){
      uppcases++
    }else{lowcases++}
       
}
  if(lowcases < uppcases ){
    return (s.toUpperCase())
    }else{
      return (s.toLowerCase())
    }
    
  
  
}



function rowWeights(array){
    let team1 = 0
    let team2 = 0
  
  for(let i = 0 ; array.length > i; i++){
  
  if(i % 2 == 0 ){
    team1 = team1 + array[i]
  }else(team2 = team2 + array[i])
  
  
    
  
  }
 return[team1 , team2]


}
