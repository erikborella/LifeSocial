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
			"email" : email
		},
		"gameValues" : {
			"idade" : 0,
			"diasVividos" : 0,
			"money" : 10,
			"fomebarL": 100,
			"saudebarL": 100,
			"honestidadeBarL": 0,
			"desonestidadeBarL": 0
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

router.post("/updateData", (req, res) => {

	
	var queryy = req.body.querry;

	var data = {
		"idade" : req.body.idade,
		"diasVividos" : req.body.diasVividos,
		"money" : req.body.money,
		"fomebarL": req.body.fomebarL,
		"saudebarL": req.body.saudebarL
	};

	global.db.update(queryy, data, (e, data) => {
		if (e) console.log(e);
	})
	
	
})



module.exports = router;
