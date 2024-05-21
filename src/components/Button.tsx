import { ReactNode } from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

type ButtonProps = {
  className?: string
  href?: any
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
  children?: ReactNode
  px?: string
  white?: boolean
  target?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white = false,
  target,
  type = 'button',
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`

  const spanClasses = 'relative z-10'

  const renderButton = () => (
    <button className={classes} onClick={onClick} type={type}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(false)}
    </button>
  )

  const renderLink = () => (
    <a className={classes} href={href} onClick={onClick} target={target}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(false)}
    </a>
  )

  return href === 'undefined' ? renderButton() : renderLink()
}

export default Button
