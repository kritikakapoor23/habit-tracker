import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useHabitContext } from '../context/HabitContext'

const AddHabitForm = ({ isOpen, onToggle }) => {
  const [habit, setHabit] = useState('')
  const { dispatch } = useHabitContext()

  const handleSubmit = () => {
    if (habit.trim() === '') return
    dispatch({ type: 'ADD_HABIT', payload: habit.trim() })
    setHabit('')
    onToggle()
  }

  return (
    <>
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <Plus size={14} /> Add habit
      </button>

      {isOpen && (
        <div className="mt-4 mb-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4 transition-colors">
          <input
            type="text"
            autoFocus
            value={habit}
            placeholder="e.g. Drink 2L of water"
            onChange={e => setHabit(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 mb-3 outline-none focus:border-gray-400 dark:focus:border-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={onToggle}
              className="text-sm px-4 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="text-sm px-4 py-1.5 rounded-md border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 font-medium hover:bg-green-100 dark:hover:bg-green-900"
            >
              Save habit
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddHabitForm