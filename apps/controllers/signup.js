var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.render("signup",{data:{}});
    console.log("adasd");
});


router.post("/signup", function(req, res){
    console.log("sadadadaad")
    var user = req.body;
    if(user.username.trim().length == 0){
        res.render("signup",{data: {error:"name reqired"}});
    }
});
module.exports = router;