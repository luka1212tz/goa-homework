import { useState, useEffect } from "react"

export default function App() {
  let [count, setCount] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
      
    }
  }, [])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}