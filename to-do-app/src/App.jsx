import React from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-sky-400 min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1 flex justify-center p-4'>
        <ToDoList />
      </div>
      <Footer />
    </div>
  )
}

export default App
