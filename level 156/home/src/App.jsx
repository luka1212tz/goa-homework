import { createElement } from "react";
import "./index.css";


export default function App() {
  let age = 16;

if (age >= 18) {
    console.log("შენ სრულწლოვანი ხარ");
} else {
    console.log("შენ არასრულწლოვანი ხარ");
}

  let score = 75;

let result = score >= 50 ? "ჩადი გამოცდა" : "ჩაიჭერი";
console.log(result);

  
  
  return (
    <div className="cards">

      
      <div className="card sedans">
        <div>
          <h2>SEDANS</h2>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
        </div>
        <button>Learn More</button>
      </div>


      <div className="card suvs">
        <div>
          <h2>SUVS</h2>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
        </div>
        <button>Learn More</button>
      </div>

      
      <div className="card luxury">
        <div>
          <h2>LUXURY</h2>
          <p>
            Cruise in the best car brands without the bloated prices.
            Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
        </div>
        <button>Learn More</button>
      </div>

    </div>
  );
}
