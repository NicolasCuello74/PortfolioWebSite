import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projectData = [
    {
      title: 'Animaladas',
      bgImage: 'https://res.cloudinary.com/decdqjawu/image/upload/v1744987255/logoanimaladas_g1jsjr.png',
      description: 'Express.js · Chartjs · React.js · nodemailer · Bootstrap · Redux.js · Node.js · JavaScript · JsonWebToken · Cloudinary · Google Maps · AJAX · CRUD',
      hRef:'https://animaladas03.vercel.app/',
    },
    {
      title: 'Driver APP',
      bgImage: 'https://res.cloudinary.com/decdqjawu/image/upload/v1746208950/ChatGPT_Image_2_may_2025_03_02_16_p.m._t7rxkj.png',
      description: 'PostgreSQL · React.js · CSS puro · Redux.js · Node.js · Sequelize.js · JavaScript · AJAX · API Rest',
      hRef:'https://frontend-drivers.vercel.app/',
    },
    {
      title: 'Pelis Films',
      bgImage: 'https://res.cloudinary.com/decdqjawu/image/upload/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png',
      description: 'React.js · API Rest · Bootstrap · JavaScript · axios · Npm (Software) · GitHub · Git · vercel · Auth0',
      hRef:'https://alkemy-app.vercel.app/',
    },
  ]

  return (
    <section id='Projects' className='w-full h-dvh flex flex-col justify-evenly content-center'>
      <div className='flex justify-center pt-20 '>
        <div className='max-w-3xs border-2 rounded-2xl border-amber-50 p-2'>
          <h1 className='text-gray-500 text-center lg:text-2xl '>MIS PROYECTOS</h1>
        </div>
      </div>
      <div className='w-full h-lvh max-md:flex max-md:flex-col items-center grid grid-cols-3 content-around justify-items-center gap-4 px-10'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            bgImage={project.bgImage}
            description={project.description}
            hRef={project.hRef}/>
        )

        )}
      </div>
    </section>
  )
}

export default Projects