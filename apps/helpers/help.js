var bcrypt = require("bcrypt");
var config = require("config");

function hashpass(password){
    var saltRounds = config.get("salt");
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = {
    hashpass: hashpass
}