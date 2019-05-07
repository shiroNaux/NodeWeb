var express = require("express");
var router = express.Router();
var user_model = require("../models/user");
var helper = require("../helpers/help");
router.get("/", function(req, res){
    res.render("signup",{data:{}});
    // console.log("adasd");
});


router.post("/", function(req, res){
    var body = req.body;
    if(body.username.trim().length == 0){
        res.render("signup",{data: {error:"name required"}});
    }
    var password = helper.hashpass(body.pass);
    user = {
        "name":body.username,
        "pass": password
    };
     res.json({"message":"inserted"});
    
});
module.exports = router;