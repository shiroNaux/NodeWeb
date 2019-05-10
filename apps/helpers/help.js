var bcrypt = require("bcrypt");
var config = require("config");

function hashpass(password){
    var saltRounds = config.get("salt");
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}
function unhash(pass, hash){
    return bcrypt.compareSync(pass,hash);
}
module.exports = {
    hashpass: hashpass,
    unhash: unhash
}