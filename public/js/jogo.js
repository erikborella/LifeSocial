function initGame(indexUser) {

	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	$.get("/getUserdata", (data, status) => {
		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ data[indexUser].dados.idade);
		$("#vivo").html("Dias vividos: "+ data[indexUser].dados.diasVividos);
		
	})
}