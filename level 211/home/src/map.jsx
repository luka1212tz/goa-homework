export default function Map() {
  let names = ["Luka", "Nika", "Gio"]
  let nums = [1, 2, 3]
  let fruits = ["Apple", "Banana"]
  let colors = ["Red", "Blue"]
  let prices = [10, 20]

  return (
    <>
      {names.map(name => <h2>{name}</h2>)}

      {nums.map(num => <p>{num}</p>)}

      {fruits.map(fruit => <li>{fruit}</li>)}

      {colors.map(color => <h3>{color}</h3>)}

      {prices.map(price => <span>{price}$ </span>)}
    </>
  )
}