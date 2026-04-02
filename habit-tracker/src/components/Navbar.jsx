import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-500 py-5 gap-7 justify-center flex flex-wrap text-2xl font-semibold'>
        <Link className='' to='/'>Home</Link>
        <Link className='' to='/stats'>Stats</Link>
    </div>
  )
}

export default Navbar