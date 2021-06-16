const express = require('express');
var cron = require('node-cron');
const bodyParser = require('body-parser');
const request = require('request');
const { json } = require('express');
const app = express()

var route_index=require('./routes/index')

var task=require('./routes/task')

app.use('/',route_index)


app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(express.json())
app.set('view engine', 'ejs')


app.listen(5000,function(){
    console.log("listening")
})
  

cron.schedule('0 0 */1 * * *', () => {
    task();
})


