var db = require("../common/database")
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

db.getConnect();
var userSchema = new Schema({
    name: String,
    pass: String
});
function addus(user){
    adduser = users({
        "name": user.name,
        "pass": user.pass
    });

    adduser.save(function(err){
        if(err) {
        throw err;
        }   
    });
}
var users = mongoose.model("user", userSchema);
module.exports = {
    addus : addus
}