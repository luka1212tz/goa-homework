import { useState, useEffect, useEffectEvent } from 'react'

function App() {
  const [clickCount, setClickCount] = useState(0)
  const [latestCount, setLatestCount] = useState(0)

  const updateLatest = useEffectEvent(() => {
    setLatestCount(clickCount)
  })




  useEffect(() => {
    const interval = setInterval(() => {
      updateLatest()
    }, 2000)



    return () => clearInterval(interval)
  }, [])




  return (
    <>
      <button onClick={() => setClickCount(prev => prev + 1)}>
        Click me
      </button>
      <p>Clicks {clickCount}</p>
      <p>Latest  {latestCount}</p>
    </>
  )
}