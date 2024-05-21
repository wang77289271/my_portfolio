import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PosterHoverWrapProps {
  className?: string
  children: ReactNode
}

const PosterHoverWrap: React.FC<PosterHoverWrapProps> = (props) => {
  return (
    <motion.div whileHover={{ scale: [1, 1.01] }} className={props.className}>
      {props.children}
    </motion.div>
  )
}

export default PosterHoverWrap
