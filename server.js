const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.MONGO_URL,{ useMongoClient: true });

require('./models/user.js')

const User = mongoose.model('User');
const { USERS_AMOUNT_ON_PAGE } = keys;

app.use(bodyParser.json());

app.get('/api/users/amount', (req, res)=>{
   // считаем количество юзеров для расчёта количества страниц в пагинаторе
   const users = User
    .find({})
    .exec((err, users)=>{
      const usersAmount = users.length
      res.send({length: users.length, USERS_AMOUNT_ON_PAGE});
    })

})

app.post('/api/users', (req, res)=>{
  const { page } = req.body.payload
  const users = User
    .find({})
    .sort({login: '1'})
    //в зависимости от номера страницы пропускаем первых юзеров
    .skip(page * USERS_AMOUNT_ON_PAGE - USERS_AMOUNT_ON_PAGE)
    // выгружаем максимум USERS_AMOUNT_ON_PAGE юзеров на страницу
    .limit(USERS_AMOUNT_ON_PAGE)
    .exec((err, users) => {
      if(err){
        console.log(err, 'users')
      }
      res.send(users)
    })
});

app.post('/api/user', (req, res)=>{
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
//если не находим нужный роут на сервере загружаем react-create-app build
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{
   console.log('Server is running on port', PORT)
});
