import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";

const Todo = ({ todo }) => {
  const { id, name, completed, dateCreated } = todo;

  const [showPopup, setShowPopup] = useState(false);

  const addTodoHandler = () => {
    setShowPopup(true);
  };

  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <div className="todo">
      {/* <span> Id: {id}</span> <br></br> */}
      <span className="todo-name" onClick={addTodoHandler}>
        {name}
      </span>
      {/* <button className="todo-name" onClick={addTodoHandler}>
        {name}
      </button> */}
      <br></br>
      <span> Date created: {dateCreated}</span>
      <br></br>
      <span>
        Completed:
        <input type="checkbox" checked={completed} disabled></input>
      </span>
      <br></br>
      {/* <button onClick={addTodoHandler}>Edit</button> */}
      {showPopup ? (
        <TodoForm id={id} closePopup={closePopupHandler}></TodoForm>
      ) : null}
    </div>
  );
};

export default Todo;
