var express = require("express");

var router = express.Router();
var user_md = require("../models/user");

router.use("/login", require(__dirname + "/login"));
router.use("/signup", require(__dirname + "/signup"));
router.use("/home", require(__dirname + "/home"));

module.exports = router;