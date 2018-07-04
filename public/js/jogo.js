
// Inicia a tela basico do jogo
 function initGame(indexUser) {

	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	var INTERVAL;

	var idade;
	var diasVividos;
	var money

	$.get("/getUserdata", (data, status) => {

		idade = data[indexUser].dados.idade;
		diasVividos = data[indexUser].dados.diasVividos;

		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ data[indexUser].dados.idade);
		$("#vivo").html("Dias vividos: "+ data[indexUser].dados.diasVividos);
		$("#money").html("Dinheiro: " + data[indexUser].dados.money);

		passDay();

	});
}

$("#fotoDiv").click(function() {
	$("#file").click();
});

$("#option").click(function() {
	stopDay();
})


function passDay() {
	INTERVAL =  setInterval(() => {
		console.log("test");
	}, 30000);
}

function stopDay() {
	clearInterval(INTERVAL);
}


