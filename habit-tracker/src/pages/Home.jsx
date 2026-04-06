import React from 'react'
import HabitCard from '../components/HabitCard'
import AddHabitForm from '../components/AddHabitForm'

const habits = [
  { id: 1, name: "Drink Water", description: "Drink 2l water daily" },
  { id: 2, name: "Exercise", description: "30 mins workout" },
  { id: 3, name: "Read", description: "Read 20 pages" },
]

const Home = () => {
  return (
    <>
      <AddHabitForm/>
      <div className="flex flex-wrap">
        {habits.map(habit => (
          <HabitCard key={habit.id} name={habit.name} description={habit.description} />
        ))}
      </div>
    </>
  )
}


export default Home