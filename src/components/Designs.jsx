import Section from './Section'
import { motion } from 'framer-motion'
import PosterHoverWrap from './design/PosterHoverWrap'
import { designRotateImages, gradientStyle } from '../constants'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Designs = () => {
  const navigate = useNavigate()
  return (
    <Section
      nopadding
      crossesOffset='lg:translate-y-[5.25rem]'
      id='design'
      className='w-full h-full border-y-[1px] border-[#26242C]'
    >
      <motion.div
        whileInView={{ scale: [0.9, 1], y: [10, 0] }}
        transition={{ duration: 0.5 }}
        className='w-full min-h-lvh flex items-center relative justify-start overflow-hidden bg-[#0e0c15]'
      >
        <div className='z-3 ml-12 lg:ml-16'>
          <h2 className='mb-6 text-[1.25rem] md:text-[2.25rem] font-bold leading-[2.5rem]'>
            I know that <span style={gradientStyle}>Good Design</span> <br />{' '}
            means <span style={gradientStyle}>Good Business</span>
          </h2>
          <p className='body-1 max-w-2xl mx-auto mb-6 text-n-2 text-[0.8rem] md:text-[1.25rem] lg:mb-8'>
            Explore how effective design can elevate your projects and captivate
            your audience.
          </p>
          <Button onClick={() => navigate('/designs')}>View Demos</Button>
        </div>

        <div
          className='flex flex-col gap-[10px] absolute 
          -right-[200%] lg:-right-[100%] xl:-right-[80%] rotate-[45deg] z-2'
        >
          <div className='w-full flex flex-row gap-[10px] justify-center'>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[44%]'>
              <img src={designRotateImages[0].top[0].image} alt='poster-1' />
            </PosterHoverWrap>
          </div>
          <div className='w-full flex flex-row gap-[10px]'>
            {designRotateImages[0].mid.map((item) => (
              <PosterHoverWrap
                key={item.id}
                className={`overflow-hidden rounded-md shadow-md border-4 border-white ${item.size}`}
              >
                <img src={item.image} alt='poster-2' />
              </PosterHoverWrap>
            ))}
          </div>
          <div className='w-full flex flex-row gap-[15px] ml-[12%] justify-center'>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[44%]'>
              <img src={designRotateImages[0].bottom[0].image} alt='poster-6' />
            </PosterHoverWrap>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Designs
