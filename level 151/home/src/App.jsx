import About from "./assets/About";
import Contacts from "./assets/contacts";

function App() {
  let path = window.location.pathname;
  console.log(path);

  switch (path) {
    case "/":
    case "/about":
      return <About />;

    case "/contacts":
      return <Contacts />;

    default:
      return (
        <div>
          <p>hello</p>
        </div>
      );
  }
}

export default App;
