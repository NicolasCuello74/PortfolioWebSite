import AboutMe from './components/AboutMe'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Educations from './components/Educations'

function App() {

  return (
    <>
      <main className='scroll-smooth flex-col font-mono'>
        <Nav/>
        <AboutMe/>
        <Educations/>
        <Projects/>
        <Skills/>
        <Footer/>
      </main>
    </>
  )
}

export default App
