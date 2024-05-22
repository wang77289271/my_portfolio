import { aiInstructionMessage } from '@/constants'
import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

const instructionMessage: ChatCompletionMessageParam = {
  role: 'system',
  content: aiInstructionMessage.content,
}

export const getMessages = async (messages: ChatCompletionMessageParam[]) => {
  try {
    if (!openai.apiKey) throw new Error('OpenAI API Key not configured')
    if (!messages) throw new Error('Messages are required')

    const apiResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    })

    if (!apiResponse) throw new Error('No response received from the API')

    const response = apiResponse.choices[0].message

    return response
  } catch (error) {
    console.error('[CONVERSATION_ERROR]', error)
    return undefined
  }
}
