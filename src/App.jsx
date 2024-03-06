import ButtonGradient from './assets/svg/ButtonGradient'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Header />
        <Hero />
        <About />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
