import { useParams } from "react-router-dom"

function Blog() {
  let { slug } = useParams()

  return <h1>Reading post: {slug}</h1>
}

export default Blog