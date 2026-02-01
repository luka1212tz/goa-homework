import { useState } from 'react'


function App() {
  
  let [count, setCount] = useState(0)

  return (
    <>
     <p>{count}</p>
     
     <button onClick={() => setCount(count + 1) }> + </button>
    </>
  )
}

export default App


