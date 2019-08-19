import React, { useState } from "react";
import "./TodoForm.css";
import { createTodoModel, getTodoModelById } from "../actions/todoAction";
import { todoActionTypes } from "../constants/todoActionTypes";
import { connect } from "react-redux";

const TodoForm = props => {
  const { todoes, id, closePopup, createT, updateT, deleteT } = props;
  const todo = id ? getTodoModelById(todoes, id) : createTodoModel();
  // console.log("1st:", { todo });

  const [todoInput, setTodoInput] = useState({
    id: todo.id,
    name: todo.name,
    completed: todo.completed,
    dateCreated: todo.dateCreated
  });

  const handlerChange = evt => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

    setTodoInput({ ...todoInput, [name]: value });
  };

  const handlerBtnSave = evt => {
    if (todo.id) {
      console.log("update");
      updateT(todoInput);
    } else {
      console.log("create");
      createT(todoInput);
    }

    closePopup();
  };

  const handlerBtnDelete = evt => {
    deleteT(todoInput);
    closePopup();
  };

  return (
    <div className="todo-form">
      <div className="todo-form-inner">
        <h2 className="todo-form-title">TODO FORM</h2>
        {/* <p className="todo-form-title">TODO FORM</p> */}

        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={todoInput.name}
          onChange={handlerChange}
        ></input>
        <p></p>
        <label>Completed: </label>
        <input
          type="checkbox"
          name="completed"
          checked={todoInput.completed}
          onChange={handlerChange}
        ></input>

        <p></p>
        <button onClick={closePopup}>Cancel</button>
        <button className="save" onClick={handlerBtnSave}>
          Save
        </button>
        {id ? (
          <button className="delete" onClick={handlerBtnDelete}>
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todoes: state.todoes
});

const mapDispatchToProps = dispatch => ({
  createT: todoModel =>
    dispatch({
      type: todoActionTypes.ADD_TODO,
      todoModel: todoModel
    }),
  updateT: todoModel =>
    dispatch({
      type: todoActionTypes.UPDATE_TODO,
      todoModel: todoModel
    }),
  deleteT: todoModel =>
    dispatch({
      type: todoActionTypes.DELETE_TODO,
      todoModel: todoModel
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
