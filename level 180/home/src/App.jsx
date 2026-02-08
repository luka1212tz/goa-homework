import { useState } from "react"

function Form() {
  let [formData, setFormData] = useState({
    username: "",
    email: ""
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  )
}

export default Form
