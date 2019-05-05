var express = require("express");
var router = express.Router();
var user_model = require("../models/user");
router.get("/", function(req, res){
    res.render("signup",{data:{}});
    // console.log("adasd");
});


// router.post("/", function(req, res){
//     var body = req.body;
//     if(body.username.trim().length == 0){
//         res.render("signup",{data: {error:"name required"}});
//     }
//     user = {
//         "name":body.username,
//         "pass": body.pass
//     };
//     user_model.addus(user);
// });
module.exports = router;