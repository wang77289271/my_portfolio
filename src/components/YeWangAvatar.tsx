import { portrait } from '@/assets'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const YeWangAvatar = () => {
  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage src={portrait} />
      <AvatarFallback>Ye Wang</AvatarFallback>
    </Avatar>
  )
}

export default YeWangAvatar
