import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.3,
        delayChildren: 1.2,
      },
    },
  };

  const strong = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const containerSection = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0,
      scale: 0,
      x: "100vh",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const containerImage = {
    hidden: { x: "-100vh", opacity: 0, scale: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: .5 , duration: 1, ease: "easeIn" },
    },
  };

  return (
    <motion.section
      variants={containerSection}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container home__container"
    >
      <div>
        <h1>Lucas Luzzani</h1>
        <h3>Desarrollador Frontend</h3>
      </div>
      <article className="home__container-content">
        <motion.div
          variants={containerImage}
          className="home__container-image"
        />
        <div className="home__container-text">
          <motion.p variants={container} initial="hidden" animate="show">
            Hola! Te presento mi portafolio y en el vas a poder{" "}
            <motion.strong variants={strong} whileHover={{ scale: 1.1 }}>
              <Link to="about">conocerme un poco,</Link>
            </motion.strong>
            mis{" "}
            <motion.strong variants={strong} whileHover={{ scale: 1.1 }}>
              <Link to="skills">habilidades</Link>
            </motion.strong>{" "}
            y mis{" "}
            <motion.strong variants={strong} whileHover={{ scale: 1.1 }}>
              <Link to="proyect">proyectos.</Link>
            </motion.strong>
            Si deseas conocerme mas,{" "}
            <motion.strong variants={strong} whileHover={{ scale: 1.1 }}>
              <Link to="/">¿Que tal un meeting?</Link>
            </motion.strong>
          </motion.p>
        </div>
      </article>
    </motion.section>
  );
}

export default Home;
