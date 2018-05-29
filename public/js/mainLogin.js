$(document).ready(function() {

	var userName;

	$("#loginbotao").click(function() {

		$.get("/getUserdata", function(data, status) {

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
							title: "Parabens, em breve isso",
							position: "topRight"
						})
						acessou = true;

					}
				}

				if (!acessou) {
					iziToast.error({
						title: "Dados incorretos",
						position: "topRight"
					});
					$("#lostPassword").show();
				}	
			}
		});	

	});

});