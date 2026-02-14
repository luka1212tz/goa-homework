import { useState, useEffect } from 'react'

function App() {
  let [count, setCount] = useState(0)
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>

      {users.map(user => (
        <div key={user.id}>
          <h3 >{user.title}</h3>
          <p className='t-30'>{user.price}$</p>
  
        </div>
      ))}
    </>
  )
}

export default App
