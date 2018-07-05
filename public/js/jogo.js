
// Inicia a tela basico do jogo

var INTERVAL;

var idade;
var diasVividos;
var money;

var indexUser;

var fomebarL = 100;
var saudebarL = 100;

 function initGame(indexxer) {

  indexUser = indexxer;
  
	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	$.get("/getUserdata", (data, status) => {

		idade = data[indexUser].dados.idade;
		diasVividos = data[indexUser].dados.diasVividos;
		money = data[indexUser].dados.money;

		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ idade);
		$("#vivo").html("Dias vividos: "+ diasVividos);
		$("#money").html("Dinheiro: " + money);

		passDay();

	});
}

$("#fotoDiv").click(function() {
	$("#file").click();
});

$("#option").click(function() {
	stopDay();
  $.post("/updateData", {"idade" : idade, "diasVividos": diasVividos, "money": money, "querry" : name}, (data, status) => {
    console.log(status);
  })

  $.get("/getUserdata", (data, status) => {
    $.post("/updateData", {
      "querry" : data[indexUser].user,
      "nome" : data[indexUser].dados.nome,
      "sobrenome" : data[indexUser].dados.sobrenome,
      "email" : data[indexUser].dados.email,
      "idade" : idade,
      "diasVividos": diasVividos,
      "money" : money
    }, (data2, status) => {
      console.log(status);
    })
  });



})

function passDay() {
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

function stopDay() {
	clearInterval(INTERVAL);
}

function refreshData() {
	$("#anos").html("Anos vividos: "+ idade);
	$("#vivo").html("Dias vividos: "+ diasVividos);
	$("#money").html("Dinheiro: " + money);
}
