$(document).ready(function() {

	$(".modal").modal({
		dismissible	: false
	});
	$("#loginModal").modal("open");

	var userName;

	$("#loginbotao").click(function() {

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
							position: "topRight"
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

	});

});