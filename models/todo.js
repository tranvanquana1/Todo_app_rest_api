const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("TodoList", todoSchema);
