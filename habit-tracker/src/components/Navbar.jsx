import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-emerald-600 py-5 gap-7 justify-center flex flex-wrap text-2xl font-semibold'>
        <Link className='text-slate-800' to='/'>Home</Link>
        <Link className='text-slate-800' to='/stats'>Stats</Link>
    </div>
  )
}

export default Navbar