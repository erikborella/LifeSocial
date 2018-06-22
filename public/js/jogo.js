
// Inicia a tela basico do jogo
 function initGame(indexUser) {

	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	$.get("/getUserdata", (data, status) => {
		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ data[indexUser].dados.idade);
		$("#vivo").html("Dias vividos: "+ data[indexUser].dados.diasVividos);

		var lateralbarHeih = parseInt($(".user-view").css("height")) - parseInt($(".user-view").css("padding-top"));
		$("#barUp").css("height", lateralbarHeih);
		
	});
}

$("#fotoDiv").click(function() {
	$("#file").click();
});
