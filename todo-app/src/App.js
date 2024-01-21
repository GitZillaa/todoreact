import React, { useState } from "react";

const App = () => { 

const [todos, setTodos] = useState ([])
const [currentTodos, setCurrentTodo] =useState('')

const handleSubmit = e => {
  e.preventDefault()
  const newTodos = {
    id: Math.ceil(Math.random() * 1000),
    titel: currentTodos
  }

  setTodos([
    ...todos,
    newTodos
  ])

  setCurrentTodo('')
}

const handleDelete = (id) => {
  const newTodos = todos.filter(todo => todo.id !== id)
  setTodos(newTodos)
} 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={currentTodos} onChange={e => setCurrentTodo(e.target.value)}/>
        <input type="submit"/>
      </form>
      <ul>
       {todos.map((todo, i) => (
        <li key={i}>{todo.titel}
        <button onClick={()=> handleDelete(todo.id)}> X </button>
        </li>
      ))}
        </ul>
    </div>
  )
}

export default App