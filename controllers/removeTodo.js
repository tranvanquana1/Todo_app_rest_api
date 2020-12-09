const TodoList = require("../models/todo");

module.exports = (req, res) => {
  const id = req.params.id;
  TodoList.findByIdAndRemove(id)
    .then((item) => {
      console.log("Todo is removed");
      res.end();
    })
    .catch((err) => {
      console.error(err);
    });
};
