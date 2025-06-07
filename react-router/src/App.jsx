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
import Page from './Component/Page';
import Page1 from './Component/page1';
import Page2 from './Component/page2';
import Page3 from './Component/page3';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "Home", element: <Home />, index: true },
        { path: "Contact", element: <Contact /> },
        { path: "/About", element: <About />, 
          children:[
            { path: "page1", element: <Page1 /> },
            { path: "page2", element: <Page2 /> },
            { path: "page3", element: <Page3 /> },
          ]
        },
        { path: "/*", element: <Page /> },
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



