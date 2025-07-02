import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// pages 
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Listings from "./pages/Listings.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about-us",
    element: <About />,
  },

  {
    path: "/listings",
    element: <Listings />,
  },

])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

