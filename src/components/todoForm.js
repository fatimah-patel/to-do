import { React, useState } from 'react'
import { TodoForn } from "./todoForm";

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(value);
        setValue("");
    };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    < input 
    className="todo-input"
    type="text" 
    placeholder="What needs to get done?" 
    onChange={(e) => setValue(e.target.value)}
    />
    <button type="submit" className="todo-btn">
        submit
        </button>
    </form>
  );
};
