import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#26262B] overflow-x-hidden text-primary">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <Journey />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
