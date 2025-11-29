export default function App() {
  return (
    <div className="card">
      <div className="card-top">
        <img src="/music-illustration.png" alt="Illustration" />
      </div>

      <div className="card-body">
        <h1>Order Summary</h1>

        <p className="subtext">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="plan-box">
          <div className="plan-left">
            <div className="plan-icon">🎵</div>

            <div className="plan-text">
              <p className="plan-title">Annual Plan</p>
              <p className="plan-price">$59.99/year</p>
            </div>
          </div>

          <button className="plan-change">Change</button>
        </div>

        <button className="btn-main">Proceed to Payment</button>
        <button className="btn-cancel">Cancel Order</button>
      </div>
    </div>
  );
}
