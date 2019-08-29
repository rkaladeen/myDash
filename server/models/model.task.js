const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Text is required"]
  },
  due: {
    type: Date,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

const TaskListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must have at least 3 characters"]
  },
  task: [TaskSchema]
}, { timestamps: true });

mongoose.model("TaskList", TaskListSchema);