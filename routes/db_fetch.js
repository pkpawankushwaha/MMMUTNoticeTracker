const db=require('./database')

var db_fetch=function(callback){
    var db_res={
        'data':'error',
        'link':'error'
    }
    db.query("select * from notices",function(err,rows){
        if(err){
            callback(db_res);
        }
        else{
            db_res['data']=[];
            db_res['link']=[]
            for(i=0;i<rows.length;i++){
                db_res['data'][i]=rows[i]['notice']
                db_res['link'][i]=rows[i]['link']
                
            }

            //console.log(rows[0]['notice'])
            callback(db_res)
        }
    })
}

module.exports=db_fetch