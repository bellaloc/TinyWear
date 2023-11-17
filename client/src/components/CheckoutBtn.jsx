import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { url } from '../../../server/Stripe/index';

const CheckoutButton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = () => {
    setLoading(true);
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userId: user.id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <button
        onClick={() => handleCheckout()}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Checkout'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default CheckoutButton;
