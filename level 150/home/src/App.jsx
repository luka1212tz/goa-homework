import Home from "./assets/home";
import Dashboard from "./assets/dashboard";
import Contacts from "./assets/contacts";

function App() {
  let path = window.location.pathname;

  if (path === "/" || path === "/Home") {
    return <Home />;
  } else if (path === "/dashboard") {
    return <Dashboard />;
  } else if (path === "/contacts") {
    return <Contacts />;
  }

  console.log(path);
  return (
    <div>
      <p>gello</p>
    </div>
  );
}

export default App;
