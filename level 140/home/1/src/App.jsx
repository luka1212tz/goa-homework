import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>დინოზავრები 🦖</h1>
        <p>მეცნიერული და სახალისო ინფორმაცია ჩვენს წარსულ დროში მცხოვრები უზარმაზარი არსებებზე.</p>
      </header>

      <section className="cards">
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Tyrannosaurus_Rex_Holotype.jpg" alt="Tyrannosaurus Rex" />
          <h3>Tyrannosaurus Rex</h3>
          <p>დიდი მტაცებელი დინოზავრი, ცნობილი თავისი ძლიერებით.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Stegosaurus_BW.jpg" alt="Stegosaurus" />
          <h3>Stegosaurus</h3>
          <p>სამყაროის ერთ-ერთი ყველაზე ცნობადი მცენარეები მჭამელი დინოზავრი.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Velociraptor_BW.jpg" alt="Velociraptor" />
          <h3>Velociraptor</h3>
          <p>ჭკვიანი და სწრაფი ნადირობი დინოზავრი, პატარა ზომის მაგრამ მტაცებელი.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
