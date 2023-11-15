import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';


import NotFound from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <signUp/>
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
