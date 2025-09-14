import './App.css'

function App() {
  return (
    <div className="container">
      <h1>ლომი</h1>
      <p className="info">
        ლომი — დიდი ხორცისმჭამელი ძუძუმწოვარი, რომელიც მიეკუთვნება კატასებრთა ოჯახს.
        ის მეორე უდიდესი კატაა ვეფხვის შემდეგ. ლომები ცნობილია თავიანთი გრძელბუსუსიანი
        „ლომგუდით“ და ცხოვრობენ აფრიკის სავანებში და ინდოეთის მცირე ტერიტორიაზე.
        ლომებს აქვთ ძლიერი სხეული, მძლავრი ღრიალი და ჯგუფურად ნადირობენ,
        რასაც "პრაიდი" ეწოდება.
      </p>
      
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg" 
        alt="ლომი" 
      />

      <p>
        <a 
          href="https://ka.wikipedia.org/wiki/ლომი" 
          target="_blank" 
          className="wiki-link"
        >
          ვიკიპედია ლომზე
        </a>
      </p>
    </div>
  )
}

export default App
