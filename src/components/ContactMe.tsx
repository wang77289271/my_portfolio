import { ChangeEvent, FormEvent, useState } from 'react'
import Section from './Section'
import Heading from './Heading'
import ButtonSvg from '@/assets/svg/ButtonSvg'

interface FormData {
  name: string
  email: string
  message: string
}

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsSending(true)
      const response = await fetch(
        'https://findyewang.com/api/send-email.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        console.log('Message sent successfully')
        setIsSending(false)
        setFormData({
          name: '',
          email: '',
          message: '',
        })
        alert('Message sent successfully ')
      } else {
        console.error('Failed to send email')
        alert('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Error sending message')
    } finally {
      setIsSending(false)
    }
  }
  const inputClass =
    'w-full px-6 py-4 rounded-lg text-8 font-light mb-4 placeholder:text-[0.8rem]'

  return (
    <Section crosses className='flex flex-col justify-center' id='contact'>
      <Heading title='Take A Coffe & Chat With Me' tag='Contact Me' />
      <div className='w-[80%] md:w-[70%] lg:w-[50%] m-auto'>
        <form onSubmit={handleSubmit}>
          <input
            className={inputClass}
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
          />
          <input
            className={inputClass}
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
          <textarea
            className={inputClass}
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
          ></textarea>
          <button
            type='submit'
            className='w-full button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-1 '
          >
            <span className='relative z-10'>
              {isSending ? 'Sending...' : 'Send'}
            </span>
            {ButtonSvg(false)}
          </button>
        </form>
      </div>
    </Section>
  )
}

export default ContactMe
