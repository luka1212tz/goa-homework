import { useEffect, useState } from 'react'

function App() {

  let [product, setProduct] = useState(null)
  let [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [])


     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
            
    }, [])


    //  Hooks უნდა გამოიძახო მხოლოდ კომპონენტის ყველაზე ზევით 
// - არ შეიძლება მათი გამოძახება if-ში
// - არ შეიძლება loop-ში 


//  Hooks შეიძლება გამოიყენო მხოლოდ React ფუნქციებში
// - Function Component-ში

// React Virtual DOM-ის აგებისას კომპონენტის ფუნქცია მრავალჯერ იძახება
// ამიტომ Hooks ყოველთვის უნდა გამოიძახო ერთსა და იმავე რიგში

  return (
    <>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{posts.title}</p>
      
    </>
  )
}

export default App