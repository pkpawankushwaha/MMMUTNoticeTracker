const express = require('express');
const dotenv=require('dotenv')
dotenv.config()
const port =  process.env.PORT || 5000
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


app.listen(port,function(){
    console.log("listening"+toString(port))
})
  

cron.schedule('0 0 */1 * * *', () => {
    task();
})


