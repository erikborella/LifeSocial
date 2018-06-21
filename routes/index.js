var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/confirmSingup', function(req, res) {
	var user = req.body.name;
	var sobrenome = req.body.sobrenome;
	var password = req.body.password;
	var email = req.body.email;

	console.log("ok!");
	console.log(req.body);
	res.send("");

	global.db.insert({
		"user" : user,
		"password" : password,
		"dados" : {
			"nome" : user,
			"sobrenome" : sobrenome,
			"email" : email,
			"idade" : 0,
			"diasVividos" : 0
		}
	}, (err, result) => {
		if (err) { return console.log(err);}
	})
});

router.get('/getUserdata', function(req, res) {
	global.db.findAll((e, docs) => {
		if(e) {return console.log(e);}
		res.send(docs);
	})
});

router.post('/findPassword', (req, res) => {
	var email = req.body.email;

	global.db.findAll((e, docs) => {
		if (e) {return console.log(e);}

		var exist = false;
		var index;

		for (var i = 0; i < docs.length; i++) {
			if (docs[i].dados.email == email) {
				exist = true
				index = i;
			};
		}

		if (!exist) {
			res.send("false");
		}
		else {
			var username = docs[index].user;
			var password = docs[index].password;
			global.mailSender.sendMail(email, username, password);
			res.send("true");
		}

	})
	
});

router.post("/zuero", (req, res) => {
	var email = req.body.email;
	var user = req.body.user;
	var msg = req.body.mensagem;

	global.mailSender.MailZuero(email, user, msg);
	res.send("true");
})



module.exports = router;
