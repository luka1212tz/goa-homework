import { useContext } from "react"
import { UserContext } from "./Component1"

function Component3() {
  let name = useContext(UserContext)

  return (
    <div>
      <h2>Component 3</h2>
      <h3>{`Bye ${name}`}</h3>
    </div>
  )
}

export default Component3