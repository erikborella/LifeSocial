var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});


//test de criptografia
router.post('/testCry', (req, res) => {
	var cr = (req.body.men, req.body.senha).toString();
	console.log(cr);
	res.send(cr);
})

//teste de descriptografia
router.post("/testdCry", (req, res) => {
	var dr = (req.body.men, req.body.senha);
	console.log(dr);
	res.send(dr);
})

//retornar os nomes de usuarios
router.get("/getUsernames", (req, res) => {
	global.db.getUsernames((e, docs) => {
		res.send(docs);
	})
});

// manda as informações de login
router.post("/login", (req, res) => {
	var username = req.body.username;
	var password = req.body.password;

	//pega os dados do db criptografados
	global.db.getUserData((e, docs) => {

		var index = -1;

		//procura pela posição do usuario
		for (var i = 0; i < docs.length; i++) {
			if ((docs[i].user) == username) {
				index = i;
				break;
			}
		}
		
		console.log(index);
		


		//só se ele existe
		if (index != -1) {

			//faz a descriptografia dos dados

			var user = (docs[index].user);
			var pass = (docs[index].password);
			//dados
			var nome = (docs[index].dados.nome);
			var sobrenome = (docs[index].dados.sobrenome);
			var email = (docs[index].dados.email);
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


			//monta o json de retorno
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

			//manda o Json de volta
			res.send(json);

		}

		//se a posição não exisir, retornar false

		else {
			res.send(false);
		}
	})


})



//faz o cadastro
router.post("/singupData", (req, res) => {

	var password = req.body.passwordInput;


	//criptografa tudo e monta o json
	var json = {
		"user": (req.body.usernameInput),
		"password": (req.body.passwordInput),
		"dados": {
			"nome": (req.body.nameInput),
			"sobrenome": (req.body.surnameInput),
			"email": (req.body.emailInput)
		},
		"gameValues": {
			"idade": 0,
			"diasVividos": 0,
			"money": 10,
			"fome": 100,
			"saude": 100,
			"inteligencia": 5,
			"imposto": 0,
			"honestidade": 50,
			"comida": 0,
			"remedios": 0
		}
	}


	//coloca o username no db de usernames
	global.db.insertUsernames({ "username": req.body.usernameInput }, (e, data) => {
		if (e) console.log(e);
	})

	//coloca o json no db do json
	global.db.insertUserData(json, (e, data) => {
		if (e) console.log(e);
	})

})

//retornar todos valores de game do db
router.get("/gameData", (req, res) => {

	global.db.getUserData((e, docs) => {

		var data = [];

		for (var i = 0; i < docs.length; i++) {
			data.push(docs[i].gameValues);
		}

		res.send(data);


	})

})


//faz o save do jogo
router.post("/save", (req, res) => {

	//procura a posição no db
	global.db.getUserData((e, docs) => {
		var querry;
		for (var i = 0; i < docs.length; i++) {
			if ((docs[i].user, req.body.password) == req.body.user) {
				//acha a posição do querry
				querry = docs[i].user
				break;
			}
		}

		//define  o json dos gameValues
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

		//manda salvar os dados novos
		global.db.saveData(querry, values, (e, docs) => {

		})

	})






})



module.exports = router;

// ajk451714wxdw1215717_
