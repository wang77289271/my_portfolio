import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>

      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Button className='mt-10' href='#login'>
          hello
        </Button>
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
