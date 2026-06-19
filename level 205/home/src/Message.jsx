export default function Message({ user }) {
  return (
    <div>
      {user.name.toUpperCase()}
    </div>
  )
}