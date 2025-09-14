import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>მაიმუნები 🐒</h1>
        <p>საინტერესო ფაქტები მაიმუნების შესახებ: მათი ცხოვრება, სახეობები და უნარები.</p>
      </header>

      <section className="cards">
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Chimpanzee-Head.jpg" alt="Chimpanzee" />
          <h3>შიმპანზე</h3>
          <p>ჭკვიანი, სოციალური მაიმუნი, რომელიც ცხოვრობს ჯგუფებში.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Baboon_in_Zoo_1.jpg" alt="Baboon" />
          <h3>ბაბუინი</h3>
          <p>ძლიერი და აქტიური მაიმუნი, ხშირად ცხოვრობს უდაბნოს ან ტყის ტერიტორიებზე.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Capuchin_Monkey.jpg" alt="Capuchin Monkey" />
          <h3>კაპუჩინი</h3>
          <p>ცნობისმოყვარე და ჭკვიანი მაიმუნი, ცნობილია თავის ხელსაწყოებით თამაში-გამოყენებით.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
