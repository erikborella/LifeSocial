var userName;
var inLogin = true;

$(document).ready(function() {

	$(".modal").modal({
		dismissible	: false
	});
	$("#loginModal").modal("open");
	$('.dropdown-trigger').dropdown();


});

$("#loginbotao").click(function() {
	login();
});

$(document).keypress((key) => {
	
	if (inLogin && key.key === "Enter") {
		login();
	}
})


function login() {

	inLogin = false;
	
	$.get("/getUserdata", function(data, status) {

		var userIndex;

		userName = data;

		var login = $("#logininput").val();
		var senha = $("#senhainput").val();
		if (!login) {
			iziToast.error({
				title: "Digite o seu username!",
				position: "topRight"
			});
		}
		else if (!senha) {
			iziToast.error({
				title: "Digite a sua Senha!",
				position: "topRight"
			});
		}

		else {
			var acessou = false;

			for (var i = 0; i < userName.length; i++) {
				if (userName[i].user == login && userName[i].password == senha) {
					iziToast.success({
						title: "Bem vindo " + userName[i].user,
						position: "bottomRight"
					})
					acessou = true;
					userIndex = i;

				}
			}

			if (!acessou) {
				iziToast.error({
					title: "Dados incorretos",
					position: "topRight"
				});
				$("#lostPassword").show(100);
			}
			else {
				initGame(userIndex);
			}	
		}
	});	
}