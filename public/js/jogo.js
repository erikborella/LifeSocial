var data;

$(document).ready(function() {

	data = JSON.parse(localStorage.getItem("data"));

	if (!data) {
		window.location.replace("login.html")
	}
	else {

		iziToast.success({
			title : "Bem vindo " + data.dados.nome
		})
		
	}
})

$(window).bind("beforeunload", function() {
	localStorage.removeItem("data");
})