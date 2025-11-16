

function App() {
  


let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);

let names = ["Luka", "Anna", "Bernard"];
let nameLengths = names.map(name => name.length);

let items = [
  {id: 1, value: "a"},
  {id: 2, value: "b"},
  {id: 3, value: "c"}
];
items.map(item => <div key={item.id}>{item.value}</div>);

React.createElement("div", {className: "container"}, "Hello World");

React.createElement("h1", {style:{color:"red"}}, "Title");

  return (
    <>
      
    </>
  )
}

export default App
