import ButtonGradient from './assets/svg/ButtonGradient'
import About from './components/About'
import Collaboration from './components/Collaboration'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import Header from './components/Header'
import Designs from './components/Designs'

function App() {
  return (
    <>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Navbar />
        <Header />
        {/* <Hero /> */}
        <About />
        <Collaboration />
        <Works />
        <Designs />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
