import { useState } from "react"

function ShoppingCart() {
  let [count, setCount] = useState(0)

  if (count > 3) {
    throw new Error("Too many items")
  }

  return (
    <div>
      <h3>კალათაშია: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        დამატება
      </button>
    </div>
  )
}

export default ShoppingCart