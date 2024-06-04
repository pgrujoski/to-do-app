import { CheckIcon, PencilIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import ToDoForm from './ToDoForm'

const ToDoTasks = ({ todos, updateTodo, setShowForm, deleteTodo }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: '',
  })

  const submitUpdate = (value) => {
    if (value.title.trim() === '') {
      alert('Task cannot be empty!')
      return
    }

    updateTodo(editInput.id, value)
    setEditInput({ id: null, text: '' })
    setShowForm(true)
  }

  if (editInput.id !== null) {
    return (
      <div className='flex flex-col items-center'>
        <ToDoForm edit={editInput} handleAddTodo={submitUpdate} />
        <button
          onClick={() => {
            setEditInput({ id: null, text: '' })
            setShowForm(true)
          }}
          className='bg-red-400 p-2 rounded-md text-white mt-2'
        >
          Cancel
        </button>
      </div>
    )
  }

  return todos.map((todo) => (
    <div
      className={`mt-4 flex items-center border p-2 rounded-md ${
        todo.completed ? 'bg-green-200' : 'bg-white'
      }`}
      key={todo.id}
    >
      <input className='outline-none flex-1 bg-transparent' value={todo.title} readOnly />
      <div className='space-x-2 flex items-center'>
        <button
          onClick={() => updateTodo(todo.id, { ...todo, completed: !todo.completed })}
          className='bg-green-400 p-1 rounded-sm'
        >
          <CheckIcon className='h-6 w-6 text-white' />
        </button>
        <button
          onClick={() => {
            setEditInput({ id: todo.id, text: todo.title })
            setShowForm(false)
          }}
          className='bg-orange-400 p-1 rounded-sm'
        >
          <PencilIcon className='h-6 w-6 text-white' />
        </button>
        {todo.completed ? (
          <button onClick={() => deleteTodo(todo.id)} className='bg-red-400 p-1 rounded-sm'>
            <TrashIcon className='h-6 w-6 text-white' />
          </button>
        ) : (
          <button onClick={() => deleteTodo(todo.id)} className='bg-red-400 p-1 rounded-sm'>
            <XCircleIcon className='h-6 w-6 text-white' />
          </button>
        )}
      </div>
    </div>
  ))
}

export default ToDoTasks
