import React, {useState, useEffect} from 'react';
  
const TodoItem = (props) => {
  const [complete, setComplete] = useState(false);
  const [currentTask, setCurrentTask] = useState(props.todos.task)

const done = () => {
    setComplete(!complete);
  }

  return(
    <div>
    <p>
      <span onClick={done}>{props.todo.completed}</span>
      <spanonClick={(e) => setCurrentTask(e.target.value)}>{props.todo.task}</span>
    </p>
    </div>
  )
}

export default TodoItem