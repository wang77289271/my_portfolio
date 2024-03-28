import Section from './Section'
import Button from './Button'

const ProjectContent = ({ project }) => {
  return (
    <Section crosses id='project-intro'>
      {/* intro */}
      <div className='w-[85%] m-auto'>
        <h2 className='flex-1 text-[2.5rem] mb-12 text-n-2'>📖 Introduction</h2>
        <p className='flex-2 text-[0.9rem] lg:text-[1.1rem] text-n-2 font-light leading-6 lg:leading-8 tracking-[0.3px] lg:tracking-[0.5px]'>
          {project.desc}
        </p>
      </div>
      <hr className='w-[85%] mx-auto h-[2px] bg-[#26242C] border-0 m-12' />
      {/* project feature */}
      <div id='project-feature' className='w-[85%] m-auto text-n-2'>
        <h2 className='text-[2.5rem] mb-16'>✨ Key Features</h2>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 order-2 lg:order-1'>
            {project.features.map((feature, index) => (
              <div key={index} className='mb-6'>
                <h3 className='text-[1.5rem] mb-4'>
                  <span className='mr-2'>👉</span> {feature.name}
                </h3>
                <p className='ml-9 font-light text-[0.9rem] lg:w-[80%]'>
                  {feature.content}
                  <br />
                  <hr className='mx-auto h-[2px] bg-[#26242C] border-0 mt-4' />
                </p>
              </div>
            ))}
          </div>
          <div className='flex-1 m-4 order-1 lg:order-2'>
            <img
              src={project.featureImg}
              alt={project.title}
              className='w-full h-auto mb-12 lg:m-0'
            />
          </div>
        </div>

        <div className='flex gap-4 flex-wrap w-full mt-10 ml-9'>
          {project.urls.map((item) => (
            <Button
              key={item.name}
              className='px-16'
              href={item.url}
              target='_blank'
            >
              <span>{item.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProjectContent
