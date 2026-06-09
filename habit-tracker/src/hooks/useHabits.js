import { useReducer, useEffect } from 'react'
const today = new Date().toISOString().split('T')[0]
function habitReducer(state, action) {
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, {
        id: Date.now(),
        name: action.payload,
        completedDates: []
      }]
    case 'DELETE_HABIT':
      return state.filter(habit => habit.id !== action.payload)
    case 'TOGGLE_TODAY':
      return state.map(habit =>
        habit.id === action.payload
          ? {
              ...habit,
              completedDates: habit.completedDates.includes(today)
                ? habit.completedDates.filter(d => d !== today)
                : [...habit.completedDates, today]
            }
          : habit
      )
    default:
      return state
  }
}
function useHabits() {
  const [habits, dispatch] = useReducer(
    habitReducer,
    [],
    () => {
      const stored = localStorage.getItem('habits')
      return stored ? JSON.parse(stored) : []
    }
  )
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits))
  }, [habits])
  return { habits, dispatch }
}

export default useHabits