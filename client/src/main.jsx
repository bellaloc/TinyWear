import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import Example from './pages/SignIn.jsx';

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
        path: '/matchup',
        element: <Matchup />
      }, {
        path: '/matchup/:id',
        element: <Vote />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
