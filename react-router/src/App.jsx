import { useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './App.css'
import RootLayout from './RootLayout';

import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "Home", element: <Home />, index: true },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ], {
    future: {
      v7_relativeSplatPath: true,
    },
  });

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App



