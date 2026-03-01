import { useEffect, useState } from 'react'

function App() {

  let [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [])

  return (
    <>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </>
  )
}

export default App