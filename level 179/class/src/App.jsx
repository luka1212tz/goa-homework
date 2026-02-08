import { useState } from 'react'


function App() {
  const [question, setQuestion] = useState(0)

  let nextque = () => setQuestion((prevquestion) =>  prevquestion + 1 )
  let prewque = () => setQuestion((prevquestion) =>  prevquestion - 1 )


  return (
    <>

      <p> we are on {question} question </p>
      <button onClick={nextque}>next question</button>
      
      
      <button onClick={prewque}>prev question</button>

    </>
  )
}

export default App
