const Stripe = require('stripe');
const express = require('express');
// env with stripe key
require("dotenv");
const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

// ../server/Stripe/index.js
const url = 'your_stripe_url'; // replace 'your_stripe_url' with the actual value

// Payment for Stripe creating sessions for checkout
router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: '/success',
      cancel_url: '/',
    });

    res.send({ url: session.url });
    console.log(session.url);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

export { url, router };
