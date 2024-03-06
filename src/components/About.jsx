import React, { useState } from 'react'
import Heading from './Heading'
import { abouts } from '../constants'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <section id='features'>
      <div className='container relative z-2'>
        <Heading
          className='md:max-w-md lg:max-w-2xl'
          title='Chat Smarter, Not Harder with Brainwave'
        />
      </div>
      <div className='flex flex-wrap gap-10 mb-10'>
        {abouts.map((about, index) => (
          <div
            key={about.id}
            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
            style={{ backgroundImage: `url(${about.backgroundUrl})` }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
              <h5 className='h5 mb-5'>{about.title}</h5>
              <p className='body-2 mb-6 text-n-3'>{about.text}</p>
              <div className='flex items-center mt-auto'>
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
              </div>
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
    </section>
  )
}

export default About
