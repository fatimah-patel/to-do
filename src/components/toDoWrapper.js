import { React, useState } from 'react';
import { ToDoForm } from "./todoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos, todo], {
      id: uuidv4(),
      task: todo,
      completed: false,
      editing: false,
    });
    console.log(todos);
  }
  return (
  <div className="TodoWrapper">
    <ToDoForm addToDo={addTodo}/>
    
    </div>
    )
  }
//indentWrapper extension
//codeium extension