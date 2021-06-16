const transporter=require('./mail_auth')
const db_users=require('./db_users')
const mail_formatter=require('./mail_formatter')






var mailer= function(data,callback){
    //console.log(data)
    db_users(function(res_users){
        if(res_users['err']=='error')callback("error");
        else{
            var text_to_mail
            mail_formatter(data,function(mail_text){
                text_to_mail=mail_text
            })
            console.log(text_to_mail);


            for(i=0;i<res_users['data'].length;i++){
                var mailOptions = {
                    from: 'pawankhampar@gmail.com',
                    to: res_users['data'][i]['email'],
                    subject: 'MMMUT Notice Update',
                    html: text_to_mail
                  }

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });

            }
            console.log("maildone")
            callback("success")
        }
    })

}

module.exports=mailer