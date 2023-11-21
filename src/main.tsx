import React from 'react'
import ReactDOM from 'react-dom/client'
import {ErrorPage} from './error-page';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element:<div>Hello world!!!!!!!</div>,
    errorElement:<ErrorPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
