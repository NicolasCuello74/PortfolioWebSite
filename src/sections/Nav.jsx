import React from 'react'
import git from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import linkedin from '../assets/icons8-linkedin.svg'

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);
  const handleScroll = () => {
    setSticky(window.scrollY >= 10);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // className de header-nav [ul] {`${isOpen ? 'block' : 'hidden'} lg:flex space-x-4 }


  return (
    <>
      <section className='h-20 w-full'>
        <nav className={`fixed h-20 w-full backdrop-blur transition-all duration-300 ${sticky ? " shadow-lg bg-gray-600 text-amber-50" : "shadow-none py-8"}`}>
          <div className='container mx-auto h-20 flex items-center justify-between px-8 lg:px-10 xl:px-14'>
            <div className='rounded-full w-20 h-20' >
              <img src="https://res.cloudinary.com/decdqjawu/image/upload/t_Profile/v1743723543/ChatGPT_Image_3_abr_2025_20_35_52_i6p0lf.png" alt="Portfolio image" />
            </div>
            <div id='header-nav' className={`${isOpen ? 'block' : 'hidden'} lg:inline-block`}>
              <ul className="text-center z-10 absolute w-full py-4 space-y-2 top-20 bg-themecolor/90 left-0 lg:static lg:bg-transparent lg:py-0 lg:space-y-0 lg:align-middle lg:space-x-4 lg:text-[17px]">
                <li className='list-none block w-full lg:inline-block lg:w-auto'>
                  <a href="#AboutMe" className='relative lg:before:absolute lg:before:-bottom-1 lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn'>Inicio</a>
                </li>
                <li className='list-none block w-full lg:inline-block lg:w-auto'>
                  <a href="#AboutMe" className='relative lg:before:absolute lg:before:-bottom-1 lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn'>Sobre mí</a>
                </li>
                <li className='list-none block w-full lg:inline-block lg:w-auto'>
                  <a href="#Projects" className='relative lg:before:absolute lg:before:-bottom-1 lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn'>Proyectos</a>
                </li>
                <li className='list-none block w-full lg:inline-block lg:w-auto'>
                  <a href="#Educations" className='relative lg:before:absolute lg:before:-bottom-1 lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn'>Educación</a>
                </li>
                <li className='list-none block w-full lg:inline-block lg:w-auto'>
                  <a href="#Skills" className='relative lg:before:absolute lg:before:-bottom-1 lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn'>Habilidades</a>
                </li>
                <button className='relative lg:before:absolute lg:before:-bottom-1 lg:before:left-0 lg:before:right-0 lg:before:h-px lg:before:bg-black lg:hover:before:w-full lg:before:animate-lineOut lg:hover:before:animate-lineIn'> <a href="public/CVNICOLASCUELLO.docx.pdf" download="NicolasCuello_cv.pdf" className="block w-full h-full">
    Descargar CV
                </a></button>
              </ul>
            </div>
            <ul className='space-x-3'>
              <a className='list-none inline-block' href="https://github.com/NicolasCuello74" target="_blank" rel="noreferrer">
                <img src={git} alt="GitHub" className="w-6 h-6" />
              </a>
              <a className='list-none inline-block' href="https://www.linkedin.com/in/nicolascuello/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a className='list-none inline-block' href="mailto:nicocuello7@gmail.com">
                <img src={gmail} alt="Email" className="w-6 h-6" />
              </a>
            </ul>
            <button class="mobile-nav-toggle inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:hidden w-[26px] h-[10px]" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Nav;