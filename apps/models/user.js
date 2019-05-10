var db = require("../common/database")
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var helper = require("../helpers/help");

db.getConnect();
var userSchema = new Schema({
    name: String,
    pass: String
});
var usersModel = mongoose.model("user", userSchema);
function addus(user){
    adduser = new usersModel({
        "name": user.name,
        "pass": user.pass
    });

    adduser.save(function(err){
        if(err) {
        throw err;
        }   
    });
}
function finduser(username,password,callback){
    var re = usersModel.findOne({"name":username},function(err,doc){      
            if(err){
                console.log(err);
                return callback(err);
            } 
            if(doc.length == 0) {
                console.log("No record found");
                return callback(err);
            }
            var result =  doc.pass;    
            var r = helper.unhash(password, result);
            return callback(doc);
        });
}

module.exports = {
    addus : addus,
    usersModel: usersModel,
    finduser: finduser
}