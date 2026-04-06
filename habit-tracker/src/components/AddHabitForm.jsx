import React from 'react'
import { Plus } from 'lucide-react'

const AddHabitForm = () => {
  return (
    <div className='fixed top-27 right-4'>
      <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
        <Plus size={16} /> Add Habit
      </button>
    </div>
  )
}

export default AddHabitForm