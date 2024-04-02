import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Countries from './components/Home/Countries/Countries.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
