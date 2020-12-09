const TodoList = require("../models/todo");

module.exports = (req, res) => {
  TodoList.find({})
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      console.error(err);
    });
};
