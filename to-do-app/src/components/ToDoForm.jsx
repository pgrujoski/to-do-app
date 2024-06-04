import React, { useState, useEffect } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

const ToDoForm = ({ handleAddTodo, edit }) => {
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (edit) {
      setInputText(edit.text)
    }
  }, [edit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.trim() === '') {
      setError('Task cannot be empty')
      return
    }
    setError('')

    if (edit) {
      handleAddTodo({ id: edit.id, title: inputText, completed: false })
    } else {
      handleAddTodo({
        id: Math.random(Math.floor * 1000),
        title: inputText,
        completed: false,
      })
    }
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex mt-4 items-center border bg-white border-white p-2 rounded-md'>
        <input
          className='outline-none flex-1'
          type='text'
          placeholder='Add new Task'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className='bg-blue-400 hover:bg-sky-700 text-white font-bold p-2 rounded transition-all duration-300 transform hover:scale-105'
          type='submit'
        >
          <PlusCircleIcon className='h-6 w-6 text-white' />
        </button>
      </div>
      {error && <h2 className='text-red-500'>{error}</h2>}
    </form>
  )
}

export default ToDoForm
