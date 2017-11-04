const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
   id: Number,
   login: String,
   avatar_url: String,
   url: String
})


mongoose.model('User', userSchema);
