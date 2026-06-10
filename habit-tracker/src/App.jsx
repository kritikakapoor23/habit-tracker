import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HabitProvider } from './context/HabitContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <HabitProvider>
      <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors">
        <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </HabitProvider>
  )
}

export default App