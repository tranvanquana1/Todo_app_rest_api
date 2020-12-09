const TodoList = require("../models/todo");

module.exports = (req, res) => {
  const id = req.params.id;
  TodoList.findByIdAndUpdate(id, { done: true })
    .then((item) => {
      console.log('Todo is done');
    })
    .catch((err) => {
      console.error(err);
    });
};
