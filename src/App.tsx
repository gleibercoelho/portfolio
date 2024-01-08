
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Project from "./pages/Project";
import ProductDetailsPage from "./pages/projects details";
import { AnimatePresence } from "framer-motion";
import React from "react";

 export default function App() {
    const element = useRoutes([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: (
          <About/>
        )
      },
      {
        path: "/contact",
        element: (
          <Contact/>
        )
      },
      {
        path: "/projects",
        element: (
          <Project/>
        )
      },
      {
        path: "/projects/:productId",
        element: (
          <ProductDetailsPage/>
        )
      }
    ]);
  
    const location = useLocation();
  
    if (!element) return null;
  
    return (
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    );

 
}
