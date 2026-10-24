import { useEffect, useState } from "react";
import "./style.css";

function App() {
  let [product, setProduct] = useState({});
  let [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        let response = await fetch("http://127.0.0.1:8000/api/products/");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        let data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Could not load products from Django: " + err.message);
      }
    }
    getProducts();
  }, []);

  return (
    <main>
      <h1>Products</h1>
      {error ? <p role="alert">{error}</p> : product.name ? (
        <section>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
        </section>
      ) : <p>Loading...</p>}
    </main>
  );
}

export default App;
