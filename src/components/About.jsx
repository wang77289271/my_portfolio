import React, { useState } from 'react'
import { abouts } from '../constants'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'
import Section from './Section'
import { curve } from '../assets'
import Button from './Button'

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <Section id='features'>
      <div className='container relative z-2'>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
          <h2 className='h2 mb-6'>
            Crafting Engaging and Accessible&nbsp;Digital{' '}
            <span className='inline-block relative'>
              Worlds
              <img
                src={curve}
                className='absolute top-full left-0 w-full xl:-mt-2'
                width={624}
                height={28}
                alt='Curve'
              />
            </span>
          </h2>
        </div>

        <div className='flex justify-center flex-wrap gap-10 mb-10'>
          {abouts.map((about, index) => (
            <div
              key={about.id}
              className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
              style={{ backgroundImage: `url(${about.backgroundUrl})` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='relative z-2 flex flex-col min-h-[10rem] p-[2.4rem] pointer-events-none'>
                <h5 className='h5 mb-5'>{about.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{about.text}</p>
                {/* <div className='flex items-center mt-auto'>
                  <img
                    src={about.iconUrl}
                    width={48}
                    height={48}
                    alt={about.title}
                  />
                  <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                    Explore more
                  </p>
                  <Arrow />
                </div> */}
              </div>
              {hoveredIndex === index && <GradientLight />}
              <div
                className='absolute inset-0.5 bg-n-8'
                style={{ clipPath: 'url(#abouts)' }}
              >
                <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                  {about.imageUrl && (
                    <img
                      src={about.imageUrl}
                      width={380}
                      height={362}
                      alt={about.title}
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
        <div className='w-full text-center'>
          <Button href='/#'>
            <span>Explore more {'>'}</span>
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default About
