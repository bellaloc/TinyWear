// // Shopping Carts
// // https://tailwindui.com/components/ecommerce/components/shopping-carts

// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
  
//   // More products...
// ]


// export default function Example() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">Close panel</span>
//                             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-8">
//                         <div className="flow-root">
//                           <ul role="list" className="-my-6 divide-y divide-gray-200">
//                             {products.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                   <img
//                                     src={product.imageSrc}
//                                     alt={product.imageAlt}
//                                     className="h-full w-full object-cover object-center"
//                                   />
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                       <h3>
//                                         <a href={product.href}>{product.name}</a>
//                                       </h3>
//                                       <p className="ml-4">{product.price}</p>
//                                     </div>
//                                     <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500">Qty {product.quantity}</p>

//                                     <div className="flex">
//                                       <button
//                                         type="button"
//                                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                                       >
//                                         Remove
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                       <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Subtotal</p>
//                         <p>$262.00</p>
//                       </div>
//                       <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                       <div className="mt-6">
//                         <a
//                           href="#"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                           Checkout
//                         </a>
//                       </div>
//                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <p>
//                           or
//                           <button
//                             type="button"
//                             className="font-medium text-indigo-600 hover:text-indigo-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             Continue Shopping
//                             <span aria-hidden="true"> &rarr;</span>
//                           </button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }

import { useState } from 'react';

const Checkout = () => {

  const itemName = "Test Item"
  const itemPrice = 800
  const [quantity, setQuantity] = useState(1);
  const[finalAmount, setFinalAmount] = useState(itemPrice);

  const increment = () => {
    setQuantity(quantity+1);
    setFinalAmount(finalAmount+itemPrice);
  }

  const decrement = () => {
    if(quantity <=1){
      setQuantity(1);
      setFinalAmount(itemPrice);
    }
    if(quantity > 1){
      setQuantity(quantity - 1);
      setFinalAmount(finalAmount - itemPrice);
    }
  }
    const checkout = () => {
      fetch("http://localhost:3001/create-checkout-session", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        mode:"cors",
        body: JSON.stringify({
          items: [
            {id:1, quantity: quantity, price: itemPrice, name: itemName}
          ]
        })
      })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url})=>{
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })
    }
  
  return (
    <div className='w-full mx-auto'>
      <div className='text-center font-raleway w-full max-w-5xl mx-auto my-6'>
        <div className='font-extrabold text-transparent text-6xl my-10 bg-clip-text
        bg-gradient-to-r from-yellow-400 to-yellow-800'>
            Chocolate Corner
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center
        mx-auto w-full my-16 border-2 bg-[#fcf6f6] border-slate-100 shadow-md py-4'>
            <div className='flex lg:justify-end justify-center items-center mx-auto
            my-24 w-full lg:w-6/12'>
                <img src='' alt=""/>
            </div>
           <div className='flex flex-col lg:w-6/12 w-full py-8'>
             <div className='text-4xl font-bold text-yellow-700'>
             {itemName}
             </div>
             <div className='text-3xl font-semibold my-6 text-slate-600'>
                price:&nbsp;&nbsp;₹{itemPrice}
             </div>

             <small className='mt-10 mb-3 font-semibold'>Add Quantity</small>
             <div className='flex text-slate-900 justify-center items-center mb-10'>
                <span onClick={decrement} className='select-none w-auto px-4
                py-2 text-5xl bg-red-100 cursor-pointer'>-</span>
                <span className='w-auto px-4 py-2 text-3xl font-semibold'>{quantity}</span>
                <span onClick={increment} className='select-none w-auto px-4 py-2 text-5xl bg-green-100 
                cursor-pointer'>+</span>
             </div>


             <div className='my-6 text-xl'>Amount to be paid:
             <span className='text-green-500 text-3xl font-bold pl-3'>₹{finalAmount}</span></div>
             <div className='my-6'>
              <button onClick={checkout} className='bg-green-400 text-white px-8 py-4 rounded-md text-2xl 
              font-semibold'>
                Checkout
              </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout