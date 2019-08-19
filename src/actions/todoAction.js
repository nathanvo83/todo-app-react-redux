// import { todoActionTypes } from "../constants/todoActionTypes";
import { TodoModel } from "../models/TodoModel";

// const addTodo = () => ({ type: todoActionTypes.ADD_TODO });
// const updateTodo = () => ({ type: todoActionTypes.UPDATE_TODO });
// const deleteTodo = () => ({ type: todoActionTypes.DELETE_TODO });

// export const todoAction = {
//   addTodo,
//   deleteTodo,
//   updateTodo
// };

export const createTodoModel = (
  id = null,
  name = "",
  completed = false,
  dateCreated = ""
) => new TodoModel(id, name, completed, dateCreated);

export const getTodoModelById = (todoes, id) => {
  return todoes.filter(todo => todo.id === id)[0];
};
