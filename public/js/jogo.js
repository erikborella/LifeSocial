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


	fome = data.gameValues.fome;
	saude = data.gameValues.saude;

	inteligencia = data.gameValues.inteligencia;

	honestidade = data.gameValues.honestidade;

	imposto = data.gameValues.imposto;

	money = data.gameValues.money;
	diasVividos = data.gameValues.diasVividos;
	idade = data.gameValues.idade;

	comida = data.gameValues.comida;
	remedios = data.gameValues.remedios;

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


	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);

	$("#fomeBar").css("width", fome + "%");
	$("#saudeBar").css("width", saude + "%")
	$("#intBar").css("width", inteligencia + "%")
	$("#honestidadeBar").css("width", honestidade + "%");



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