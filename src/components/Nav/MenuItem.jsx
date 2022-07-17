import * as React from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const text = ["Inicio", "Sobre Mi", "Proyectos", "Contacto"];
const path = ["/", "about", "proyect", "contact"];

const MenuItem = ({ i, toggle }) => {
  const handleToggle =()=>{
    toggle();
  }

  return (
    <motion.li
    onClick={handleToggle}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={path[i]}className="navbar__link">{text[i]}</Link>
    </motion.li>
  );
};

export default MenuItem;