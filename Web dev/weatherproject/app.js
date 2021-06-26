const { response } = require("express");
const express=require("express");

const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));

const https=require("https");


app.get('/',function(req,res){

res.sendFile(__dirname+"/index.html");



    
});
app.post('/',function(req,res){
  

const city=req.body.cityname;
appid="439d4b804bc8187953eb36d2a8c26a02";
const url="https://samples.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid
 

    https.get(url,function(response){
        console.log(response.statusCode);
    
    response.on("data",function(data){

        const weatherdata=JSON.parse(data)

        console.log(weatherdata);

        // const object={
        //     name:"sarah",
        //     favorite_food:"pasta"
        // }
        //     JSON.stringify(object); un-parse the data
            console.log(object);
            const temp=weatherdata.main.temp;
            const description=weatherdata.weather[0].description;
            console.log(description);
            const icon=weatherdata.weather[0].icon;
            imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p> the atmosphere is  " + description+ " </p>");
            res.write("<h1> the tempurature is "+temp+" kelvinsm </h1>");
            res.write("<img src="+ imageurl+">");
            res.send();

    })

    })

})


app.listen(3000,function(req,res){

console.log("server runner at port 3000");

});