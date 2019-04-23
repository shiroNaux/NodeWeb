var express = require("express");

var router = express.Router();

router.use("/login", require(__dirname + "/login"));
router.use("/signup", require(__dirname + "/signup"));
router.use("/home", require(__dirname + "/home"));

router.get("/", function(req, res){
    res.render("homepage");
});


module.exports = router;