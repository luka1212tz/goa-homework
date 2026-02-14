import { useState, useEffect } from "react"
  
function App() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())                              
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      <h1>Shop</h1>

      <div className="grid">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p className="price">${product.price}</p>

            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

