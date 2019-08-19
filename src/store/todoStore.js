import { createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";

export const todoStore = createStore(rootReducer);
// export const todoStore = createStore(rootReducer, [
//   { id: 1, name: "ABC", completed: true }
// ]);
