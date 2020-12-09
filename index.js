const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import models
const TodoList = require("./models/todo");

//import controllers
const getTodo = require("./controllers/getTodo");
const newTodo = require("./controllers/newTodo");
const updateTodo = require("./controllers/updateTodo");
const removeTodo = require("./controllers/removeTodo");
const getTodoDone = require("./controllers/getTodoDone");

const PORT = 3000;
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database mongoDB
const server = "127.0.0.1:27017";
const database = "todo-list";

mongoose
  .connect(`mongodb://${server}/${database}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) => {
    //run server
    console.log("Database connection successful");
    app.listen(PORT, (req, res) => {
      console.log("Server is running on ", PORT);
    });
  });

//read all todo list
app.get("/api/todo/list", getTodo);

//read all todo have done is true
app.get("/api/todo/done", getTodoDone);

//create a new todo item
app.post("/api/todo/create", newTodo);

//mark a todo as done
app.post("/api/todo/done/:id", updateTodo);

//delete a todo item
app.post("/api/todo/delete/:id", removeTodo);
