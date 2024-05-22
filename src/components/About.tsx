import { useState } from 'react'
import { abouts } from '../constants'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'
import { curve } from '../assets'
import Section from './Section'

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <Section crosses id='about'>
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

        <div className='flex flex-col items-center lg:flex-row gap-10 mb-10 lg:items-stretch'>
          {abouts.map((about, index) => (
            <div
              key={about.id}
              style={{ backgroundImage: `url(${about.backgroundUrl})` }}
              className={`block flex-1 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] lg:max-w-[24rem]`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='relative z-2 flex flex-col min-h-[10rem] p-[2.4rem] pointer-events-none'>
                <h5 className='h5 mb-5'>{about.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{about.text}</p>
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
      </div>
    </Section>
  )
}

export default About
