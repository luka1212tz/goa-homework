import ErrorBoundary from "./ErrorBoundry"
import UserFeed from "./UserFeed"
import RevenueChart from "./RevenueChart"
import AnalyticsWidget from "./AnalyticsWidget"

function App() {
  return (
    <div>
      <ErrorBoundary>
        <AnalyticsWidget />
      </ErrorBoundary>

      <ErrorBoundary>
        <UserFeed />
      </ErrorBoundary>

      <ErrorBoundary>
        <RevenueChart />
      </ErrorBoundary>
    </div>
  )
}

export default App