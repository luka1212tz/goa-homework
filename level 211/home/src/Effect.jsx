import { useState, useEffect } from "react"

export default function Effect() {
  let [count, setCount] = useState(0)
  let [name, setName] = useState("")

  useEffect(() => {
    console.log("Mounted")
  }, [])

  useEffect(() => {
    console.log("Count changed")
  }, [count])

  useEffect(() => {
    console.log("Name changed")
  }, [name])

  useEffect(() => {
    document.title = count
  }, [count])

  useEffect(() => {
    console.log("Every render")
  })

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <input
        onChange={(e) => setName(e.target.value)}
      />
    </>
  )
}