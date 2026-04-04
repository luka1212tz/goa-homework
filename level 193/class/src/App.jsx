import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
 

  useEffect(() => {
    console.log('hi this runs when rendered')
  },[])

  useEffect(() => {
    console.log('hi this runs when count changes')
  },[count]

) 

  return (
    
    <>
    <p>{count}</p>
    
    <button onClick={() => setCount(count + 1)}> click me</button>
    

    <img src="./img1.png" alt="" />
    <img src="./images.jpg" alt="" />


    </>
  )
}

export default App
