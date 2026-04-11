import { useParams } from "react-router-dom"

function Category() {
  let { categoryName } = useParams()

  return <h1>Category: {categoryName}</h1>
}

export default Category