import ErrorBoundary from "./comps/ErrorBoundary";
import BuggyComponent from "./comps/BuggyComponent";

function App() {
  return (
    <div>
      <p>hello im luka</p>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

    </div>
  )
}

export default App