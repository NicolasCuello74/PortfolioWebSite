import AboutMe from './sections/AboutMe'
import Nav from './sections/Nav'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
import Educations from './sections/Educations'

function App() {

  return (
    <>
      <main className='scroll-smooth flex-col'>
        <Nav/>
        <AboutMe/>
        <Projects/>
        <Educations/>
        <Skills/>
        <Footer/>
      </main>
    </>
  )
}

export default App
