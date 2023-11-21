import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorPage } from './error-page';

import { Root, loader as rootLoader } from './routes/root';
import { Apartment } from './pages/apartments/index'
import { CashFlow } from './pages/cashFlow/index';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:rootLoader,
    children: [
      {
        
        path: "apartments",
        element: <Apartment />
      },
      {
        path:"flow",
        element: <CashFlow/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
