import { useState } from 'react'
import { grid } from '../assets'
import { works } from '../constants'
import Heading from './Heading'
import Section from './Section'
import TagLine from './TagLine'
import Button from './Button'

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  return (
    <Section
      crosses
      id='works'
      className='overflow-hidden block z-5 border-t-[1px] border-[#26242C]'
    >
      <div className='container md:pb-10'>
        <Heading
          tag='Ready to get started'
          title='My Creative Portfolio Section'
        />
        <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
          {works.map((work, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] 
              ${hoveredIndex === index ? 'bg-conic-gradient' : 'bg-n-6'}`}
              key={work.id}
            >
              <div className='relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15'>
                <div className='absolute top-0 left-0 max-w-full'>
                  <img
                    className='w-full'
                    src={grid}
                    width={550}
                    height={550}
                    alt='Grid'
                  />
                </div>
                <div className='relative z-1'>
                  <div className='max-w-[27rem] mb-8 md:mb-20'>
                    <TagLine>{work.date}</TagLine>
                  </div>
                  <div className='mb-10 -my-10 -mx-15'>
                    <img
                      className='w-full'
                      src={work.imageUrl}
                      width={628}
                      height={426}
                      alt={work.title}
                    />
                  </div>
                  <h4 className='h4 mb-4'>{work.title}</h4>
                  <p className='body-2 text-n-4'>{work.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full text-center mt-6'>
        <Button href='#design'>↓ My Designs ↓</Button>
      </div>
    </Section>
  )
}

export default Works
