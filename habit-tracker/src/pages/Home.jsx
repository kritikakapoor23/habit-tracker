import { useState } from 'react'
import { useHabitContext } from '../context/HabitContext'
import HabitCard from '../components/HabitCard'
import AddHabitForm from '../components/AddHabitForm'

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
})

const Home = () => {
  const { habits } = useHabitContext()
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">Today's habits</h1>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">{today}</p>
        </div>
        <AddHabitForm isOpen={formOpen} onToggle={() => setFormOpen(o => !o)} />
      </div>

      {habits.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-10">No habits yet. Add one to get started.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
          {habits.map(habit => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home