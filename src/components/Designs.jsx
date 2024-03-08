import Section from './Section'
import { motion } from 'framer-motion'
import PosterHoverWrap from './PosterHoverWrap'
import { designImages } from '../constants'
import Button from './Button'

const Designs = () => {
  const [
    design_bg_1,
    design_bg_2,
    design_bg_3,
    design_bg_4,
    design_bg_5,
    design_bg_6,
    design_bg_7,
  ] = designImages
  return (
    <Section
      // crosses
      nopadding
      crossesOffset='lg:translate-y-[5.25rem]'
      className='w-full h-full border-y-[1px] border-[#26242C]'
    >
      <motion.div
        whileInView={{ scale: [0.9, 1], y: [10, 0] }}
        transition={{ duration: 0.5 }}
        className='w-full min-h-lvh flex items-center relative justify-start overflow-hidden bg-[#0e0c15]'
      >
        <div className='z-3 ml-12 lg:ml-16'>
          <h2 className='mb-6 text-[1.25rem] md:text-[2.25rem] font-bold leading-[2.5rem]'>
            I know that <span className='text-[#AC6AFF]'>Good Design</span>{' '}
            <br /> means <span className='text-[#AC6AFF]'>Good Business</span>
          </h2>
          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 text-[0.8rem] md:text-[1.25rem] lg:mb-8'>
            Head start your stylish website with a gorgeous template
          </p>
          <Button>View Demos</Button>
        </div>
        <div
          className='flex flex-col gap-[20px] absolute 
        -right-[200%] lg:-right-[100%] xl:-right-[80%] rotate-[45deg] z-2'
        >
          <div className='w-full flex flex-row gap-[15px] justify-center'>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[44%]'>
              <img src={design_bg_1} alt='poster-1' />
            </PosterHoverWrap>
          </div>
          <div className='w-full flex flex-row gap-[15px]'>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[28%]'>
              <img src={design_bg_2} alt='poster-2' />
            </PosterHoverWrap>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[10%]'>
              <img src={design_bg_3} alt='poster-3' />
            </PosterHoverWrap>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[28%]'>
              <img src={design_bg_4} alt='poster-4' />
            </PosterHoverWrap>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[10%]'>
              <img src={design_bg_5} alt='poster-5' />
            </PosterHoverWrap>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[28%]'>
              <img src={design_bg_7} alt='poster-7' />
            </PosterHoverWrap>
          </div>
          <div className='w-full flex flex-row gap-[15px] ml-[12%] justify-center'>
            <PosterHoverWrap className='overflow-hidden rounded-md shadow-md border-4 border-white w-[44%]'>
              <img src={design_bg_6} alt='poster-6' />
            </PosterHoverWrap>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Designs
