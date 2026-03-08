import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
