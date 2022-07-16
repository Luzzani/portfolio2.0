import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Proyects from "./components/Proyect/Proyects";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();


  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/proyect" element={<Proyects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
