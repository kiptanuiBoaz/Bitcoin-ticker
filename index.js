const express= require("express");
const bodyParser = require("body-parser");
const request = require ("request");

const app=express();

app.use(bodyParser.urlencoded({extended :true}));

app.get("/" ,function(req,res){
    res.sendFile(__dirname +"/index.html");
});


// app.post("/" ,function (req,res){
//     console.log(req.body.crypto);
// });

app.post("/" , function(req,res){
    // console.log(req.body.crypto);

    var crypto = req.body.crypto;
    var fiat =req.body.fiat;
    var amount= req.body.amount;

    var baseURL = "https://blockchain.info/tobtc";
    var finalURL =  baseURL +cypto +fiat;

    var options = {
    
         url: "https://apiv2.bitcoinaverage.com/convert/global",
         method: "GET",
         qs:{
             amount: amount,
             from:crypto,    
             to:fiat,
              
         }        
    }
    
    request (options,
     
     function(error,response, body){
            var data=JSON.parse(body)
            var price= data.last;
            var currentDate = data.display_timestamp;

            var currentDate = data.time; 

            res.write("<p> The current date is " + currentDate +"</p>");
            res.write("<h1>" + amount + cryptol + " is  currently worth" + price +fiat +"</h1>");
            res.send();

        }
    );
});


app.listen(3000, function(){
    console.log("server is running on port 3000");

});

 