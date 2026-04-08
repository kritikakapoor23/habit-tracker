import React from 'react'

const Stats = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6">Your stats</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">Total habits</p>
          <p className="text-3xl font-semibold text-gray-800">3</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">Completed today</p>
          <p className="text-3xl font-semibold text-green-700">1</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">Completion rate</p>
          <p className="text-3xl font-semibold text-amber-700">33%</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-3">Today's habits</h2>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3">
          <span className="font-semibold text-gray-800">Drink Water</span>
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Done</span>
        </div>
        <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3">
          <span className="font-semibold text-gray-800">Exercise</span>
          <span className="text-xs font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">Not done</span>
        </div>
        <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3">
          <span className="font-semibold text-gray-800">Read</span>
          <span className="text-xs font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">Not done</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-gray-400">1 of 3 done today</span>
          <span className="text-xs text-gray-400">33%</span>
        </div>
      </div>

    </div>
  )
}

export default Stats