const express = require('express')
const app = express()
const port = 5000//port number
const mongoDB = require('./db'); //importing the mongoDB function from db.js
//in node js we use require to import a function from another file
//in react we use import to import a function from another file
mongoDB();//calling the mongoDB function
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})