import { useState, useEffect, useEffectEvent } from "react"
import LikeView from "./assets/likeview"

function App() {
  let [count, setCount] = useState(0)

  let logCount = useEffectEvent(() => {
    console.log(count)
  })

  useEffect(() => {
    let interval = setInterval(() => {
      logCount()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  let [likes, setLikes] = useState(0)

  function handleLike() {
    setLikes(likes + 1)
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <LikeView likes={likes} onLike={handleLike} />
    </>
  )
}

export default App