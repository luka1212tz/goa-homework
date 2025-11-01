export default function App() {
  let data = [
    { name: "Luka"},
    { name: "Giorgi"},
    { name: "Nika"},
  ];

  return (
    <div>
      <button lomi={"yo"} goa={"gurt"}>
        Click me
      </button>
      <ul>
       {data.map((item) => (
          <li>{item.name}</li>
        ))}
        </ul>
      
    </div>
  )
}
