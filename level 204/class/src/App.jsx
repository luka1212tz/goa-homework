import ShoppingCart from "./ShoppingCart"
import CartErrorBoundary from "./Carterror"

function App() {
  return (
    <div>
      <CartErrorBoundary>
        <ShoppingCart />
      </CartErrorBoundary>
    </div>
  )
}

export default App