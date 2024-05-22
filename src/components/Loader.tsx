import { LoaderIcon } from 'lucide-react'

const Loader = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <div className='relative animate-spin'>
        <LoaderIcon className='text-n-1/80' />
      </div>
      <p className='text-sm text-n-1/80 mt-2'>Loading...</p>
    </div>
  )
}

export default Loader
