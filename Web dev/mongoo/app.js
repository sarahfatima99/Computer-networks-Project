const MongoClient = require('mongodb').MongoClient
const assert= require('assert');
const url='mongodb://localhost:27017';

const dbname='fruitsDB';
const client= new MongoClient(url,{useUnifiedTopology: true});

client.connect(function(err){

client.connect(function(err){
    assert.equal(null,err);
    console.log("connected");
    const db =client.db(dbname);
    insertDocuments(db,function(){
        client.close();
    })
  
})

})
const insertDocuments=function(db,callback){

db.createCollection('halo');

db.collection('halo').insertMany([

    {a:1},{a:2},{a:3}], function(err,result){
        assert.equal(err,null);
        assert.equal(3,result.result.n);
        assert.equal(3,result.ops.length);
        console.log("inserted 3 docs into collections");
        callback(result)

});

}