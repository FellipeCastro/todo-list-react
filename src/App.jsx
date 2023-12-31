import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import Filter from './components/Filter'
import TodoMode from './components/TodoMode'

export default function App() {

  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [darkMode, setDarkMode] = useState(true)

  const addTodo = (text) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text: text,
      isCompleted: false
    }]
    setTodos(newTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filterTodos)
  }

  const toggleMode = () => {
    setDarkMode(!darkMode)
    const html = document.querySelector('html')
    html.classList.toggle('light-mode')
}

  return (
    <section className='section_principal'>
      <TodoMode
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleMode={toggleMode}
      />

      <TodoForm addTodo={addTodo}/>
      <Filter filter={filter} setFilter={setFilter}/>

      <ul className='todos_container'>
        {todos
        .filter((todo) => filter === "all" ? true : filter === "complete" ? todo.isCompleted : !todo.isCompleted)
        .map((todo) => {
          return <Todos 
            id={todo.id}
            text={todo.text}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            isCompleted={todo.isCompleted}
          />
        })}
      </ul>
    </section>
  )
}