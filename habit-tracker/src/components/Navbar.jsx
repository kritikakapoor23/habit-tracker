import { NavLink } from 'react-router-dom'
import { CheckSquare, Sun, Moon } from 'lucide-react'

const Navbar = ({ dark, onToggle }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 md:px-8 py-3 md:py-0 md:h-13 flex flex-col md:flex-row items-center gap-3 md:gap-0 justify-between transition-colors">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-100">
        <CheckSquare size={18} className="text-green-500" />
        HabitFlow
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {['/', '/stats'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded-md font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`
              }
            >
              {['Home', 'Stats'][i]}
            </NavLink>
          ))}
        </div>

        <button
          onClick={onToggle}
          aria-label="Toggle dark mode"
          className="p-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar