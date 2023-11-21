
const express = require('express');
const stripe = require('stripe')('sk_test_51OCV4QCQg4jIgzVLmIXR1EHzyC683Sq3PFcYPir1dTubCZa9Gh72p07JztTuNc3RG4cFasNLBTQ9htQmXEXFbkD400VuGlJwX9')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

router.get('/' (req,res,next) => {
  console.log("hello")
  res.json({})
})

router.post('/pay', async (req, res, next) => {
  console.log(req.body.token)
  const{token, amount} = req.body;
  const idempotency = uuidv4();
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
    success_url: '/login',
    cancel_url: '/signin',
  });
  res.send({url: session.url});
});

module.exports = router