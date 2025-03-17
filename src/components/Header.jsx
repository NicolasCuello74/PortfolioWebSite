import React from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header>
        <nav  className='md:flex items-center justify-between p-4'>
          <div className="text-lg font-bold">Mi Portfolio</div>
          <ul className={`${isOpen ? 'block' : 'hidden'} md:flex space-x-4 `}>
            <li><a href="#inicio" className='hover:underline'>Inicio</a></li>
            <li><a href="#sobre-mi" className='hover:underline'>Sobre mí</a></li>
            <li><a href="#proyectos" className='hover:underline'>Proyectos</a></li>
            <li><a href="#contacto" className='hover:underline'>Contacto</a></li>
            <button className='hover:underline'>Descargar CV</button>
          </ul>
          <button class="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header;