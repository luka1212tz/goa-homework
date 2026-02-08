import { useState } from "react"

export default function Salad() {
  let [text, setText] = useState(" ")

  let addItem = (item) => {setText(prev => prev + item)}

  let removeItem = () => {setText(" ")}

  return (
    <div>
      <button onClick={() => addItem(" კიტრი")}>კიტრი</button>
      <button onClick={() => addItem(" პამიდორი")}>პამიდორი</button>
      <button onClick={removeItem}>წაშლა</button>

      <p>სალათი:{text}</p>
    </div>
  )
}
