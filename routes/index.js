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
			"idade" : 18,
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
	var password = req.body.password;

	global.mailSender.sendMail(email, password);

	res.send("");
	
});



module.exports = router;
