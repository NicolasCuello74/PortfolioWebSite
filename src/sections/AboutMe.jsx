import React, { useRef, useEffect, useState } from "react";
import imgUrl from "../assets/perfil2.jpg";
import { motion } from "motion/react";

const AboutMe = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // Configuración del Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Cambia el estado si el elemento está en el viewport
      },
      { threshold: 0.5 } // 50% del elemento debe ser visible
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    } else {
      console.error("El containerRef está vacío");
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="AboutMe"
        className="w-full h-dvh flex flex-col items-center lg:flex lg:flex-row justify-around p-10 space-x-10 overflow-hidden"
        ref={containerRef}
      >
        <motion.div className='container pt-10 px-4 lg:w-1/4 content-center'
          initial={{ x: -1280 }}
          animate={inView? { x: 0 } : {x:-1280}} // Reanima cuando está en el viewport
          transition={{ duration: 3 }}
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
        <motion.div className='container px-4 lg:w-2/4'
          initial={{ x: 1280 }}
          animate={inView? { x: 0 } : {x:1280}} // Reanima cuando está en el viewport
          transition={{ duration: 3 }}
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