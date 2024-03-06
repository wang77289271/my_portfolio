import ButtonGradient from './assets/svg/ButtonGradient'
import About from './components/About'
import Collaboration from './components/Collaboration'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'

function App() {
  return (
    <>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Header />
        <Hero />
        <About />
        <Collaboration />
        <Works />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
