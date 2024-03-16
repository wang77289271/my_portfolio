import { motion } from 'framer-motion'
import { headerTitles, images } from '../constants'
import ButtonSvgEllipse from '../assets/svg/ButtonSvgEllipse'
import Section from './Section'
import { BackgroundCircles, Gradient } from './design/Hero'
import { heroBackground } from '../assets'
import { useRef } from 'react'
import { ScrollParallax } from 'react-just-parallax'

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
  const parallaxRef = useRef(null)
  const [flutter, profile_3, redux, sass] = images
  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'
    >
      <div className='container relative' ref={parallaxRef}>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 mt-[4rem] pt-[8rem]'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient w-[70%] mx-auto'>
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />

              <div className='relative aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]'>
                <div className='absolute bottom-0 w-[100%] mx-auto '>
                  <img
                    src={profile_3}
                    className='w-full rounded-b-[1rem]'
                    width={1024}
                    height={490}
                    alt='AI'
                  />
                </div>
                <ScrollParallax isAbsolutelyPositioned>
                  <motion.ul
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='absolute -top-[8rem] lg:-left-[12.5rem] lg:bottom-[15.5rem] px-1 py-1 flex lg:flex-col sm:items-end'
                  >
                    <div className='flex justify-center items-center py-4 px-8 flex-row w-auto relative bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl'>
                      <span className='text-[2.5rem]'>👋</span>
                      <div className='ml-4'>
                        <p className='leading-10 mb-1 text-[0.8rem] text-left whitespace-nowrap'>
                          Hello, I am
                        </p>
                        <h1 className='text-[2rem] font-extrabold whitespace-nowrap'>
                          Ye Wang
                        </h1>
                      </div>
                    </div>
                    <div className='flex justify-center items-center py-2 px-8 flex-col w-auto relative mt-4 ml-4 lg:ml-0 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl'>
                      {headerTitles.map((item) => (
                        <p
                          key={item.id}
                          className='w-full text-[0.8rem] text-left lg:text-right leading-5 tracking-[0.3px] capitalize whitespace-nowrap'
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                  </motion.ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <motion.ul
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='hidden absolute right-4 lg:-right-[14rem] bottom-[2rem] lg:bottom-[5.5rem] px-1 py-1  sm:flex sm:flex-col sm:items-end'
                  >
                    <div
                      className='flex flex-row lg:flex-col justify-evenly items-start h-full mt-12 lg:mt-0 lg:ml-12 z-2
                    bg-n-9/40 backdrop-blur lg:backdrop-blur-0 border border-n-1/10 rounded-2xl lg:bg-n-9/0 lg:border-0 gap-2 lg:gap-0 px-4 py-2
                    '
                    >
                      <div className='relative flex justify-center items-center w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]'>
                        <img
                          src={flutter}
                          alt='flutter'
                          className='w-[100%] h-[100%] bg-n-9/80 lg:bg-n-9/40 backdrop-blur rounded-lg lg:rounded-full p-2 lg:p-6'
                        />
                        {ButtonSvgEllipse(100, 1, 0, 'hidden lg:block')}
                      </div>
                      <div className='relative flex justify-center items-center w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] lg:m-[1.75rem]'>
                        <img
                          src={redux}
                          alt='redux'
                          className='w-[100%] h-[100%] bg-n-9/80 lg:bg-n-9/40 backdrop-blur rounded-lg lg:rounded-full p-2 lg:p-6'
                        />
                        {ButtonSvgEllipse(150, 1, 0.4, 'hidden lg:block')}
                      </div>
                      <div className='relative flex justify-center items-center w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'>
                        <img
                          src={sass}
                          alt='sass'
                          className='w-[100%] h-[100%] bg-n-9/80 lg:bg-n-9/40 backdrop-blur rounded-lg lg:rounded-full p-2 lg:p-6'
                        />
                        {ButtonSvgEllipse(75, 1, 0.2, 'hidden lg:block')}
                      </div>
                    </div>
                  </motion.ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
            <img
              src={heroBackground}
              className='w-full h-full opacity-80'
              width={1440}
              height={1800}
              alt='hero'
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  )
}

export default Header
