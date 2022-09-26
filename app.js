require('dotenv').config()
require('./db/connect')
const express = require('express');
const app = express();
const port = 3000
const tasks = require('./tasks')
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.get('/api/v1/tasks/hello', (req, res)=>{
  res.send("Task Manager App")
})
app.listen(port, console.log(`server is connecting to http://${port}...`))