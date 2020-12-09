const TodoList = require("../models/todo");

module.exports = (req, res) => {
  TodoList.find({ done: true })
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      console.error(err);
    });
};
