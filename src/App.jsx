import './App.css'
import About from './components/About'
import ContactMe from './components/ContactMe'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Proyect from './components/Proyect'
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {

  return (
    <main id="home" className="text-white bg-gray-800">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Proyect />
      <hr className='opacity-30' />
      <ContactMe />
      <Footer/>
    </main>
  )
}

export default App
