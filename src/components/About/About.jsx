import "./About.css";
import React from "react";
import { motion } from "framer-motion";

function About() {
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

  const containerTitle = {
    hidden: { scale: 0, opacity: 0, y: -500 },
    visible: {
      scale: 1,
      opacity: 1,
      y: [0, 150, 0],
      transition: { duration: 1 },
    },
  };

  const constainerImage = {
    hidden: { scale: 0, opacity: 0, x: -1000, rotate: 180 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { ease: "easeOut", duration: 1, delay: 0.7 },
    },
  };
  const constainerText = {
    hidden: { scale: 0, opacity: 0, y: -1000, rotate: 180 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { ease: "easeOut", duration: 1, delay: 0.7 },
    },
  };

  return (
    <motion.section
      variants={containerSection}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container container__about"
    >
      <motion.h2 variants={containerTitle}>Sobre Mi</motion.h2>
      <article className="about__container-content">
        <motion.div
          variants={constainerImage}
          className="about__image"
        />
        <motion.div 
        variants={constainerText}
        className="about__text">
          <p>
            Hola, mi nombre es Lucas, tengo 28 años, soy casado y tengo una
            perrita llamada Fiona. Soy <strong>desarrollador frontend </strong>
            en camino a ser <strong>fullstack</strong>. Me gusta aprender cosas
            nuevas y siempre me invade la curiosidad por saber mas, busco formar
            parte de un equipo con <strong>motivacion y compromiso</strong>, que
            sienta la misma emocion que yo cuando programan. Mayormente estudio
            de forma autodidacta y me gusta participar de foros de desarrollo
            web para enseñar y aprender. Soy muy enfocado cuando trabajo o
            estudio, y cuando no trabajo me gusta hacer lo que se me ocurre en
            el momento, ya sea salir a algun lado o quedarme viendo una serie o
            anime, otra actividad que me gusta son los videojuegos en equipo
            enfocado a objetivos.{" "}
            <strong>
              Mi sueño es vivir cerca de la playa y viajar a muchos lugares
              diferentes.
            </strong>
          </p>
        </motion.div>
      </article>
    </motion.section>
  );
}

export default About;
