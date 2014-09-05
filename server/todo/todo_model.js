"use strict";

var mongoose = require('mongoose-q')(require('mongoose'));

var TodoSchema = new mongoose.Schema({
  text: String,
  done: { type: Boolean, default: false }
});

module.exports = exports = mongoose.model('todos', TodoSchema);
