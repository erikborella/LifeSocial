$(document).ready(function() {

	data = JSON.parse(localStorage.getItem("data"));

	if (!data) {
		window.location.replace("login.html")
	}
	else {

		iziToast.success({
			title : "Bem vindo " + data.dados.nome
		})

		startGame(data);
		
	}
})


function startGame(data) {
	var fome = data.gameValues.fome;
	var saude = data.gameValues.saude;

	var inteligencia = data.gameValues.inteligencia;
	
	var honestidade = data.gameValues.honestidade;

	var imposto = data.gameValues.imposto;

	var money = data.gameValues.money;
	var diasVividos = data.gameValues.diasVividos;
	var idade = data.gameValues.idade;

	$("#money").html("Dinheiro : " + money);
	$("#anos").html("Anos : " + idade);
	$("#vivo").html("Dias vivos : " + diasVividos);

	var gameTime = setInterval(function() {


		diasVividos++;

		if (diasVividos % 365 == 0) {
			idade++;
		}


		$("#money").html("Dinheiro : " + money);
		$("#anos").html("Anos : " + idade);
		$("#vivo").html("Dias vivos : " + diasVividos);
	}, 30);
}

$(window).bind("beforeunload", function() {
	localStorage.removeItem("data");
})