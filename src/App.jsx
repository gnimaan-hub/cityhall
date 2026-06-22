import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Gallery from './sections/Gallery.jsx'
import Experience from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'

const Showroom = lazy(() => import('./sections/Showroom.jsx'))

function LazyShowroom() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} id="showroom">
      {visible && (
        <Suspense fallback={null}>
          <Showroom />
        </Suspense>
      )}
    </div>
  )
}

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <LazyShowroom />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
