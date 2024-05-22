import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Loader from './Loader'
import { cn } from '@/lib/utils'
import VistorAvatar from './VistorAvatar'
import YeWangAvatar from './YeWangAvatar'
import { useState } from 'react'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { getMessages } from './api/getMessages'
import Typewriter from './TypeWriter'

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required',
  }),
})

const Conversation = () => {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const userMessage: ChatCompletionMessageParam = {
      role: 'user',
      content: values.prompt,
    }
    const newMessages = [...messages, userMessage]

    const response = await getMessages(newMessages)

    if (response) {
      setMessages((current) => [...current, userMessage, response])
    } else {
      console.error('Failed to get a valid response from the API')
    }
  }

  console.log(messages)

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          {/* <Button variant='outline'>Ask Ye Wang</Button> */}
          <button className='w-[230px] md:w-[330px] lg:w-[500px] py-0 flex flex-row justify-between items-center '>
            <span className='w-full text-n-1/80 font-light bg-n-4/30  text-left p-2 rounded-l-md cursor-text whitespace-nowrap overflow-x-scroll'>
              Ask me anything here!{' '}
              <span className='text-n-1/50 text-[14px]'>
                eg:{' '}
                <Typewriter
                  words={[
                    'what are your strengths?  ',
                    'Tell me about yoursel!.  ',
                  ]}
                  typingSpeed={100}
                />
              </span>
            </span>
            {/* <input
              className='w-full text-n-1/80 font-light bg-n-4/30  text-left p-2 rounded-l-md'
              placeholder='Ask me anything? (eg: what are your strengths)'
              readOnly
            /> */}
            {/* <span className='text-n-1/80 font-medium py-2 px-4 bg-[#2b5fa4]/30 rounded-r-md whitespace-nowrap'> */}
            <span className='text-n-1/80 py-2 px-4 text-white bg-gradient-to-r from-purple-700 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-r-lg whitespace-nowrap'>
              Enter
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          avoidCollisions={true}
          className='relative w-[280px] md:w-[380px] lg:w-[550px] h-[250px] md:h-[300px] lg:h-[350px] bg-n-8/50 backdrop-blur border border-n-1/10'
          style={{ zIndex: '9' }}
        >
          <div className='absolute -bottom-[4rem] left-0 right-0 '>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='rounded-lg border border-n-1/10 w-full py-2 px-2 md:px-3 focus-within:shadow-sm flex flex-row  gap-2 bg-n-12'
              >
                <FormField
                  name='prompt'
                  render={({ field }) => (
                    <FormItem className='flex-[3] flex items-center'>
                      <FormControl className='m-0 p-0'>
                        <input
                          className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent text-white
                          w-full bg-transparent
                          '
                          disabled={isLoading}
                          placeholder='Why should we hire you?'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <button className='flex-1 text-white bg-gradient-to-r from-purple-700 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center transition-all flex justify-center'>
                  <span className='hidden lg:flex'>Ask Ye Wang</span>
                  <span className='hidden md:flex lg:hidden'>Ask me</span>
                  <span className='flex md:hidden'>Ask</span>
                </button>
              </form>
            </Form>
          </div>
          {/* response */}
          <div className='space-y-4 h-[200px] md:h-[270px] lg:h-[320px] overflow-scroll'>
            {isLoading && (
              <div className='p-8 rounded-lg w-full flex items-center justify-center'>
                <Loader />
              </div>
            )}
            <div className='flex flex-col-reverse gap-4'>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-4 w-full flex items-start gap-x-8 rounded-lg',
                    message.role === 'user'
                      ? 'bg-white/10 border border-black/10'
                      : 'bg-muted/10'
                  )}
                >
                  {message.role === 'user' ? (
                    <VistorAvatar />
                  ) : (
                    <YeWangAvatar />
                  )}
                  {typeof message.content === 'string' ? (
                    <p className='text-[15px] text-n-1/80 font-light'>
                      {message.content}
                    </p>
                  ) : (
                    // Render appropriate fallback content if message.content is not a string
                    <span>Unsupported message format</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default Conversation
