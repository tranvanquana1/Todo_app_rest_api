const TodoList = require("../models/todo");
const bodyParser = require("body-parser");

module.exports = (req, res) => {
  TodoList.create(req.body)
    .then((item) => {
      res.send(item.id);
    })
    .catch((err) => {
      console.error(err);
    });
};
