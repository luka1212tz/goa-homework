function BuggyComponent() {
  throw new Error("I crashed!")

  return <h1>Hello</h1>
}

export default BuggyComponent