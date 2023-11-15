import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Product from './pages/Product';
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/signin',
        element: <SignIn />
      }, {
        path: '/product/:id',
        element: <Product />
      }, {
        path: '/checkout',
        element: <Checkout />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
