import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Product from './pages/Product';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/signin',
        element: <SignIn />
      }, {
        path: '/createaccount',
        element: <CreateAccount />
      }, {
        path: '/product/:id',
        element: <Product />
      }, {
        path: '/checkout',
        element: <Checkout />
      }, {
        path: '/signup',
        element: <Signup />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
