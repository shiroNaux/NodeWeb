var db = require("../common/database")
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    pass: String
});

var connect = db.getConnect();
var users = mongoose.model("user", userSchema);
module.exports = users;