import { useState } from "react"

export default function State() {
  let [count1, setCount1] = useState(0)
  let [count2, setCount2] = useState(10)
  let [text, setText] = useState("Hello")
  let [show, setShow] = useState(false)
  let [likes, setLikes] = useState(0)

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>
        Counter: {count1}
      </button>

      <button onClick={() => setCount2(count2 + 10)}>
        Number: {count2}
      </button>

      <button onClick={() => setText("World")}>
        {text}
      </button>

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <p>Visible</p>}

      <button onClick={() => setLikes(likes + 1)}>
        Likes: {likes}
      </button>
    </>
  )
}