import Child from "./child";

export default function App() {

  let sayHello = () => {
    alert("Hello from parent!");
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        username="Luka"
        age={15}
        isOnline={true}
        hobbies={["Coding", "Football", "Music"]}
        address={{ city: "Tbilisi", country: "Georgia" }}
        sayHello={sayHello}
        scores={[100, 95, 88]}
        userInfo={{ name: "Luka Modebadze", role: "Student" }}
        createdAt={new Date()}
        jsxElement={<strong>This is JSX passed as prop</strong>}
      />
    </div>
  );
}
