import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { todoStore } from "./store/todoStore";

// const todoes = [
//   {
//     id: 1,
//     name: "React",
//     completed: false
//   },
//   {
//     id: 2,
//     name: "Redux",
//     completed: false
//   },
//   {
//     id: 3,
//     name: "API",
//     completed: true
//   }
// ];

ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
