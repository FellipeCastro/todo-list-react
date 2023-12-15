import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'

export default function App() {

  const [todo, setTodo] = useState()

  return (
    <section className='section_principal'>
      <div className='img_backround'></div>

      <TodoInput/>
    </section>
  )
}