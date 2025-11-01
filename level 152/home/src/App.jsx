import "./index.css";

export default function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-details">
     
          
          
        

        <div className="product-info">
          <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="rating">
            <span>★★★★★</span>
            <span className="score">4.5/5</span>
          </div>

          <div className="price-section">
            <span className="price">$260</span>
            <span className="old-price">$300</span>
            <span className="discount">-40%</span>
          </div>

          <p className="description">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable
            fabric, it offers superior comfort and style.
          </p>

          <div className="section">
            <h2>Select Color</h2>
            <div className="colors">
              <div className="color olive"></div>
              <div className="color green"></div>
              <div className="color purple"></div>
            </div>
          </div>

          <div className="section">
            <h2>Choose Size</h2>
            <div className="sizes">
              <div className="size">Small</div>
              <div className="size">Medium</div>
              <div className="size selected">Large</div>
              <div className="size">X-Large</div>
            </div>
          </div>

          <div className="quantity">
            <div className="btn">-</div>
            <span className="qty">1</span>
            <div className="btn">+</div>
          </div>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
