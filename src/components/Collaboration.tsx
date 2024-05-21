import { useState } from 'react'
import Section from './Section'
import { webSkills, uiSkills, collabContent, gradientStyle } from '../constants'
import { check, close, logo_name_1 } from '../assets'
import Button from './Button'
import { LeftCurve, RightCurve } from './design/Collaboration'
import { easeInOut, motion } from 'framer-motion'
import SkillsIcons from './design/SkillsIcons'

const Collaboration = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(
    collabContent.length > 0 ? 0 : null
  )
  const [description, setDescription] = useState<string | null>(
    collabContent.length > 0 ? collabContent[0].text : null
  )
  const toggleItem = (index: number, description: string) => {
    setExpandedItem(expandedItem === index ? null : index)
    setDescription(description)
  }
  return (
    <Section crosses={true} id='skills'>
      <div className='container lg:flex'>
        <div className='w-full lg:max-w-[25rem] flex flex-col justify-between'>
          <h2 className='h2 mb-4 md:mb-8'>
            Key <span style={gradientStyle}>skills</span> I bring to the table
          </h2>
          <ul className='w-full lg:max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item, index) => (
              <li className='mb-3 py-3' key={item.id}>
                <div
                  className='flex items-center cursor-pointer'
                  onClick={() => {
                    toggleItem(index, item.desc)
                  }}
                >
                  <img
                    src={expandedItem === index ? check : close}
                    width={24}
                    height={24}
                    alt='check'
                  />
                  <h6 className='body-2 ml-5'>{item.title}</h6>
                </div>
                {expandedItem === index && (
                  <motion.div
                    whileInView={{ y: [15, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                  >
                    <p className='body-2 mt-3 text-n-3 tracking-[0.2px]'>
                      {item.text}
                    </p>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
          <div>
            <Button href='#works'>My works ↓</Button>
          </div>
        </div>

        <div className='lg:ml-auto xl:w-[38rem] mt-4'>
          <p className='body-2 mb-8 text-n-3 md:mb-16 lg:mb-32 lg:w-[35rem] lg:mx-auto'>
            {description}
          </p>

          <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
            <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
              <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                  <img
                    src={logo_name_1}
                    width={48}
                    height={48}
                    alt='brainwave'
                  />
                </div>
              </div>
            </div>

            {expandedItem == 0 && <SkillsIcons icons={webSkills} />}
            {expandedItem == 1 && <SkillsIcons icons={uiSkills} />}

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
