import { useState } from "react"
import CounterView from "./CounterView"

export default function CounterContainer() {
    let [count, setCount] = useState(0)

    function plus(){
        setCount(count + 1)
    }

  return <CounterView count={count} increase={plus} />

}