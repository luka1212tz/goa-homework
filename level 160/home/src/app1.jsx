export default function App() {
  return (
    <div className="auth-container">
      <h1 className="title">Authorization Form</h1>

      <div className="auth-box">
        <label>Password:</label>
        <input type="password" placeholder="Enter password" />
        <button>Submit</button>
      </div>
    </div>
  );
}
