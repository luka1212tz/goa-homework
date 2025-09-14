import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Hey Hey!</h1>
        <p>მოესალმები ჩვენს საიტზე!</p>
      </header>

      <section className="cards">
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="Hey 1" />
          <p>Hey 1</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="Hey 2" />
          <p>Hey 2</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="Hey 3" />
          <p>Hey 3</p>
        </div>
      </section>
    </div>
  );
}

export default App;
