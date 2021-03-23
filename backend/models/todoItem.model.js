const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoItemSchema = new Schema({
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;