import React from 'react';
import git from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import linkedin from '../assets/icons8-linkedin.svg'

function Footer() {
  return (
    <section id="Footer" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center space-y-4">
        <h2 className="text-lg font-bold">¡Conéctate conmigo!</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">
            <img src={git} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto:nicocuello7@gmail.com">
            <img src={gmail} alt="Email" className="w-6 h-6" />
          </a>
        </div>
        <p>© 2025 Nicolas Alberto Cuello. Todos los derechos reservados.</p>
      </div>
    </section>
  );
}

export default Footer;
