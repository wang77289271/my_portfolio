import Section from './Section'
import Heading from './Heading'
import Button from './Button'
import { useEffect } from 'react'
import { designWebsites } from '../constants'

const DesignDemos = () => {
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Section crosses nopadding id='designDemos'>
        <Heading
          tag='Ready to get started'
          title='My Creative Design Section'
        />
        {designWebsites.map((item, index) => (
          <div
            className='flex flex-col lg:flex-row border-t-[1px] border-[#26242C] py-28 lg:py-[12rem]'
            key={item.id}
          >
            <div
              className={`order-2 ${
                index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
              } flex-1 w-[90%] sm:w-[80%] lg:w-full mx-auto lg:ml-16`}
            >
              <div className='flex flex-col h-full justify-around py-4 lg:py-6'>
                <hr className='w-full h-[2px] bg-[#26242C] border-0 mt-12 lg:hidden' />
                <div className='ml-0 mr-4 lg:mr-12'>
                  <h2 className='w-full mb-4 mt-12 lg:mt-0 text-[1.2rem] md:text-[1.5rem] font-normal leading-[2.5rem]'>
                    {item.title}
                  </h2>
                  <p className='w-full mb-6 text-n-2 text-[1rem] font-light md:text-[1.1rem] lg:mb-8 tracking-[0.2px]'>
                    {item.desc}
                  </p>
                </div>
                <div className='ml-0 mr-4'>
                  {item.url && (
                    <Button href={item.url} target='_blank'>
                      See Details
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`order-1 ${
                index % 2 === 0 ? 'lg:order-2 lg:mr-16' : 'lg:order-1 lg:ml-16'
              } flex-1 w-[90%] sm:w-[80%] lg:w-full mx-auto `}
            >
              {item.image && (
                <img className='w-full' src={item.image} alt={item.title} />
              )}
            </div>
          </div>
        ))}
      </Section>
    </div>
  )
}

export default DesignDemos
