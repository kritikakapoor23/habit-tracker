import React, { createContext, useContext } from 'react'
import useHabits from '../hooks/useHabits'

const HabitContext = createContext()

export function HabitProvider({ children }) {
  const { habits, dispatch } = useHabits()

  return (
    <HabitContext.Provider value={{ habits, dispatch }}>
      {children}
    </HabitContext.Provider>
  )
}

export function useHabitContext() {
  return useContext(HabitContext)
}