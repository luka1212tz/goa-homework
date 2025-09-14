import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>ნუგზარი 📸</h1>
        <p>მოკლე ინფორმაცია ნუგზარის შესახებ: მისი ცხოვრება, ინტერესები და სასიამოვნო მომენტები.</p>
      </header>

      <section className="cards">
        <div className="card">
          <img src="https://via.placeholder.com/200" alt="ნუგზარი 1" />
          <h3>ნუგზარის ბავშვობა</h3>
          <p>მოკლე აღწერა ნუგზარის ბავშვობის საინტერესო მომენტებზე.</p>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/200" alt="ნუგზარი 2" />
          <h3>ნუგზარის ჰობი</h3>
          <p>სურათები ნუგზარის ჰობებისა და გატაცებების შესახებ.</p>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/200" alt="ნუგზარი 3" />
          <h3>ნუგზარის მეგობრები</h3>
          <p>მოგონებები ნუგზარის მეგობრებთან ერთად.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
