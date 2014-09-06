"use strict";

var mongoose = require('mongoose-q')(require('mongoose'));

var ListSchema = new mongoose.Schema({
  name: String
});

module.exports = exports = mongoose.model('lists', ListSchema);
