import { useEffect, useState } from "react"

export default function App() {
  
  


// useEffect  მუშაობს როცა კომპონენტი ჩაირთვება ან როცა dependency შეიცვლება

// dependency array → აკონტროლებს როდის გაეშვება effect
// []  → ერთხელ 
// [value] → როცა value შეიცვლება
// არ არის → ყოველ render-ზე

// cleanup function: return-ში დაბრუნებული ფუნქცია
// ის გაეშვება:
// როცა კომპონენტი წაიშლება
// სანამ effect თავიდან გაეშვება
  
  
let [count, setCount] = useState(0)

  useEffect(() => {
    console.log("hello world")
  }, [])

  

  useEffect(() => {
    console.log("Runs every render")
  })

   useEffect(() => {
    let handleClick = () => {
      console.log("clicked")
    }


    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])
  
  
  useEffect(() => {
    
    let interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

   
    return () => {
      
      clearInterval(interval)
    }
  }, [])

  return(
  <>
    <h2>{count}</h2>
    <h1>Click anywhere</h1>
  </>
)

  
  }