import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'


const App = () => {

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-2">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default App
