const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
    // match: /^\w+@[A-Z]{2,3}$/ 
  },
  bio: {
    type: String,
    maxlength: 200
  }
}, 
{
 
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;