import { useEffect } from 'react'
import ButtonGradient from '../assets/svg/ButtonGradient'
import { Contact, DesignHeader, Footer, Navbar } from '../components'
import DesignDemos from '../components/DesignDemos'
import { designNavigation } from '../constants'
import { easeInOut, motion } from 'framer-motion'

const MyDesigns = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'
      >
        <Navbar navigation={designNavigation} />
        <DesignHeader />
        <DesignDemos />
        <Contact />
        <Footer />
      </motion.div>
      <ButtonGradient />
    </>
  )
}

export default MyDesigns
