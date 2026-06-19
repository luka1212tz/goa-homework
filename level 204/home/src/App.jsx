import React from "react"
import ErrorBoundary from "./ErrorBoundary"
import WeatherWidget from "./WeatherWidget"
import FormErrorBoundary from "./FormErrorBoundary"
import UserProfile from "./UserProfile"

function App() {
  return (
    <div>
      <ErrorBoundary>
        <WeatherWidget />
      </ErrorBoundary>

      <hr />

      <FormErrorBoundary>
        <UserProfile />
      </FormErrorBoundary>
    </div>
  )
}

export default App