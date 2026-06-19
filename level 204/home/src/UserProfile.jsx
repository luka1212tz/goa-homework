import React, { useState } from "react"

function UserProfile() {
  let [name, setName] = useState("")

  if (name === "Admin") {
    throw new Error("Forbidden name")
  }

  return (
    <div>
      <input
        type="text"
        placeholder="შეიყვანე სახელი"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>{name}</h3>
    </div>
  )
}

export default UserProfile