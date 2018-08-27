var gameTime;
var autoSave;
var dayTime = 1000;

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

	if (!data) {
		localStorage.setItem("errorLogin", "true");
		window.location.replace("login.html")
	}
	else {

		iziToast.success({
			title: "Bem vindo " + data.dados.nome
		})

		startGame(data);

	}
})

//Inicia os valores de jogo
function startGame(data) {
	console.log(data);

	user = data.user;
	password = data.password;

	nome = data.dados.nome;
	sobrenome = data.dados.sobrenome;
	email = data.dados.email;

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

	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);

	gameTime = setInterval(passDay, dayTime);
	autoSave = setInterval(function () {
		iziToast.info({
			"message": "jogo salvo",
			"position": "bottomLeft"
		});
		save();
	}, (dayTime * 10));



}

//Calcula os dados quando passa o dia
function passDay() {
	diasVividos++;

	if (diasVividos % 365 == 0) {
		idade++;
	}


	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);
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
				window.location.replace("login.html");

			}],
			["<button>Não</button>", (instance, toast) => {
				instance.hide({ transitionOut: 'fadeOutUp' }, toast);
				gameTime = setInterval(passDay, dayTime);
			}]
		]
	})
})

//Botão de salvar
$("#saveBtn").click(function () {
	save();
})

// Para evitar voltar para a tela de login, comente esse evento abaixo
$(window).bind("beforeunload", function () {
	localStorage.removeItem("data");
})

