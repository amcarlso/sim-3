const express = require('express');
require('dotenv').config();
const massive = require('massive');
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());



app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.get('/api/posts', ctrl.getPosts)


massive(CONNECTION_STRING).then( db => {
  console.log('We are connected to the db')
  app.set('db', db)
  app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
  })
})
