import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
//import Home from './pages/Home';
import CheckoutButton from './components/CheckoutBtn.jsx';

import Success from './components/Success.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CheckoutButton />
      }, {
        path: '/success',
        element: <Success />
      },  
       {
         path: '/checkout',
         element: <CheckoutButton />
       }, 

      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
