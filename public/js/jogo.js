
// Inicia a tela basico do jogo
 function initGame(indexUser) {

	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	$.get("/getUserdata", (data, status) => {
		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ data[indexUser].dados.idade);
		$("#vivo").html("Dias vividos: "+ data[indexUser].dados.diasVividos);
		$("#money").html("Dinheiro: " + data[indexUser].dados.money);

	});
}

$("#fotoDiv").click(function() {
	$("#file").click();
});


