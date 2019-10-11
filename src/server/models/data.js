const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String },
  date: { type: String },
  text: { type: String }
});

module.exports = mongoose.model('News', newsSchema);
