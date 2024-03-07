const ButtonSvgEllipse = (size) => (
  <>
    <svg
      className='absolute'
      width={size}
      height={size}
      viewBox='0 0 245 245'
      fill='none'
    >
      <circle
        cx='122.5'
        cy='122.5'
        r='121.5'
        stroke='url(#paint0_linear_4_8)'
        strokeWidth='1.5'
      />
      <defs>
        <linearGradient
          id='paint0_linear_4_8'
          x1='44'
          y1='34.5'
          x2='188'
          y2='216'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#89F9E8' />
          <stop offset='0.21' stopColor='#FACB7B' />
          <stop offset='0.4' stopColor='#D87CEE' />
          <stop offset='0.605' stopColor='#FACB7B' />
          <stop offset='0.8' stopColor='#9099FC' />
          <stop offset='1' stopColor='#89F9E8' />
        </linearGradient>
      </defs>
    </svg>
  </>
)

export default ButtonSvgEllipse
