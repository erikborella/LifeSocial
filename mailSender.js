var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "life.social.eb@gmail.com",
        pass: "lifesocial123"
    }
});

function sendMail(user, password) {
    var email = {
        from: "Life Social",
        to: user,
        subject: "Recuperação de senha",
        html: 'A sua senha é :'+password
    }
    transport.sendMail(email, (err, info) => {
        if(err) throw err;
        console.log(info);
    })
}

module.exports = {sendMail}