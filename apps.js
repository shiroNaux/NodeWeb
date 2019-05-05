var express = require("express");
var mongoose = require("mongoose");
var config = require("config");
var bodyParser = require("body-parser");
var app = express();


var controllers = require(__dirname + "/apps/controllers");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(controllers);
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
//
// conn.collection("user").insertOne(user);
// console.log('mongodb+srv://' + config.get("mongo.username")+":" +config.get("mongo.pass") +'@ndejsapp-t2ee4.mongodb.net/test?retryWrites=true');
// start
var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port,host, function(){
    console.log("server is running on port", port);
});