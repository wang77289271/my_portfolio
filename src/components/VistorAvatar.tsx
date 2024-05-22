import { vistor } from '@/assets'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const VistorAvatar = () => {
  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage src={vistor} />
      <AvatarFallback>Hello</AvatarFallback>
    </Avatar>
  )
}

export default VistorAvatar
