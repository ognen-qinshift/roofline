import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages 
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Listings from "./pages/Listings.jsx"
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,  // fallback for bad routes
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/listings",
      element: <Listings />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ],
  {
    basename: "/roofline/"
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)