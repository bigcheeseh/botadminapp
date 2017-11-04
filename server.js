const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.MONGO_URL,{ useMongoClient: true });

require('./models/user.js')

const User = mongoose.model('User')

app.use(bodyParser.json());

app.post('/api/users', (req, res)=>{
  console.log(req.body)

  const { page } = req.body.payload

  const users = User
    .find({})
    .sort({login: '1'})
    .skip(page * 15 - 15)
    .limit(15)
    .exec((err, users) => {
      if(err){
        console.log(err, 'users')
      }

      res.send(users)
    })

});

app.post('/api/user', (req, res)=>{
  console.log(req.body, 'fetch user')

  const { name } = req.body.payload

  const users = User
    .find({login: name})
    .exec((err, users) => {
      if(err){
        console.log(err, 'users')
      }
      res.send(users)
    })

});

app.get('/api/user/:id', (req, res)=>{

  console.log(req.params.id, 'user id')

  const user = User
    .findById(req.params.id)
    .exec((err, user) => {
      if(err){
        console.log(err, 'users')
      }
      res.send(user)
    })

});

app.post('/api/user/:id', (req, res)=>{

  const { userId, login, avatar_url } = req.body

  console.log(userId, login, avatar_url, 'user update');

  const user = User
    .findByIdAndUpdate(userId, { $set:{ login, avatar_url } }, { new: true}, (err, user)=>{
        if(err){
          console.log(err, 'user update error')
        }

        res.send(user)
    })

});


app.use(express.static('client/build'));

const path = require('path');

app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{
   console.log('Server is running on port', PORT)
});
