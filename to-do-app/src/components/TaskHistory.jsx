import React from 'react'
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/solid'

const TaskHistory = ({ history, clearHistory }) => {
  return (
    <div className='bg-sky-600 p-4 rounded-md w-1/3 flex flex-col'>
      <h2 className='text-white font-bold text-xl mb-4'>Task History</h2>
      <ul className='flex-1'>
        {history.map((item, index) => (
          <li
            key={index}
            className={`p-2 mb-2 rounded-md flex items-center ${
              item.action === 'completed' ? 'bg-green-200' : 'bg-red-200'
            }`}
          >
            <span className='flex-1'>{item.title}</span>
            {item.action === 'completed' ? (
              <CheckIcon className='h-6 w-6 text-green-600' />
            ) : (
              <XCircleIcon className='h-6 w-6 text-red-600' />
            )}
          </li>
        ))}
      </ul>
      <button onClick={clearHistory} className='bg-red-400 p-2 rounded-md text-white mt-auto'>
        Clear History
      </button>
    </div>
  )
}

export default TaskHistory
