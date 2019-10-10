const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String },
  age: { type: String }
});

module.exports = mongoose.model('Data', dataSchema);
