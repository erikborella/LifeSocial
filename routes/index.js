var express = require('express');
var router = express.Router();
var cryp = require("../cryp");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/testCry', (req, res) => {
	var cr = cryp.crypter(req.body.men, req.body.senha);
	res.send(cr);
})

router.post("/testdCry", (req, res) => {
	var dr = cryp.dCrypter(req.body.men, req.body.senha);
	res.send(dr);
})

router.get("/getUsernames", (req, res) => {
	global.db.getUsernames((e, docs) => {
		res.send(docs);
	})
});


router.post("/singupData", (req, res) => {
	var password = req.body.passwordInput;


	var json = {
		"user" : cryp.crypter(req.body.usernameInput , password),
		"password": cryp.crypter(req.body.passwordInput , password),
		"dados" : {
			"nome" : cryp.crypter(req.body.nameInput , password),
			"sobrenome" : cryp.crypter(req.body.surnameInput , password),
			"email" : cryp.crypter(req.body.emailInput , password)
		},
		"gameValues" : {
			"idade" : 0,
			"diasVividos" : 0,
			"money" : 10,
			"fome" : 100,
			"saude" : 100,
			"inteligencia" : 1,
			"imposto" : 0,
			"honestidade" : 50
		}
	}

	global.db.insertUserData(json, (e, data) => {
		if (e) console.log(e);
	})

	global.db.insertUsernames({"username" : req.body.usernameInput}, (e, data) => {
		if (e) console.log(e);
	})
	
})




module.exports = router;

// ajk451714wxdw1215717_
