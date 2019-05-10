var express = require("express");
var router = express.Router();
var helper = require("../helpers/help");
var user_model = require("../models/user");

router.get("/", function(req, res){
    res.render("login",{data:{}});
});
router.post("/", function(req,res){
    var body = req.body;
    
        var result = user_model.finduser(body.username, body.pass, function(r){
            if(r){
                res.json({"message":"ahihi"});
                req.sessionID = r.pass;
            } else{
                res.render("login",{data: {error:"failed"}});
            }
        });
        console.log(req.sessionID);
    }
);
module.exports = router;