import { useState, useEffect } from "react"

function App() {

// useEffect არის Reactის ჰუკი გამოიყენება გვერდითი ეფექტებისთვის  მაგალითად: API timer

// ვიყენებთ როცა:  გვინდა კოდი გაეშვას კომპონენტის ჩატვირთვისას და გვინდა API-დან მონაცემების წამოღება

// ის კარგია api სთვის და უფრო კარგად ვწერთ კოდს 

// ცუდია იმ მხვრივ რომ შეიძლება გამოიწვიოს infinite loop და გაიჭედოს საიტი

  let [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])



  let [id, setId] = useState(1)


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])



  

  return <div>
    
    
    <p>{data.length}</p>

    <button onClick={() => setId(id + 1)}>Next</button>

    
  </div>
}

export default App