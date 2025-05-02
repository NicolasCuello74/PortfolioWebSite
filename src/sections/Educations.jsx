import React from 'react'

export default function Educations() {
  return (
    <>
      <section id='Educations' className="w-full h-dvh flex flex-col justify-evenly items-center pt-22 px-4">
        <div className="w-full bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">🎓 Educación</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Full stack developer</strong> - Bootcamp en Henry</li>
            <li><strong>React JS</strong> - Curso en Udemy</li>
            <li><strong>CSS Avanzado</strong> - Curso en Desafio Latam</li>
            <li><strong>Analisis de datos</strong> - Curso en Academia BA Emprende</li>
            <li><strong>Fundamentos y primeros pasos del desarrollo frontend</strong> - Argentina programa</li>
            <li><strong>Tecnicatura superior en seguridad e higiene en el trabajo</strong> - Instituto Tecnico Superior Córdoba</li>
          </ul>
        </div>
        <h2 className="text-lg lg:text-3xl font-bold text-center text-white my-2">🌍 Mapa de conocimientos</h2>
        <div className="relative w-full bg-gray-700 p-6 rounded-lg shadow-lg flex flex-wrap gap-6 justify-center">
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">HTML & CSS</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Aprendí los fundamentos del desarrollo web con HTML y CSS.
            </div>
            <div className="absolute w-16 h-2 bg-white top-1/2 left-full transform -translate-y-1/2 hidden lg:block"></div>
          </div>
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">JavaScript</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Me especialicé en ES6 y DOM Manipulation.
            </div>
            <div className="absolute w-16 h-2 bg-white top-1/2 left-full transform -translate-y-1/2 hidden lg:block"></div>
          </div>
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center text-white text-center font-bold">Git & GitHub</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Construí proyectos con componentes reautilizables y escalables. Manejo de estados y uso de hooks para mejorar el rendimiento.
            </div>
            <div className="absolute w-16 h-2 bg-white top-1/2 left-full transform -translate-y-1/2 hidden lg:block"></div>
          </div>
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">React JS</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Construí proyectos con componentes reautilizables y escalables. Manejo de estados y uso de hooks para mejorar el rendimiento.
            </div>
            <div className="absolute w-16 h-2 bg-white top-1/2 left-full transform -translate-y-1/2 hidden lg:block"></div>
          </div>
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">Node JS</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Construí proyectos con componentes reautilizables y escalables. Manejo de estados y uso de hooks para mejorar el rendimiento.
            </div>
            <div className="absolute w-16 h-2 bg-white top-1/2 left-full transform -translate-y-1/2 hidden lg:block"></div>
          </div>
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-center font-bold">PostgreSQL</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Construí proyectos con componentes reautilizables y escalables. Manejo de estados y uso de hooks para mejorar el rendimiento.
            </div>
            <div className="absolute w-16 h-2 bg-white top-1/2 left-full transform -translate-y-1/2 hidden lg:block"></div>
          </div>
          <div className="group relative">
            <div className="max-md:w-12 max-md:h-12 max-md:text-[12px] text-center w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white  text-center font-bold">Bootstrap & Taildwind</div>
            <div className="absolute w-48 text-sm text-gray-300 bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition hidden lg:block">
                Aprendí a dominar y aprovechar las ventajas de poder crear interfaces modernas, optimizadas y flexibles.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
