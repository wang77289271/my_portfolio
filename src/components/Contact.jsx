import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Section from './Section'
import Heading from './Heading'
import Button from './Button'
import { gradientStyle } from '../constants'

const Contact = () => {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    setName('')
    setEmail('')
    setMessage('')
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
    }, 3000)
  }
  return (
    <Section crosses className='flex flex-col justify-center' id='contact'>
      <Heading title='Take A Coffe & Chat With Me' tag='Contact Me' />
      <div className='w-[80%] md:w-[70%] lg:w-[50%] m-auto'>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              className='w-full px-6 py-4 rounded-lg text-8 font-light mb-4 placeholder:text-[0.8rem]'
              type='text'
              name='name'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className='w-full px-6 py-4 rounded-lg text-8 font-light mb-4 placeholder:text-[0.8rem]'
              type='email'
              name='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className='w-full px-6 py-4 rounded-lg text-8 font-light mb-4 placeholder:text-[0.8rem]'
              name='message'
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {isSent ? (
            <div className='w-full text-center'>
              <p style={gradientStyle} className='text-[1rem] lg:text-[1.2rem]'>
                Thank you for contacting me. <br className='sm:hidden' />I will
                get back to you shortly.
              </p>
            </div>
          ) : (
            <Button className='w-full' type='submit'>
              Send
            </Button>
          )}
        </form>
      </div>
    </Section>
  )
}

export default Contact
