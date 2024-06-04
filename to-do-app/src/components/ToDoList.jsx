import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoTasks from './ToDoTasks'
import TaskHistory from './TaskHistory'

const ToDoList = () => {
  const [showForm, setShowForm] = useState(true)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn Redux',
      completed: false,
    },
  ])
  const [history, setHistory] = useState([])

  const addTodo = (todo) => {
    if (todo.title.trim() === '') {
      alert('Task cannot be empty')
      return
    }
    setTodos([todo, ...todos])
  }

  const updateToDo = (todoId, newValue) => {
    if (newValue.title.trim() === '') {
      alert('Task cannot be empty')
      return
    }
    setTodos(todos.map((todo) => (todo.id === todoId ? newValue : todo)))
    if (newValue.completed) {
      setHistory((prevHistory) => {
        if (!prevHistory.find((item) => item.id === todoId && item.action === 'completed')) {
          return [...prevHistory, { ...newValue, action: 'completed' }]
        }
        return prevHistory
      })
    }
  }

  const deleteTodo = (todoId) => {
    const deletedTask = todos.find((todo) => todo.id === todoId)
    setTodos(todos.filter((todo) => todo.id !== todoId))
    if (deletedTask && !deletedTask.completed) {
      setHistory([...history, { ...deletedTask, action: 'deleted' }])
    }
  }

  const clearHistory = () => {
    setHistory([])
  }

  return (
    <div className='flex gap-8'>
      <div className='flex-1'>
        {showForm && <ToDoForm handleAddTodo={addTodo} />}
        <ToDoTasks
          setShowForm={setShowForm}
          todos={todos}
          updateTodo={updateToDo}
          deleteTodo={deleteTodo}
        />
      </div>
      <TaskHistory history={history} clearHistory={clearHistory} />
    </div>
  )
}

export default ToDoList
