import React from 'react'
import { ClipboardIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='bg-sky-600 p-8 flex justify-center items-center shadow-lg'>
      <div className='flex items-center space-x-3'>
        <ClipboardIcon className='h-10 w-10 text-white' />
        <h2 className='text-white font-bold text-3xl'>ToDo App</h2>
      </div>
    </div>
  )
}

export default Header
