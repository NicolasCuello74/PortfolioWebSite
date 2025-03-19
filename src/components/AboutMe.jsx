import React from 'react'
import imgUrl from '../assets/perfil2.jpg'

const AboutMe = () => {
  return (
    <>
      <section id='About' className='inline-block md:grid grid-cols-3 justify-center items-center p-6 gap-3'>
        <div className='flex items-center justify-center'>
          <img className='h-[18rem] object-contain rounded-2xl' src={imgUrl} alt="perfil" />
        </div>
        <div className='col-span-2 p-10'>
          <h2 className='text-4xl'> Desarrollador Full Stack Javascript</h2>
          <br />
          <br />
          <h3 className='text-justify text-sm'>
            Soy un desarrollador full stack en Javascript, formado mediante un
            bootcamp de más de 800 horas y con varios proyectos que me permitieron la
            práctica necesaria sobre los contenidos adquiridos. Con una
            trayectoria como líder y asesor en el área de atención al cliente
            dentro de una empresa que ofrece servicios de outsourcing,
            tercerización de procesos y soluciones tecnológicas. Actualmente
            trabajando para el área de soporte de Tecnología. Esta experiencia
            me ha permitido desarrollar habilidades claves del trabajo en equipo
            y análisis de datos masivos.
          </h3>
        </div>
      </section>
    </>
  )
}

export default AboutMe