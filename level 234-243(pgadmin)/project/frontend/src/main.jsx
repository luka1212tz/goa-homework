import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const API = 'http://127.0.0.1:8000/api'

function App() {
  const [page, setPage] = useState('table')
  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([
      fetch(`${API}/users/`).then(res => { if (!res.ok) throw Error('API error'); return res.json() }),
      fetch(`${API}/categories/`).then(res => { if (!res.ok) throw Error('API error'); return res.json() })
    ]).then(([userData, categoryData]) => {
      setUsers(userData)
      setCategories(categoryData)
      if (userData.length) setSelectedId(userData[0].id)
    }).catch(() => setError('Could not connect to Django. Start the backend server first.'))
  }, [])

  const selectedUser = users.find(user => user.id === Number(selectedId))

  return (
    <div>
      <header><h1>Users Website</h1><p>Simple Django API + React Vite</p></header>
      <nav>
        <button onClick={() => setPage('table')}>Data Table</button>
        <button onClick={() => setPage('profile')}>User Profile</button>
        <button onClick={() => setPage('categories')}>User Categories</button>
      </nav>
      {error && <p>{error}</p>}
      {page === 'table' && <section>
        <h2>Data Table</h2>
        <table><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Category</th></tr></thead>
        <tbody>{users.map(user => <tr key={user.id} onClick={() => {setSelectedId(user.id); setPage('profile')}}>
          <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.age}</td><td>{user.category}</td>
        </tr>)}</tbody></table>
        <p>Click any user to open their profile.</p>
      </section>}
      {page === 'profile' && <section>
        <h2>User Profile</h2>
        <label>Choose user: <select value={selectedId ?? ''} onChange={event => setSelectedId(event.target.value)}>
          {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select></label>
        {selectedUser ? <div>
          <div>{selectedUser.name[0]}</div>
          <h3>{selectedUser.name}</h3>
          <p><b>ID:</b> {selectedUser.id}</p>
          <p><b>Email:</b> {selectedUser.email}</p>
          <p><b>Age:</b> {selectedUser.age}</p>
          <p><b>Category:</b> {selectedUser.category}</p>
        </div> : <p>No users available.</p>}
      </section>}
      {page === 'categories' && <section>
        <h2>User Categories</h2>
        <div>{categories.map(category => <div key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.users.length} user(s)</p>
          <ul>{category.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
        </div>)}</div>
      </section>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
