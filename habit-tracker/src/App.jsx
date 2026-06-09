import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HabitProvider } from './context/HabitContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <HabitProvider>
      <div className={dark ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors">
          <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </div>
    </HabitProvider>
  )
}

export default App