import React from 'react';

function ProjectCard({ title, bgImage, description, hRef }) {
  return (
    <>
      <div>
        <h2 className="text-center font-extrabold lg:text-2xl text-gray-500">{title}</h2>
        <a href={hRef} target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="flex-col content-center overflow-hidden max-md:text-xs group lg:w-[300px] max-lg:w-[200px] max-lg:h-[180px] md:h-[250px] lg:h-[350px] rounded-3xl border-2 bg-gray-500 border-gray-300 shadow-lg bg-cover bg-origin-content bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <p className="text-justify p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
