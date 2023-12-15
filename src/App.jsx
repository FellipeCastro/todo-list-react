import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text: text,
      isCompleted: false
    }]
    setTodos(newTodos)
  }

  return (
    <section className='section_principal'>
      <TodoForm addTodo={addTodo}/>

      <ul className='todos_container'>
        {todos.map((todo) => {
          return <Todos 
            id={todo.id}
            text={todo.text}
          />
        })}
      </ul>
    </section>
  )
}