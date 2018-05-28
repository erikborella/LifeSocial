$(document).ready(function() {

	//Global vars

	console.log("Putzzzs");
	

	var check = false;
	var userName;

	//Events

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
			var email = $("#email").val();

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
			else if (!email) {
				iziToast.error({
					title: "Digite o email!",
					position: "topRight"
				});
			}
			else if (password != password2) {
				iziToast.error({
					title: "As senhas digitadas são diferentes",
					position: "topRight"
				})
			}

			else if (passwordCheck(password, true) != true) {}

			else if ($("#email").hasClass("invalid")) {
				iziToast.error({
					title: "Email invalido",
					position: "topRight"
				});
			}

			else if (!check) {
				iziToast.error({
					title: "Voce não concordou com os termos de uso",
					position: "topRight"
				})
			}
			else {

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
							$("#email").val("").removeClass("validate valid invalid");
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
	});

	$("#senhainput").change(function() {
		setTimeout(function() {
			var Pcheck = passwordCheck($("#senhainput").val(), false);

			if (Pcheck == true) {
				$("#senhainput").removeClass("valid");
				$("#senhainput").addClass("valid");
			}
			else {
				$("#senhainput").removeClass("valid");
				$("#senhainput").addClass("invalid");
				$("#passwordError").attr("data-error", Pcheck);
			}
		}, 10);
		
	});

	$("#senhainput2").change(function() {
		setTimeout(function() {
			if( $("#senhainput2").val() != $("#senhainput").val() ) {

				$("#senhainput2").removeClass("valid");
				$("#senhainput2").addClass("invalid");
				$("#password2Error").attr("data-error", "As senhas digitadas são diferentes");

			}
			else {

				$("#senhainput2").removeClass("valid");
				$("#senhainput2").addClass("valid");

			}
		}, 10);

	});

	$("#logininput").change(function() {
		setTimeout(function() {
			var exist = false;
			$.get("/getUserdata", (data, status) => {
				for (var i = 0; i < data.length; i++) {
					if($("#logininput").val() == data[i].user) {
						$("#logininput").removeClass("valid");
						$("#logininput").addClass("invalid");
						$("#userError").attr("data-error", "Esse nome de usuario já existe");
						exist = true;
					}
				}

				if (!exist) {
					$("#logininput").removeClass("invalid");
					$("#logininput").addClass("valid");
				}
 				
			});
		}, 10);
	});


	//Functions

	function passwordCheck(password, showError) {
		var passOkay = false;
		if (!lengthCheck(password, 4)) {
			if (showError) {
				iziToast.error({
					title: "A senha deve ser maior ou igual a 4",
					position: "topRight"
				});
			}
			return "A senha deve ser maior ou igual a 4";
		}
		else if (!uperCaseCheck(password)) {
			if (showError) {
				iziToast.error({
					title: "Sua senha deve ter uma letra em maiusculo",
					position: "topRight"
				});
			}
			return "Sua senha deve ter uma letra em maiusculo";
		}
		else if (!lowCaseCheck(password)) {
			if (showError) {
				iziToast.error({
					title: "Sua senha deve ter no minino uma letra em minusculo",
					position: "topRight"
				});
			}
			return "Sua senha deve ter no minimo uma letra em minisculo";
		}
		else if (!numberCheck(password)) {
			if (showError) {
				iziToast.error({
					title: "Sua senha deve ter no minimo um numero",
					position: "topRight"
				});
			}
			return "Sua senha deve ter no minimo um numero";
		}
		else {
			return true;
		}
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
		var prop = false;
		var leter = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y','X', 'Z'];
		for (var i = 0; i < text.length; i++) {
			for (var j = 0; j < leter.length; j++) {
				if (text.charAt(i) == leter[j]) {
					prop = true;
				}
			}
		}
		return prop;
	}
	
	function lowCaseCheck(text) {
		var prop = false;
		var leter = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y','x', 'z'];
		for (var i = 0; i < text.length; i++) {
			for (var j = 0; j < leter.length; j++) {
				if (text.charAt(i) == leter[j]) {
					prop = true;
				}
			}
		}
		return prop;
	}

	function numberCheck(text) {
		var prop = false;
		var leter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		for (var i = 0; i < text.length; i++) {
			for (var j = 0; j < leter.length; j++) {
				if (text.charAt(i) == leter[j]) {
					prop = true;
				}
			}
		}
		return prop;
	}





});



