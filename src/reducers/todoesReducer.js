import { todoActionTypes } from "../constants/todoActionTypes";

const uuidv4 = require("uuid/v4");

const getCurrentDate = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return dateTime;
};

export const todoesReducer = (todoes = [], action) => {
  const todoModel = action.todoModel;
  let temp;

  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      todoModel.id = todoModel.id || uuidv4();
      todoModel.dateCreated = getCurrentDate();

      temp = [...todoes];
      temp.push(todoModel);
      return temp;

    case todoActionTypes.DELETE_TODO:
      temp = todoes.filter(todo => todo.id !== todoModel.id);
      return temp;

    case todoActionTypes.UPDATE_TODO:
      temp = todoes.map(todo => {
        if (todo.id === todoModel.id) {
          return todoModel;
        } else {
          return todo;
        }
      });
      return temp;

    default:
      return todoes;
    // return [{ id: 1, name: "A", completed: false, dateCreated: "123" }];
  }
};
