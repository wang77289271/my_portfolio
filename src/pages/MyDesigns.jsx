import ButtonGradient from '../assets/svg/ButtonGradient'
import { Contact, DesignHeader, Footer, Navbar } from '../components'
import DesignDemos from '../components/DesignDemos'
import { designNavigation } from '../constants'

const MyDesigns = () => {
  return (
    <>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Navbar navigation={designNavigation} />
        <DesignHeader />
        <DesignDemos />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default MyDesigns
