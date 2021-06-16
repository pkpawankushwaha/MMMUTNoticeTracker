const db=require('./database')

var db_users=function(callback){
    var db_users={
        'err':'error',
        'data':[]
    }
    db.query("select * from subscribers",function(err,rows){
        if(err){
            console.log(err)
            callback(db_users);
        }
        else{
            db_users['err']=null
            for(i=0;i<rows.length;i++){
                db_users['data'][i]=rows[i]
               
                
            }

            console.log(db_users['data'])
            callback(db_users)
        }
    })
}

module.exports=db_users