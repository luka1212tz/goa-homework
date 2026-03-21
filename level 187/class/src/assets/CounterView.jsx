export default function CounterView({ count, increase }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </div>
  )
}