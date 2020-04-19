import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoItem = (props) => {
  const [complete, setComplete] = useState(props.todo.completed);
  const [newTask, setNewTask] = useState(props.todo.task)
  const [isClicked, setIsClicked] = useState(false);

  const done = () => {
    setComplete(!complete);
  }

  const handleUpdates = (e) => {
    axios.put(`/api/todos/${props.id}`, { task: newTask, completed: complete })
      .then(() => {
        props.retrieveTodo()
        setIsClicked(isClicked);
      })
      .catch((err) => console.error(err))
  }

  const deleteTask = (e) => {
    e.preventDefault()
    axios.delete(`/api/todos/${props.id}`)
      .then(() => {
        props.retrieveTodo()
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {

  }, [setComplete, newTask])
  {
    return (isClicked ? (
      <div>
        <span>{props.todo.completed}</span>
        <form onSubmit={handleUpdates}>
          <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button type='submit'>Change Task</button>
        </form>
      </div >
    ) :
      <div>
        <button onClick={(e) => done(e)}>{complete ? 1 : 0}</button>
        <span onClick={() => setIsClicked(!isClicked)}>{props.todo.task}</span>
        <button onClick={deleteTask}>Delete</button>
      </div>
    )
  }
}

export default TodoItem