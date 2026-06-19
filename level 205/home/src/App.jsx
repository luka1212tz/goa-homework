import ErrorBoundary from "./ErrorBoundary"
import BrokenChart from "./BrokenChart"
import TableFallback from "./TableFallback"
import Message from "./Message"
import MessageBoundary from "./MessageBoundary"
import GlobalErrorBoundary from "./GlobalErrorBoundary"
import BrokenComponent from "./BrokenComponent"

export default function App() {
  let tableData = [
    { name: "Luka", score: 95 },
    { name: "Nika", score: 88 }
  ]

  let brokenData = null

let users = [
    { name: "Luka" },
    null,
    { name: "Nika" }
  ]



  return (
    <div>
    <ErrorBoundary
      fallback={<TableFallback data={tableData} />}
    >
      <BrokenChart data={brokenData} />
    </ErrorBoundary>


      {users.map((user, index) => (
        <MessageBoundary key={index}>
          <Message user={user} />
        </MessageBoundary>
      ))}


        <GlobalErrorBoundary>
      <BrokenComponent />
    </GlobalErrorBoundary>

</div>
  )
}