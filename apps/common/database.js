var config = require("config");
var mongoose = require("mongoose");


var username = config.get("mongo.username");
var pass = config.get("mongo.pass");

var connection = mongoose.connect('mongodb+srv://' + username + ":" + pass + '@nodejsapp-t2ee4.mongodb.net/test?retryWrites=true');
function getconnect(){
    if(!connection){
        connection.connect();
    }
}
module.exports = {getConnect: getconnect
}