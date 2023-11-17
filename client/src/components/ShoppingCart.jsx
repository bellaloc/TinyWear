// ShoppingCart.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ShoppingCart = () => {
  // Your shopping cart logic goes here

  return (
    <div>
      {/* Your shopping cart content goes here */}

      <Link to="/checkoutbutton">
        <button type="button">Checkout</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
