function User(props) {
  return <h2>{props.value}</h2>
}

export default function Props() {
  return (
    <>
      <User value="Luka" />
      <User value="16" />
      <User value="Batumi" />
      <User value="GOA" />
      <User value="React" />
    </>
  )
}