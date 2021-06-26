//jshint: esversion6

const express= require("express");

const bodyParser= require("body-parser");
const date=require(__dirname+"/date.js"); 
const app=express();

var workitems=[]
var items =["Cooking","Coding","Caring"];
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine','ejs');

app.get("/",function(req,res){

let day=date.getDate()

res.render('list',{listTitle:day, newItem:items});

});


app.get("/work",function(req,res){

    res.render('list',{listTitle:"Work list",newItem:workitems });
    
    });
    


app.post("/", function(req,res){
    var item=req.body.newitem;
  
console.log(req.body);
    if (req.body.list=="Work"){
        workitems.push(item)
        res.redirect("/work");
    }

    else{


        items.push(item);
        res.redirect("/");
    }
   
   
   })

   

    
  

app.listen(3000,function(req,res){

console.log("running server in 3000");

});