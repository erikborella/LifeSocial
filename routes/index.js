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

router.post("/login", (req, res) => {
	var username = req.body.username;
	var password = req.body.password;

	var key = cryp.crypter(username, password);

	global.db.getUserData((e, docs) => {

		if (e) return console.log(e);

		var index = -1;

		for (var i = 0; i < docs.length; i++) {
			if (key == docs[i].user) {
				index = i;
				break;
			}
		}

		if (index == -1) {
			res.send(false);
			
		}
		else {

			var user = cryp.dCrypter(docs[index].user, password)
			var pass = cryp.dCrypter(docs[index].password , password)
			var nome = cryp.dCrypter(docs[index].dados.nome, password)
			var sobrenome = cryp.dCrypter(docs[index].dados.sobrenome , password)
			var email = cryp.dCrypter(docs[index].dados.email , password)



			var json = {
				"user" : user.toString(),
				"password": pass.toString(),
				"dados" : {
					"nome" : nome.toString(),
					"sobrenome" : sobrenome.toString(),
					"email" : email.toString()
				},
				"gameValues" : {
					"idade" : docs[index].gameValues.idade,
					"diasVividos" : docs[index].gameValues.diasVividos,
					"money" : docs[index].gameValues.money,
					"fome" : docs[index].gameValues.fome,
					"saude" : docs[index].gameValues.saude,
					"inteligencia" : docs[index].gameValues.inteligencia,
					"imposto" : docs[index].gameValues.imposto,
					"honestidade" : docs[index].gameValues.honestidade,
					"comida" : docs[index].gameValues.comida,
					"remedios" : docs[index].gameValues.remedios
				}
			}

			res.send(json)
			
		}
	})
})



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
			"honestidade" : 50,
			"comida" : 5,
			"remedios" : 5
		}
	}

	global.db.insertUserData(json, (e, data) => {
		if (e) console.log(e);
	})

	global.db.insertUsernames({"username" : req.body.usernameInput}, (e, data) => {
		if (e) console.log(e);
	})
	
})

router.get("/gameData", (req, res) => {
	
	global.db.getUserData((e, docs) => {

		var data = [];
		
		for (var i = 0; i < docs.length; i++) {
			data.push(docs[i].gameValues);
		}

		res.send(data);
		
		
	})

	
})




module.exports = router;

// ajk451714wxdw1215717_
