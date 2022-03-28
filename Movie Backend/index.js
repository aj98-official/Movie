const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
})

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
})
 
app.get('/users', db.getUsers)
app.get('/users/:year/:ch', db.getUserByYear)
app.get('/users/:title', db.getUserByTitle)
app.post('/users', db.createUser)
app.post('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})