import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    if (count === 0) {
      clearInterval(timer)
      navigate('/')
    }

    return () => clearInterval(timer)
  }, [count])
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-lvh bg-black'>
      <h2 className='text-[10rem] leading-[9rem]'>404</h2>
      <p className='text-[2rem]'>Page Not Found</p>
      <h5 className='text-[1.5rem] mt-6 font-light'>
        Going back to home page in{' '}
        <span className='text-[#f53e3e] text-[2rem] font-normal'>{count}</span>{' '}
        second(s)
      </h5>
    </div>
  )
}

export default NotFound
