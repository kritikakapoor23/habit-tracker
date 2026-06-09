import { useHabitContext } from '../context/HabitContext'

const today = new Date().toISOString().split('T')[0]

const Stats = () => {
  const { habits } = useHabitContext()
  const total = habits.length
  const done = habits.filter(h => h.completedDates.includes(today)).length
  const rate = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors">
      <div className="mb-6">
        <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">Your stats</h1>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">Today's overview</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">Total habits</p>
          <p className="text-2xl font-medium text-gray-800 dark:text-gray-100">{total}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">Completed today</p>
          <p className="text-2xl font-medium text-green-700 dark:text-green-400">{done}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">Completion rate</p>
          <p className="text-2xl font-medium text-amber-700 dark:text-amber-400">{rate}%</p>
        </div>
      </div>

      <p className="text-xs font-medium text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-2.5">
        Today's habits
      </p>
      <div className="flex flex-col gap-1.5 mb-6">
        {habits.length === 0 ? (
          <p className="text-sm text-gray-400 dark:text-gray-600">No habits yet.</p>
        ) : habits.map(habit => {
          const isDone = habit.completedDates.includes(today)
          return (
            <div key={habit.id} className="flex justify-between items-center px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl transition-colors">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{habit.name}</span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                isDone
                  ? 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900'
              }`}>
                {isDone ? 'Done' : 'Not done'}
              </span>
            </div>
          )
        })}
      </div>

      <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full mb-2">
        <div
          className="h-1 bg-green-500 rounded-full transition-all"
          style={{ width: `${rate}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 dark:text-gray-600">
        <span>{done} of {total} done today</span>
        <span>{rate}%</span>
      </div>
    </div>
  )
}

export default Stats