
const stripe = require('stripe')('sk_test_51OCV4QCQg4jIgzVLmIXR1EHzyC683Sq3PFcYPir1dTubCZa9Gh72p07JztTuNc3RG4cFasNLBTQ9htQmXEXFbkD400VuGlJwX9')


const resolvers = {
  Query: {
    createCheckoutSession: async (loading, {price, quantity} ) => {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: {price},
            quantity: {quantity}
           
          }
        ],
          mode: 'payment',
          success_url: ('/success'),
          cancel_url: ('/cancelled')
      });
      return JSON.stringify({
        url: session.url
      })
    }
  }
  }


    
module.exports = resolvers;


