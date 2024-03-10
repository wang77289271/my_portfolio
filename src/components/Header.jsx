import { motion } from 'framer-motion'
import { images } from '../constants'
import ButtonSvgHeader from '../assets/svg/ButtonSvgHeader'
import ButtonSvgEllipse from '../assets/svg/ButtonSvgEllipse'
import Section from './Section'
import { HeaderBackgroundCircles } from './design/Hero'
import { heroBackground } from '../assets'
import HeaderBgSvg from '../assets/svg/HeaderBgSvg'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  const [flutter, profile_2, redux, sass] = images
  return (
    <Section
      // crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      className='w-full h-full flex justify-center items-center flex-col pt-[6rem] px-8 lg:flex-row relative'
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        style={{ flex: '0.65' }}
        className='flex flex-col justify-start items-start h-[400px] mb-8 z-2'
      >
        <div className='w-full h-full flex flex-col justify-start mx-8 lg:ml-0'>
          <div className='flex justify-center items-center py-4 px-8 flex-row w-auto relative'>
            <span className='text-[2.5rem]'>👋</span>
            <div className='ml-4'>
              <p className='leading-10 mb-1 text-[0.8rem] text-left whitespace-nowrap'>
                Hello, I am
              </p>
              <h1 className='text-[2.75rem] font-extrabold whitespace-nowrap'>
                Ye Wang
              </h1>
            </div>
            {ButtonSvgHeader(300, 124, 'top-0', 0.9, 0)}
          </div>

          <div className='flex justify-center items-center py-4 px-8 flex-col w-auto relative mt-12 mr-12'>
            <p className='w-full text-[0.8rem] text-right leading-4 uppercase whitespace-nowrap'>
              Web Developer
            </p>
            <p className='w-full text-[0.8rem] text-right leading-4 uppercase whitespace-nowrap'>
              Web Designer
            </p>
            <p className='w-full text-[0.8rem] text-right leading-4 uppercase whitespace-nowrap'>
              Freelancer
            </p>
            {ButtonSvgHeader(200, 124, 'right-0', 0.7, 0.4)}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.2, delayChildren: 0.3 }}
        className='flex-1 h-full flex justify-end items-end relative z-2'
      >
        <img
          src={profile_2}
          alt='profile_bg'
          className='object-contain w-full h-full z-1 pb-18 min-w-[470px]'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        style={{ flex: '0.65' }}
        className='flex flex-col justify-evenly items-start h-full ml-12 z-2'
      >
        <div className='relative flex justify-center items-center w-[100px] h-[100px]'>
          <img src={flutter} alt='flutter' className='w-[60%] h-[60%]' />
          {ButtonSvgEllipse(100, 1, 0)}
        </div>
        <div className='relative flex justify-center items-center w-[150px] h-[150px] m-[1.75rem]'>
          <img src={redux} alt='redux' className='w-[60%] h-[60%]' />
          {ButtonSvgEllipse(150, 1, 0.4)}
        </div>
        <div className='relative flex justify-center items-center w-[75px] h-[75px]'>
          <img src={sass} alt='sass' className='w-[60%] h-[60%]' />
          {ButtonSvgEllipse(75, 1, 0.2)}
        </div>
      </motion.div>
      {HeaderBgSvg()}
      <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
        <HeaderBackgroundCircles />
      </div>
    </Section>
  )
}

export default Header
