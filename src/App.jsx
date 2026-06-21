import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Showroom from './sections/Showroom.jsx'
import Gallery from './sections/Gallery.jsx'
import Experience from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Showroom />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
