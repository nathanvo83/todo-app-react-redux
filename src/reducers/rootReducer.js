import { combineReducers } from "redux";
import { todoesReducer } from "./todoesReducer";

export const rootReducer = combineReducers({
  todoes: todoesReducer
});
