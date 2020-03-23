const mongoose = require("mongoose");

//building our schema
const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  favMovie: {
    type: String,
    require: true
  },
  movieRating: {
    type: Number,
    require: true
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('Posts', PostSchema);
