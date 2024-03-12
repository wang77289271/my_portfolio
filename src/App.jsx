import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MyDesigns from './pages/MyDesigns'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/designs' element={<MyDesigns />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
