var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "life.social.eb@gmail.com",
        pass: "lifesocial123"
    }
});

function sendMail(user, username, password) {
    var email = {
        from: "Life Social",
        to: user,
        subject: "Recuperação de senha",
        html: 'Seu User: '+username+'<br>Sua Senha: '+password
    }
    transport.sendMail(email, (err, info) => {
        if(err) throw err;
        console.log(info);
    })
}

function MailZuero(user, name, msg) {
    var email = {
        from: "Life Social",
        to: user,
        subject: "Parabens, voce se inscreveu",
        html: msg
    }
    transport.sendMail(email, (err, info) => {
        if (err) throw err;
        console.log(info);
        
    })
}

module.exports = {sendMail, MailZuero}