import { Flame, Trash2 } from 'lucide-react'
import { useHabitContext } from '../context/HabitContext'
import useStreak from '../hooks/useStreak'

const today = new Date().toISOString().split('T')[0]

const HabitCard = ({ habit }) => {
  const { dispatch } = useHabitContext()
  const done = habit.completedDates.includes(today)
  const streak = useStreak(habit.completedDates)

  return (
    <div className={`flex flex-col gap-2.5 rounded-xl p-4 border transition-colors ${
      done
        ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900'
        : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
    }`}>
      <div className="flex items-start justify-between gap-2">
        <span className={`text-sm font-medium leading-snug ${
          done
            ? 'line-through text-gray-400 dark:text-gray-600'
            : 'text-gray-800 dark:text-gray-100'
        }`}>
          {habit.name}
        </span>
        {done && (
          <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
            Done
          </span>
        )}
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
        <Flame size={13} className="text-amber-400" />
        <span className="font-medium text-gray-700 dark:text-gray-300">{streak}</span>
        <span>day streak</span>
      </div>

      <div className="flex gap-2 mt-1">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_TODAY', payload: habit.id })}
          className={`flex-1 text-xs font-medium py-1.5 rounded-md border transition-colors ${
            done
              ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900'
              : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {done ? 'Mark undone' : 'Mark done'}
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_HABIT', payload: habit.id })}
          aria-label="Delete habit"
          className="text-xs px-2.5 py-1.5 rounded-md border border-red-100 dark:border-red-900 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 flex items-center transition-colors"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  )
}

export default HabitCard