import { easeInOut, motion } from 'framer-motion'

const SkillsIcons = ({ icons }) => {
  return (
    <ul>
      {icons.map((icon, index) => (
        <motion.li
          whileInView={{ rotate: index * 45 }}
          transition={{ duration: 0.7, ease: easeInOut }}
          key={icon.id}
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom 
      `}
        >
          <div>
            <img
              className='m-auto'
              width={icon.width}
              height={icon.height}
              alt={icon.title}
              src={icon.icon}
            />
          </div>
        </motion.li>
      ))}
    </ul>
  )
}

export default SkillsIcons
