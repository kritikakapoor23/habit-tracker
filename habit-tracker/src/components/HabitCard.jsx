import React, { useState } from 'react'
const HabitCard = ({name, description}) => {
  const [done, setDone] = useState(false)
  return (
    <div className="border-2 border-black rounded-xl p-4 m-5 w-64 bg-white">
      <h2 className={`text-lg font-semibold mb-2 ${done ? "line-through text-gray-400" : ""}`}>{name}</h2>
      <p className={`text-sm mb-4 ${done ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
      <div className="flex justify-between items-center">
        <button onClick={() => setDone(!done)} className={`px-3 py-1 rounded-md text-white ${ done ? "bg-green-500" : "bg-gray-500"}`}>{done ? "Done" : "Mark Done"}</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
      </div>
    </div>
  )
}

export default HabitCard