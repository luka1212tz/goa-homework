export default function Child({
  username,
  age,
  isOnline,
  hobbies,
  address,
  sayHello,
  scores,
  userInfo,
  createdAt,
  jsxElement
}) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Address: {address.city}, {address.country}</p>

      <p>Scores: {scores.join(" | ")}</p>

      <p>User Info: {userInfo.name} — {userInfo.role}</p>

      <p>Created At: {createdAt.toString()}</p>

      <div>{jsxElement}</div>

      <button onClick={sayHello}>Run Function</button>
    </div>
  );
}
