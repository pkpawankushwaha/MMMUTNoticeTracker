const express = require('express');
const cheerio = require('cheerio')
const rp = require('request-promise')
url='http://mmmut.ac.in/AllNews'

var scrap = function(callback){
    var res_scrap={
        
        'data':'error',
        'link':'error'
    }

    rp(url).then(function(html){
        $=cheerio.load(html);

        $=$('#ContentPlaceHolder2_GridView1 > tbody>tr')
        //console.log($.length)
        var notices=[]
        var links=[]
        for(var i=1;i<$.length-1;i++){
            x=cheerio.load($[i])
            
          y=x('td>table>tbody>tr>td>a').text();
          zz=y.length-14
          notices.push(y.slice(0,zz))
           //console.log(y.slice(0,zz)+".")
           links.push(x('td>table>tbody>tr>td>a').attr('href'))
            
        }

        res_scrap['data']=notices
        res_scrap['link']=links
       // console.log(notices.length)
        //console.log(links.length)

        //for(var xx=0;xx<notices.length;xx++)console.log(notices[xx]+"\n-------------------------\n")
        callback(res_scrap);

    }).catch(function(err){
        console.log("ficked up");
        
        callback(res_scrap);
    })

    
}

module.exports=scrap