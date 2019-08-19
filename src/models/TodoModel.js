// const uuidv4 = require("uuid").v4;

// export const TodoModel = (id = "", name = "", completed = false) => {
//   this.id = id === "" ? uuidv4() : id;
//   this.name = name;
//   this.completed = completed;
// };
// => error: is not a constructor

// export const TodoModel = (id = "", name = "", completed = false) => {
//   this.id = id === "" ? uuidv4() : id;
//   this.name = name;
//   this.completed = completed;
// };
// ok

export class TodoModel {
  constructor(id, name, completed, dateCreated) {
    this.id = id;
    this.name = name;
    this.completed = completed;
    this.dateCreated = dateCreated;
  }
}
