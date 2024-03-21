import ButtonGradient from '../assets/svg/ButtonGradient'
import { navigation } from '../constants'
import {
  About,
  Collaboration,
  Navbar,
  Works,
  Header,
  Designs,
  Contact,
  Footer,
} from '../components'

const Home = () => {
  return (
    <>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Navbar navigation={navigation} />
        <Header />
        <About />
        <Collaboration />
        <Works />
        <Designs />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default Home
