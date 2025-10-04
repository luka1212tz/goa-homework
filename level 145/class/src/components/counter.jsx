import { useState } from "react"

export default function Counter() {
  
    
    let [count,setCount] = useState(0)
    
    let inc = () => {
        setCount(count + 1)
    }

    let dec = () => {
        setCount(count - 1)        
    }
    
    
    
    return(
    <div>  
      
      <button>{count}</button>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
}