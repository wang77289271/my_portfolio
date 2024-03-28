import Section from './Section'
import Button from './Button'
import { gradientStyle } from '../constants'

const ProjectHeader = ({ project }) => {
  return (
    <Section id='projectHero'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex flex-1 flex-col items-start z-3 md:ml-12 md:mr-12 lg:ml-16'>
          <div className='ml-0 lg:ml-12'>
            <h2 className='w-full lg:w-[80%] mb-4 text-[1.8rem] md:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[3.5rem]'>
              <span style={gradientStyle}>{project.title}</span>
            </h2>
            <p className='w-full lg:w-[70%] mb-6 text-n-2 text-[1rem] font-light md:text-[1.1rem] lg:mb-8'>
              {project.text}
            </p>
            <div className='w-full lg:w-[70%] flex flex-wrap gap-2'>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-3 py-1 border-[1px] border-n-6 text-n-4 rounded-md text-[0.9rem]'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='mt-14 '>
              <Button href='#project-intro'>Details 👇</Button>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <img
            src={project.imageUrl}
            alt='mydesigns background'
            className='w-[80%]'
          />
        </div>
      </div>
    </Section>
  )
}

export default ProjectHeader
