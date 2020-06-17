var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config)
    .connection
        .on('connected',function(){
            console.log("connected"+ config)
        })
        .on('error',function(err){
            console.log("error "+ err)
        })
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("HIIIIIIIIIII.....................Detected");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/employees', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})