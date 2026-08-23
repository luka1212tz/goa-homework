import ErrorBoundary from "./ErrorBoundary"

function Broken1() {
  throw new Error()
}

function Broken2() {
  throw new Error()
}

function Broken3() {
  throw new Error()
}

function Broken4() {
  throw new Error()
}

function Broken5() {
  throw new Error()
}

export default function ErrorExamples() {
  return (
    <>
      <ErrorBoundary><Broken1 /></ErrorBoundary>
      <ErrorBoundary><Broken2 /></ErrorBoundary>
      <ErrorBoundary><Broken3 /></ErrorBoundary>
      <ErrorBoundary><Broken4 /></ErrorBoundary>
      <ErrorBoundary><Broken5 /></ErrorBoundary>
    </>
  )
}