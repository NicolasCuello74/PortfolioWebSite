import React from 'react';

function ProjectCard({ title, bgImage, description, hRef }) {
  return (
    <div className="relative group lg:w-[300px] max-lg:w-[200px] max-lg:h-[180px] md:h-[250px] lg:h-[350px]">
      <div className="relative block h-full w-full rounded-3xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
        {/* Cara Frontal (Imagen de Fondo) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl border-2 border-gray-300"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Cara Trasera (Descripción) */}
        <div className="absolute inset-0 bg-white text-gray-800 p-4 rounded-3xl border-2 border-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-evenly items-center">
          <h2 className="text-center font-extrabold lg:text-2xl text-gray-500 z-10">{title}</h2>
          <p className="text-center text-sm">{description}</p>
          <a href={hRef} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 font-semibold text-blue-500 hover:underline">
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;