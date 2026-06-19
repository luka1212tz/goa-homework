export default function BrokenChart({ data }) {
  if (!data) {
    throw new Error("Chart crashed")
  }

  return <h1>Chart Library</h1>
}