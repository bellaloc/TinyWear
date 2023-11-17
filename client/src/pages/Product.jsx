const Product = () => {
  return (
    <main className="container">
      <div className="left-column">
        <img
          className="active"
          src="https://res.cloudinary.com/deqzppd4t/image/upload/v1700168506/Pocket-Henley_owrbel.png"
          alt=""
        />
      </div>

      <div className="right-column">
        <div className="product-description">
          <h1>Pocket Henley Long Sleeve Shirt</h1>
          <p>Crafted in super soft slub jersey, this striped henley makes the perfect layer.</p>
        </div>

        <div className="product-configuration">
          <div className="cable-config">
            <span>Cable configuration</span>
            <div className="cable-choose">
              <button>2T</button>
              <button>3T</button>
              <button>4T</button>
            </div>
            <a href="/">Back to Homepage</a>
          </div>
        </div>

        <div className="product-price">
          <span>$15.95</span>
          <a href="https://buy.stripe.com/bIY4jLfzb2d70mc28e" className="cart-btn">
            Buy Now
          </a>
        </div>
      </div>
    </main>
  );
};

export default Product;
