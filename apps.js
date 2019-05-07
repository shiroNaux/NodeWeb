var express = require("express");
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
app.use("/static", express.static(__dirname + "/public"));

// start
var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port,host, function(){
    console.log("server is running on port", port);
});