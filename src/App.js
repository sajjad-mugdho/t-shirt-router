
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';

import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Grandpa from './component/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          loader: () => fetch('t-shirt.json'),
          element: <Home />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/grandpa',
          element: <Grandpa />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
