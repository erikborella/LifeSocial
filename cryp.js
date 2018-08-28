const cryptJs = require("crypto-js");

function crypter(valores, senha) {
    return cryptJs.AES.encrypt(valores, senha).toString();
}

function dCrypter(valores, senha) {
    var bytes = cryptJs.AES.decrypt(valores, senha);
    return bytes.toString(cryptJs.enc.Utf8);
}


module.exports = {crypter, dCrypter};

//U2FsdGVkX1+/Sq6Hy1wkdjD/E95AYz7gsnS78I3d0ec=
