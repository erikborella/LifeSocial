$(document).ready(function() {

	var check = false;
	var userName;

	$("#termosdeuso").click(function() {

		window.open("TermoDeUso.html");

	});

	$("#singupbotao").click(function() {

		$.get("/getUserdata", function(data, status) {
			userName = data;

			var name = $("#logininput").val();
			var surname = $("#surnameinput").val();
			var password = $("#senhainput").val();
			var password2 = $("#senhainput2").val();

			if (!name) {
				iziToast.error({
					title: "Digite o seu Username",
					position: "topRight"
				})
			}
			else if (!password) {
				iziToast.error({
					title: "Digite a Senha",
					position: "topRight"
				})
			}
			else if (!password2) {
				iziToast.error({
					title: "Confirme a senha",
					position: "topRight"
				})
			}
			else if (!surname) {
				iziToast.error({
					title: "Digite o seu sobrenome!",
					position: "topRight"
				})
			}
			else if (password != password2) {
				iziToast.error({
					title: "As senhas digitadas são diferentes",
					position: "topRight"
				})
			}
			else if (!check) {
				iziToast.error({
					title: "Voce não concordou com os termos de uso",
					position: "topRight"
				})
			}
			else {

				console.log(passwordCheck(password));

				var userExist = false;

				for (var i = 0; i < userName.length; i++) {
					if (userName[i].user == name) {
						iziToast.error({
							title: "Esse nome de usuario já existe",
							position: "topRight"
						})
						userExist = true;
					}
				}

				if (!userExist) {
					iziToast.success({
						title: "Cadastro realizado com sucesso",
						position: "topRight"
					})
					
					var dataUsers = $("#cad").serializeArray();

					console.log(dataUsers);
					
					$.post("/confirmSingup",
						{
							name : dataUsers[0].value,
							sobrenome : dataUsers[1].value,
							password : dataUsers[2].value,
							email: dataUsers[4].value
						},

						function(data, status) {
							$("#logininput").val("").removeClass("validate valid invalid");
							$("#surnameinput").val("").removeClass("validate valid invalid");
							$("#senhainput").val("").removeClass("validate valid invalid");
							$("#senhainput2").val("").removeClass("validate valid invalid");
							M.updateTextFields();

							$("#loginBack").show();
						}

					);
				}
			}
		});
	});


	$("#checkFoda").click(function() {
		check = !check;
	});

	$("#loginBack").click(function() {
		window.location.replace("login.html");
	})


	function passwordCheck(password) {
		return lengthCheck(password, 8);
	}

	function lengthCheck(text, len) {
		if (text.length < len) {
			return false;
		}
		else {
			return true;
		}
	}

	function uperCaseCheck(text) {
		var prop = true;
		for (var i = 0; i < text.length; i++) {

		}
		return true;
	}





});



