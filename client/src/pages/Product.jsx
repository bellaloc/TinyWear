
const Product = () => {

 return (

<main class="container">
 

 <div class="left-column">
   <img className='active' src="https://res.cloudinary.com/deqzppd4t/image/upload/v1700168506/Pocket-Henley_owrbel.png" alt=""></img>
   
 </div>



 <div class="right-column">

  
   <div class="product-description">
     
     <h1>Pocket Henldey Long Sleeve Shirt</h1>
     <p>Crafted in super soft slub jersey, this striped henley makes the perfect layer.</p>
   </div>


   <div class="product-configuration">


    
     <div class="cable-config">
       <span>Cable configuration</span>

       <div class="cable-choose">
         <button>2T</button>
         <button>3T</button>
         <button>4T</button>
       </div>

       <a href="/">Back to Homepage</a>
     </div>
   </div>

   <div class="product-price">
     <span>$15.95</span>
     <a href="https://buy.stripe.com/bIY4jLfzb2d70mc28e" class="cart-btn">Buy Now</a>
   </div>
 </div>
</main>

)
}
export default Product