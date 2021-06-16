const db=require('./database')

var db_update=function(data,link,callback){

    var notices=[]
    for(i=0;i<data.length;i++){
        var x=[i+1,data[i],link[i]]
        notices[i]=x
    }
    console.log(notices)
    db.query("delete from notices",function(err,res){
        if(err)console.log("err in deleting")
        else console.log("delete success")
    })
    db.query("insert into notices values ?",[notices],function(err,res){
        if(err)console.log(err);
        else console.log(res)
        callback(err,res);
    })
    //callback();
}

module.exports=db_update