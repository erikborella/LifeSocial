const crypto = require("crypto");


function crypter(valores, senha) {
    var cipher = crypto.createCipher("aes256", senha);
    cipher.update(valores);
    return cipher.final("hex");
}

function dCrypter(valores, senha) {
    var dcipher = crypto.createDecipher("aes256", senha);
    dcipher.update(valores, "hex");
    return dcipher.final();
}

module.exports = {crypter, dCrypter};