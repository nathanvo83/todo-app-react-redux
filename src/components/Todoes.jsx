import React, { useState } from "react";
import "./Todoes.css";
import Todo from "./Todo";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";

// import { todoAction } from "../actions/todoAction";

const Todoes = props => {
  const { todoes } = props;
  const [showPopup, setShowPopup] = useState(false);

  console.log(todoes);

  const addTodoHandler = () => {
    setShowPopup(true);
  };

  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="todoes-title">
        <label>TODO LIST</label>
        <button className="add align-right" onClick={addTodoHandler}>
          Add
        </button>
        {showPopup ? (
          <TodoForm id={null} closePopup={closePopupHandler}></TodoForm>
        ) : null}
      </div>

      {todoes.map(todo => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todoes: state.todoes
});

export default connect(mapStateToProps)(Todoes);
