import { easeInOut, motion } from 'framer-motion'

const ButtonSvgHeader = ({
  width,
  height,
  className,
  duration,
  delay,
}: {
  width: string
  height: string
  className: string
  duration: string | number
  delay: number
}) => {
  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  }
  return (
    <>
      <svg
        className={`absolute ${className}`}
        width={width}
        height={height}
        viewBox='0 0 334 124'
        fill='none'
      >
        <motion.path
          d='M2 32C2 15.4315 15.4315 2 32 2H302C318.569 2 332 15.4315 332 32V92C332 108.569 318.569 122 302 122H32C15.4314 122 2 108.569 2 92V32Z'
          stroke='url(#paint0_linear_2_6)'
          strokeWidth='3'
          variants={icon}
          initial='hidden'
          animate='visible'
          transition={{
            duration: duration,
            delay: delay,
            type: 'keyframe',
            stiffness: 100,
            ease: easeInOut,
          }}
        />
        <defs>
          <linearGradient
            id='paint0_linear_2_6'
            x1='6.02439'
            y1='4.98013'
            x2='301.51'
            y2='174.993'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#89F9E8' />
            <stop offset='0.195' stopColor='#FACB7B' />
            <stop offset='0.41' stopColor='#D87CEE' />
            <stop offset='0.61' stopColor='#FACB7B' />
            <stop offset='0.815' stopColor='#9099FC' />
            <stop offset='1' stopColor='#89F9E8' />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default ButtonSvgHeader
