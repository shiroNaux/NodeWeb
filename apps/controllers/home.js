var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    if(req.sessionID){
        console.log(req.sessionID);
        res.json({"message": "home"});
    } else{
        res.redirect("/login");
        console.log(req.session.user);
    }
    
});

module.exports = router;