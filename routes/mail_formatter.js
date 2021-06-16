var mail_formatter = function(data,callback){
    html_text="<h1>MMMUT Notice Tracker</h1><br>Updated notices are : <br><br><BR>"
    for(i=0;i<data['data'].length;i++){
        var c=i+1;
        var s = c.toString()+"  "+data['data'][i]+"<br>";
        if(data['link'][i]!="#"){
            s=s+"<a href=http://mmmut.ac.in/"+data['link'][i]+" targert='_blank' >Click here to Download</a>"

        }
        s=s+"<br><br><br>"
        html_text=html_text+s
    }
   //console.log(data)
    callback(html_text)
}

module.exports=mail_formatter