import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    retrieveTodo()
  }, [newTodo])

  const retrieveTodo = () => {
    axios.get('/api/todos')
      .then((results) => {
        setTodos(results.data)
        console.log(results.data)
      })
      .catch((err) => console.error(err))
  }

  const onSubmit = () => {
    axios.post('./api/todos', { task: newTodo })
      .then(() => {
        retrieveTodo();
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={(e) => setNewTodo(e.target.value)} ></input>
        <button type='submit'>Add Todo</button>
      </form>
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} id={todo.id} retrieveTodo={retrieveTodo} />
      })}
    </div>
  )
}

export default App