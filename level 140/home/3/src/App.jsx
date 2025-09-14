  import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>ნაპოლეონი 🎂</h1>
        <p>გემრიელი ნამცხვარი – კლასიკური ფრანგული ფენოვანი დესერტი.</p>
      </header>

      <section className="cards">
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Napoleon_cake.jpg" alt="Napoleon Cake" />
          <h3>რას შეიცავს?</h3>
          <p>ტრადიციულად ფენოვანი ფქვილის ფენები, კრემი და შაქრის პუდრა.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Napoleon_cake_slices.jpg" alt="Napoleon Slices" />
          <h3>გემოს თვისებები</h3>
          <p>ტკბილი, კრემოვანი, ფენოვანი – ერთ-ერთ ყველაზე პოპულარულ დესერტად ითვლება.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Napoleon_cake_with_fruit.jpg" alt="Napoleon with Fruit" />
          <h3>სერვირება</h3>
          <p>სურვილისამებრ შეიძლება ზედ დააწყოთ ნაყოფი ან შოკოლადი.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
