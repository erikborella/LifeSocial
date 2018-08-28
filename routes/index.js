var express = require('express');
var router = express.Router();
var cryp = require("../cryp");

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/testCry', (req, res) => {
	var cr = cryp.crypter(req.body.men, req.body.senha).toString();
	console.log(cr);
	res.send(cr);
})

router.post("/testdCry", (req, res) => {
	var dr = cryp.dCrypter(req.body.men, req.body.senha);
	console.log(dr);
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

	global.db.getUserData((e, docs) => {

		var index = -1;

		for (var i = 0; i < docs.length; i++) {
			if (cryp.dCrypter(docs[i].user, password) == username) {
				index = i;
				break;
			}
		}

		if (index != -1) {

			var user = cryp.dCrypter(docs[index].user, password);
			var pass = cryp.dCrypter(docs[index].password, password);
			//dados
			var nome = cryp.dCrypter(docs[index].dados.nome, password);
			var sobrenome = cryp.dCrypter(docs[index].dados.sobrenome, password);
			var email = cryp.dCrypter(docs[index].dados.email, password);
			//gameValues
			var idade = docs[index].gameValues.idade;
			var diasVividos = docs[index].gameValues.diasVividos;
			var money = docs[index].gameValues.money;
			var fome = docs[index].gameValues.fome;
			var saude = docs[index].gameValues.saude;
			var inteligencia = docs[index].gameValues.inteligencia;
			var imposto = docs[index].gameValues.imposto;
			var honestidade = docs[index].gameValues.honestidade;
			var comida = docs[index].gameValues.comida;
			var remedios = docs[index].gameValues.remedios;

			var json = {
				"user": user,
				"password": pass,
				"dados": {
					"nome": nome,
					"sobrenome": sobrenome,
					"email": email
				},
				"gameValues": {
					"idade": idade,
					"diasVividos": diasVividos,
					"money": money,
					"fome": fome,
					"saude": saude,
					"inteligencia": inteligencia,
					"imposto": imposto,
					"honestidade": honestidade,
					"comida": comida,
					"remedios": remedios
				}
			}

			res.send(json);

		}

		else {
			res.send(false);
		}
	})


})


router.post("/singupData", (req, res) => {

	var password = req.body.passwordInput;

	var json = {
		"user": cryp.crypter(req.body.usernameInput, password),
		"password": cryp.crypter(req.body.passwordInput, password),
		"dados": {
			"nome": cryp.crypter(req.body.nameInput, password),
			"sobrenome": cryp.crypter(req.body.surnameInput, password),
			"email": cryp.crypter(req.body.emailInput, password)
		},
		"gameValues": {
			"idade": 0,
			"diasVividos": 0,
			"money": 10,
			"fome": 100,
			"saude": 100,
			"inteligencia": 1,
			"imposto": 0,
			"honestidade": 50,
			"comida": 5,
			"remedios": 5
		}
	}

	global.db.insertUsernames({ "username": req.body.usernameInput }, (e, data) => {
		if (e) console.log(e);
	})

	global.db.insertUserData(json, (e, data) => {
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

router.post("/save", (req, res) => {

	global.db.getUserData((e, docs) => {
		var querry;
		for (var i = 0; i < docs.length; i++) {
			if (cryp.dCrypter(docs[i].user, req.body.password) == req.body.user) {
				querry = docs[i].user
				break;
			}
		}

		var values = {
			gameValues: {
				"idade": req.body.idade,
				"diasVividos": req.body.diasVividos,
				"money": req.body.money,
				"fome": req.body.fome,
				"saude": req.body.saude,
				"inteligencia": req.body.inteligencia,
				"imposto": req.body.imposto,
				"honestidade": req.body.honestidade,
				"comida": req.body.comida,
				"remedios": req.body.remedios
			}
		}

		global.db.saveData(querry, values, (e, docs) => {

		})

	})






})



module.exports = router;

// ajk451714wxdw1215717_
