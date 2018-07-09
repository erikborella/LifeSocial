
// Inicia a tela basico do jogo

var INTERVAL;
var SAVER;

var name;

var idade;
var diasVividos;
var money;

var indexUser;

var fomebarL;
var saudebarL;

$("#fotoDiv").click(function() {
	$("#file").click();
});


function initGame(indexxer) {

  indexUser = indexxer;
  
	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	$.get("/getUserdata", (data, status) => {

		idade = data[indexUser].gameValues.idade;
		diasVividos = data[indexUser].gameValues.diasVividos;
		money = data[indexUser].gameValues.money;

		fomebarL = data[indexUser].gameValues.fomebarL;
		saudebarL = data[indexUser].gameValues.saudebarL;

		name = data[indexUser].dados.nome;

		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ idade);
		$("#vivo").html("Dias vividos: "+ diasVividos);
		$("#money").html("Dinheiro: " + money);

		passDay();
		saveCounter();

	});
}

function passDay() {
	function refreshData() {
		$("#anos").html("Anos vividos: "+ idade);
		$("#vivo").html("Dias vividos: "+ diasVividos);
		$("#money").html("Dinheiro: " + money);
	}

	INTERVAL =  setInterval(() => {
		diasVividos++;
		// Contador de anos
		if (diasVividos % 365 == 0) {
			idade++;
		}
		// Barra de fome
		if (fomebarL < 0 ) {
			fomebarL = 0;
		}
		else {
			$("#fomeBar").css("width", fomebarL-- +"%");
		}
		// Barra de comida
		if (saudebarL < 0) {
			saudebarL = 0;
		}
		else {
			saudebarL = saudebarL - 0.5;
			$("#saudeBar").css("width", saudebarL+"%");
		}

		refreshData();

	}, 100);
}

function saveCounter() {
	SAVER = setInterval(() => {
		saveAll();
	}, 10000)
}

function saveAll() {
	var mdf = {
		"idade" : idade,
		"diasVividos": diasVividos, 
		"money": money, 
		"fomebarL": fomebarL,
		"saudebarL": saudebarL,
		"querry" : name
	}

	$.post("/updateData", mdf, (data, status) => {
		console.log(status);
	});
}

function stopDay() {
	clearInterval(INTERVAL);
}

function stopSaver() {
	clearInterval(SAVER);
}
