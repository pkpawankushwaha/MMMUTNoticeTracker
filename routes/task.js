const scrap=require('./scrap')
const db_fetch=require('./db_fetch')
const db_update=require('./db_update')
const mailer=require('./mailer')

var task= function(){
    scrap(function(scrap_res){
        if(scrap_res['data']=='error')console.log("fucked up with scrap err")
        //else console.log(scrap_res);

        db_fetch(function(db_res){
            if(db_res['data']=='error')return
            else console.log("jai ho")

            if(db_res['data'].length!=scrap_res['data'].length){
                db_update(scrap_res['data'],scrap_res['link'],function(err,res){
                    if(err)console.log("done with err")
                    else console.log("done with nothing")
                    console.log("done with task")
                })
            }
            else{
                var diff=0
                for(i=0;i<scrap_res['data'].length;i++){
                    if(scrap_res['data'][i]!==db_res['data'][i])diff=diff+1
                }
                //console.log("difference "+ diff)

                if(diff!=0){
                    db_update(scrap_res['data'],scrap_res['link'],function(err,res){
                        if(err)console.log("dhaha with err")
                        else console.log("dhaha with nothing")
                        mailer(scrap_res,function(mail_res){
                            if(mail_res=="error")console.log("sorry for mail")
                            else console.log("mail_success")
                        })
                        console.log("dhaha with task")
                    })
                }
            }
            console.log(new Date())
            console.log("task done")
        })


    })
    


}



module.exports=task
