import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Section from './Section'
import Heading from './Heading'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Contact = () => {
  const form = useRef()

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
            />
          </div>
          <div>
            <input
              className='w-full px-6 py-4 rounded-lg text-8 font-light mb-4 placeholder:text-[0.8rem]'
              type='email'
              name='email'
              placeholder='Your Email'
            />
          </div>
          <div>
            <textarea
              className='w-full px-6 py-4 rounded-lg text-8 font-light mb-4 placeholder:text-[0.8rem]'
              name='message'
              placeholder='Your Message'
            />
          </div>
          <div className='button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 w-full'>
            <input type='submit' value='Send' />
            {ButtonSvg()}
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Contact
