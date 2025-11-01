import "./main.css"

function App() {
  
  let fruits = ["mango","pineapple","carrot","apple"]


  return (
    <>
      hi from main
      <ul>{fruits.map((item,index) => (
        <li>{item}</li>
      ))}</ul>

    </>
  )
}

export default App
