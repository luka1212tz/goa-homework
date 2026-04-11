import { useParams } from "react-router-dom"

function Dashboard() {
  let { tab } = useParams()

  let content = ""

  if (tab === "Overview") {
    content = "This is the Overview section"
  } else if (tab === "Stats") {
    content = "Here are your Stats"
  } else if (tab === "Settings") {
    content = "Manage your Settings here"
  } else {
    content = "Tab not found"
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{content}</h2>
    </div>
  )
}

export default Dashboard