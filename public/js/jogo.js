var gameTime;
var dayTime;

var fome;
var saude;

var inteligencia;

var honestidade;

var imposto;

var money;
var diasVividos;
var idade;

$(document).ready(function () {

	data = JSON.parse(localStorage.getItem("data"));

	if (!data) {
		window.location.replace("login.html")
	}
	else {

		iziToast.success({
			title: "Bem vindo " + data.dados.nome
		})

		startGame(data);

	}
})


function startGame(data) {

	fome = data.gameValues.fome;
	saude = data.gameValues.saude;

	inteligencia = data.gameValues.inteligencia;

	honestidade = data.gameValues.honestidade;

	imposto = data.gameValues.imposto;

	money = data.gameValues.money;
	diasVividos = data.gameValues.diasVividos;
	idade = data.gameValues.idade;

	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);

	gameTime = setInterval(passDay, dayTime);

	
}

function passDay() {
	diasVividos++;

	if (diasVividos % 365 == 0) {
		idade++;
	}


	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);
}



// Para evitar voltar para a tela de login, comente esse evento abaixo
$(window).bind("beforeunload", function () {
	localStorage.removeItem("data");
})

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
