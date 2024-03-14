import Section from './Section'
import Button from './Button'
import myDesignBg from '../assets/myDesigns/myDesignBg.png'

const DesignHeader = () => {
  return (
    <Section id='desginHero'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex flex-1 flex-col items-start z-3 md:ml-12 md:mr-12 lg:ml-16'>
          <div className='ml-0 lg:ml-12'>
            <h2 className='w-full lg:w-[80%] mb-4 text-[1.8rem] md:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[3.5rem]'>
              Crafting&nbsp;Memorable{' '}
              <span className='text-[#AC6AFF]'>Design</span>&nbsp;Experiences
            </h2>
            <p className='w-full lg:w-[70%] mb-6 text-n-2 text-[1rem] font-light md:text-[1.1rem] lg:mb-8'>
              Crafting unique designs that authentically represent business
              values.
            </p>
            <Button href='#designDemos'>See Details</Button>
          </div>
        </div>
        <div className='flex-1'>
          <img src={myDesignBg} alt='mydesigns background' />
        </div>
      </div>
    </Section>
  )
}

export default DesignHeader
