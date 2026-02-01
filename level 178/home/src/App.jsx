import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  let [switchmode, setswitch] = useState("off")
  let [text, setText] = useState("")

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count => count + 1)}> + </button>
      <button onClick={() => setCount(count => count - 1)}> - </button>

      <p>switch is {switchmode}</p>
      <button onClick={() => setswitch("on")}> on </button>
      <button onClick={() => setswitch("off")}> off </button>


        <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
          <h1>{text}</h1>






    </>
  )
}

export default App

