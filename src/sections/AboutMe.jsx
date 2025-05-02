import React, { useRef } from "react";
import imgUrl from "../assets/perfil2.jpg";
import { motion, useInView } from "motion/react";


const AboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: "some" });
  return (
    <>
      <section
        id="AboutMe"
        ref={sectionRef}
        className="w-full h-dvh flex flex-col items-center lg:flex lg:flex-row justify-around p-10 space-x-10 overflow-hidden"
      >

        <motion.div
          className="container pt-10 px-4 lg:w-1/4 content-center overflow-hidden"
          initial={{ x: -500, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >

          <p className="lg:text-2xl mb-4 max-md:text-sm">Yo soy</p>
          <hr />
          <br />
          <h1 className="lg:text-4xl max-md:text-lg"
          >
          Nicolas Cuello
          </h1>
        </motion.div>
        <div className="opacity-50 lg:w-1/4">
          <img
            className="h-72 w-72 rounded-full object-cover"
            src={imgUrl}
            alt="perfil"
          />
        </div>
        <motion.div
          className="container px-4 lg:w-2/4 overflow-hidden"
          initial={{ x: 500, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-sm lg:text-lg text-justify"
          >
            Soy un desarrollador full stack, formado mediante un
            bootcamp de más de 800 horas y con varios proyectos que me
            permitieron la práctica necesaria sobre los contenidos adquiridos.
            Con trayectoria dentro de una empresa que ofrece servicios de BPO,
            tercerización de procesos y soluciones tecnológicas. Esta experiencia
            me ha permitido desarrollar habilidades claves del trabajo en
            equipo y análisis de datos masivos.
          </h1>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;