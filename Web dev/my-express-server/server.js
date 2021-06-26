// jshint esversion:6

const express= require("express");
const { response } = require("express");

var app = express();

app.get('/',function(req,res){
    res.send("<h1>hello,world</h1>");
});


app.get('/about',function(req,res){
    res.send("I AM SARAH");
});

app.get('/hello',function(req,res){
    res.send("I AM SARAH");
});


app.get('/contact',function(req,res){
    res.send("I AM SARAH");
});

app.get('/me',function(req,res){
    res.send("I AM SARAH");
});

app.listen(3000, function(){
    console.log("server started at 3000");
});

