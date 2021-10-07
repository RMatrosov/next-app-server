const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  text: {
    type: String,
    required: true,
    minlength: 2,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('post', postSchema);
