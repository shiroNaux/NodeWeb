var db = require("../common/database")
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    pass: String
});
// mongoose.connect('mongodb+srv://' + config.get("mongo.username")+":" +config.get("mongo.pass") +'@nodejsapp-t2ee4.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });
// console.log('mongodb+srv://' + config.get("mongo.username")+":" +config.get("mongo.pass") +'@nodejsapp-t2ee4.mongodb.net/test?retryWrites=true');

var users = mongoose.model("user", userSchema);
module.exports = users;