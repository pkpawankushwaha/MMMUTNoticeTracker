const express= require('express')
const app = express()
const db_fetch=require('./db_fetch')
const mail_formatter=require('./mail_formatter')

const subscribe=require('./subscribe')


var subs_msg=null

var index = app.get("/",function(req,res){
    
    db_fetch(function(db_res){
        
        if(db_res['data']=='error')data=null
        else console.log("jai hind")

        data=[]
        for(i=0;i<db_res['data'].length;i++){
            var x={
                'subs_msg':'Subscribe to be notified on notice update',
                'notice':db_res['data'][i],
                'link':db_res['link'][i]
            }
            data[i]=x
            
        }
        //console.log(data)
        res.render('index',data)
    })
})
app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(express.json())



index = app.post("/",function(req,res){
    var email=req.body.email
    //console.log(email);
    
    subscribe(email , function(subs_res){
        subs_msg=subs_res
    })
    db_fetch(function(db_res){
        
        if(db_res['data']=='error')data=null
        else console.log("jai hind")

        data=[]
        for(i=0;i<db_res['data'].length;i++){
            var x={
                'subs_msg':subs_msg,
                'notice':db_res['data'][i],
                'link':db_res['link'][i]
            }
            data[i]=x
            
        }
        //console.log(data)
        res.render('index',data)
    })

    
})


module.exports = index