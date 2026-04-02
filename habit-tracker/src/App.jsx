import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stats from './pages/Stats'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stats' element={<Stats/>} />
      </Routes>
    </div>
  )
}

export default App