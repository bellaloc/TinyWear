
const express = require('express');
const stripe = require('stripe')('sk_test_51OCV4QCQg4jIgzVLmIXR1EHzyC683Sq3PFcYPir1dTubCZa9Gh72p07JztTuNc3RG4cFasNLBTQ9htQmXEXFbkD400VuGlJwX9')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

router.get('/' , (req,res,next) => {
  console.log("hello")
  res.json({
    message: 'it works'
  });
});

router.post('/pay', async (req, res, next) => {
  console.log(req.body.token)
  const{token, amount} = req.body;
  const idempotency = uuidv4();
  
  return stripe.customers.create({
    email: token.email,
    source: token}).then(user=>{
      stripe.charges.create({
        amount:amount * 100,
        currency: 'usd',
        user: user.id
      }, {idempotencyKey})
    }).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err)
    });
  });

module.exports = router