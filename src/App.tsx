import { useScrollAnimation } from './hooks/useScrollAnimation'
import Hero from './components/Hero'
import Services from './components/Services'
import Values from './components/Values'
import About from './components/About'
import Process from './components/Process'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  useScrollAnimation()

  return (
    <>
      <Hero />
      <Services />
      <Values />
      <About />
      <Process />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
