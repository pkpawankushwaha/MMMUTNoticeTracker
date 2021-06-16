const db = require('./database')


var subscribe= function(email,callback){
    //console.log(email+"...")
    var count=0
    db.query('select count(*) from subscribers where email=?',email,function(err,res){
        if(err)callback("Try again later..")
        else{
            count=res[0]['count(*)']
                
           
        }
        if(count==1){
            callback("email id registered..")
        }
        else{
            db.query('insert into subscribers values ('+'"random"'+',"'+email+'","YES") ',function(err1,res1){
                if(err1)callback("try again later..")
                else callback('Subsribed successfully..')
            })
        }
        
    })
   
}

module.exports=subscribe