import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Project from "./pages/Project";
import ProductDetailsPage from "./pages/projects details";
import { AnimatePresence } from "framer-motion";


export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </AnimatePresence>
  );
}
