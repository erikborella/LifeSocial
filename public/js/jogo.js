//variaveis de tempo de jogo
var gameTime;
var dayTime = 1000;
var autoSave;
var autoSaveTime = dayTime*365;

//variaveis de dados de jogo
var user;
var password;

var nome;
var sobrenome;
var email;

var fome;
var saude;

var inteligencia;

var honestidade;

var imposto;

var money;
var diasVividos;
var idade;

var comida;
var remedios;

//Faz a verificação incial
$(document).ready(function () {

	data = JSON.parse(localStorage.getItem("data"));


	if (!data) { // se não tem data, ou seja, não logado volta para a tela de login e mostra a mensagem de erro
		localStorage.setItem("errorLogin", "true");
		window.location.replace("login.html")
	}
	else { //caso esteja logado, iniciara a função startGame() que define as variaves de dados e os tempos de jogo

		iziToast.success({
			title: "Bem vindo " + data.dados.nome
		})

		startGame(data);

	}
})

//Define as variaves de dados e os tempos de jogo

function startGame(data) {
	// define as variaves
	user = data.user;
	password = data.password;

	nome = data.dados.nome;
	sobrenome = data.dados.sobrenome;
	email = data.dados.email;
	nomeC = nome +" "+sobrenome;


	fome = Number(data.gameValues.fome);
	saude = Number(data.gameValues.saude);

	inteligencia = data.gameValues.inteligencia;

	honestidade = Number(data.gameValues.honestidade);

	imposto = Number(data.gameValues.imposto);

	money = Number(data.gameValues.money);
	diasVividos = Number(data.gameValues.diasVividos);
	idade = Number(data.gameValues.idade);

	comida = Number(data.gameValues.comida);
	remedios = Number(data.gameValues.remedios);

	//coloca os dados inicias na tela do jogo
	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);



	$("#nomePrincipal").html(nome);
	$("#nomePrincipal").html(nomeC);
	$("#emailS").html(email);


	//inicia os tempos de jogo
	gameTime = setInterval(passDay, dayTime);
	autoSave = setInterval(function () {
		iziToast.info({
			"message": "jogo salvo",
			"position": "bottomLeft"
		});
		save();
	}, (autoSaveTime));



}

//Calcula os dados quando passa o dia
function passDay() {

	if (diasVividos % 365 == 0) {
		idade++;
		inteligencia--;
	}

	diasVividos++;


	if (fome <= 0) {
		saude -= 3;
	}
	else {
		fome--;
		saude -= 0.3;
	}

	if (saude <= 0) {
		console.log("morreu");
		clearInterval(gameTime)
	}

	if (fome > 100) {
		fome = 100;
	}

	if (saude > 100) {
		saude = 100;
	}

	if (honestidade > 100) {
		honestidade = 100;
	} 

	if (honestidade < 0) {
		honestidade = 0;
	}


	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);

	$("#fomeBar").css("width", fome + "%");
	$("#saudeBar").css("width", saude + "%")
	$("#intBar").css("width", inteligencia + "%")
	$("#honestidadeBar").css("width", honestidade + "%");

	$("#ccasab small").html(comida)
	$("#rcasab small").html(remedios)

	verrifyBtns();

}



//salva o jogo
function save() {

	var json = {

		"user": user,
		"password": password,
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

	$.post("/save", json, (data, status) => {
		console.log(status);
	})



}

// Botão de sair
$("#sairBtn").click(function () {
	clearInterval(gameTime);
	iziToast.show({
		title: "Tem certeza que deseja sair?",
		message: "Seus dados serão salvos antes",
		theme: "dark",
		progressBar: false,
		timeout: 999999,
		position: "center",
		overlay: true,
		onClosing: (istance, toast) => {
			gameTime = setInterval(passDay, dayTime);
		},
		buttons: [
			["<button>Sim</button>", (instace, toast) => {

				clearInterval(gameTime);
				localStorage.removeItem("data");
				save();
				window.location.replace("login.html");

			}],
			["<button>Não</button>", (instance, toast) => {
				instance.hide({ transitionOut: 'fadeOutUp' }, toast);
				gameTime = setInterval(passDay, dayTime);
			}]
		]
	})
})

// Para evitar voltar para a tela de login, comente esse evento abaixo
$(window).bind("beforeunload", function () {
	localStorage.removeItem("data");
})


function verrifyBtns() {


	function removeCC(elem) {
		$(`#${elem}`).addClass("disabled");
	}
	function addCC(elem) {
		$(`#${elem}`).removeClass("disabled");
	}

	//comer em casa
	if (comida <= 0) {
		removeCC("ccasab")
	}
	else {
		addCC("ccasab")
	}

	//fast Food
	if (money < 10) {
		removeCC("fastfoodb");
	}
	else {
		addCC("fastfoodb");
	}

	// restaurante
	if (money < 40) {
		removeCC("restauranteb");
	}
	else {
		addCC("restauranteb");
	}

	//chef privado
	if (money < 100) {
		removeCC("chefb");
	}
	else {
		addCC("chefb");
	}

	//remedios de casa

	if (remedios <= 0) {
		removeCC("rcasab")
	}
	else {
		addCC("rcasab")
	}


	//pronto socorro
	if (money < 10) {
		removeCC("prontosocorrob");
	}
	else {
		addCC("prontosocorrob");
	}

	//medico
	if (money < 150) {
		removeCC("medicab");
	}
	else {
		addCC("medicab");
	}


	//hospital
	if (money < 300) {
		removeCC("hospitalb");
	}
	else {
		addCC("hospitalb");
	}

	///trabalhar

	//pedreito

	if (honestidade < 10) {
		removeCC("pedreirob")
	}
	else {
		addCC("pedreirob");
	}

	//programador e professor

	if (honestidade < 20) {
		removeCC("progb");
		removeCC("profb")
	}
	else {
		addCC("progb");
		addCC("profb")
	}

	//sociologo
	
	if (honestidade < 50) {
		removeCC("sociologob");
	}
	else {
		addCC("sociologob");
	}

	if (honestidade >= 80) {
		removeCC("rjoiasb");
	}
	else {
		addCC("rjoiasb");
	}

	if (honestidade >= 70) {
		removeCC("rdinheirosb");
	}
	else {
		addCC("rdinheirosb");
	}

	if (honestidade >= 60) {
		removeCC("bancob");
	}
	else {
		addCC("bancob");
	}

	if (honestidade >= 50) {
		removeCC("politicob");
	}
	else {
		addCC("politicob");
	}

	//mercado

	if (money < 7) {
		removeCC("ccomidab");
		removeCC("cremediob");
	}
	else {
		addCC("ccomidab");
		addCC("cremediob");
	}

	if (money < 200) {
		removeCC("quitineteb")
	}
	else {
		addCC("quitineteb");
	}

	if (money < 20000) {
		removeCC("apartamentob")
	}
	else {
		addCC("apartamentob");
	}

	if (money < 30000) {
		removeCC("casapqb")
	}
	else {
		addCC("casapqb");
	}

	if (money < 45000) {
		removeCC("casamdb");
	}
	else {
		addCC("casamdb");
	}

	if (money < 60000) {
		removeCC("mansaob");
	}
	else {
		addCC("mansaob");
	}

	if (money < 2000) {
		removeCC("antigob")
	}
	else {
		addCC("antigob");
	}

	if (money < 10000) {
		removeCC("seminovob")
	}
	else {
		addCC("seminovob");
	}

	if (money < 15000) {
		removeCC("popularb")
	}
	else {
		addCC("popularb");
	}

	if (money < 25000) {
		removeCC("esportivob")
	}
	else {
		addCC("esportivob");
	}

	if (money < 50000) {
		removeCC("altaclasseb")
	}
	else {
		addCC("altaclasseb");
	}

	if (money < 300) {
		removeCC("livrosb");
	}
	else {
		addCC("livrosb");
	}
	if (money < 500) {
		removeCC("yoyob");
		removeCC("cubob");
	}
	else {
		addCC("yoyob");
		addCC("cubob");

	}
	
	if (money < 1500) {
		removeCC("tvb");
	}
	else {
		addCC("tvb");
	}
	if (money < 2500) {
		removeCC("computadorb");
	}
	else {
		addCC("computadorb");
	}




}