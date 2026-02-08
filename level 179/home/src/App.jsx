import { useState } from "react"

function App() {
  let [count, setCount] = useState(0)
  let [currentIndex, setCurrentIndex] = useState(0)

  let addOne = () => {
    setCount(prev => prev + 1)
  }

  let addFive = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  let prevQuestion = () => {
    setCurrentIndex(prev => prev - 1)
  }

  let nextQuestion = () => {
    setCurrentIndex(prev => prev + 1)
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={addOne}>+1</button>
      <button onClick={addFive}>+5</button>

      <hr />

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      <button
        onClick={prevQuestion}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      <button
        onClick={nextQuestion}
        disabled={currentIndex === questions.length - 1}
      >
        Next
      </button>
    </>
  )
}

export default App
