var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();


var controllers = require(__dirname + "/apps/controllers");
app.use(bodyParser.json());
app.set('trust proxy',1)
app.use(session({
    secret: config.get("secret_key"),
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
}));
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