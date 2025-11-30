import Car from "./components.jsx";

export default function App() {


  return (
    <div>
      
      <Car
        stringProp="Hello from App"
        numberProp={42}
        arrayProp={[10, 20, 30]}
        objectProp={{
           name: "Luka",
           age: 18 }}
        
      />
    </div>
  )
}
