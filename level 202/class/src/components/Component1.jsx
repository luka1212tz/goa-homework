import { createContext } from "react"
import Component2 from "./Component2"

export let UserContext = createContext()

function Component1() {
  let name = "luka"
  let surname = "modebadze"

  return (
    <div>
      <h1>Component 1</h1>
      <h2>{`Hello ${name} ${surname}`}</h2>

      <UserContext.Provider value={name}>
        <Component2 />
      </UserContext.Provider>
    </div>
  )
}

export default Component1