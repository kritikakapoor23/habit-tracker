import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const AddHabitForm = () => {
    const [habit, setHabit] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()
        console.log('New Habit Added is', habit)
        setHabit('')
        setIsOpen(false)
    }

    return (
        <div className='fixed top-27 right-4'>
            <button onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                <Plus size={16} /> Add Habit
            </button>

            {isOpen && (
                <div className="mt-2 bg-white shadow-md rounded-md p-3">
                    <form onSubmit={formHandler}>
                        <input type="text" value={habit} placeholder="Enter habit name" onChange={(e) => setHabit(e.target.value)} className="border px-2 py-1 rounded-md w-full mb-2"/>
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md w-full hover:bg-green-600">Submit</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default AddHabitForm