//botão de cadastro
$("#singup").click(function() {
	makeSingUp();
})

//reazlizar cadastro quando pressionada enter
$("#inputVals").keypress(function(key) {
	if (key.keyCode == 13) makeSingUp();
})

// da uma recomendação do username
$("#surnameInput").change(function() {
	if (!$("#usernameInput").val()) {

		putUsername(($("#nameInput").val()+"."+$("#surnameInput").val()).toLowerCase(), 0);
		//  $("#usernameInput").val(($("#nameInput").val()+"."+$("#surnameInput").val()).toLowerCase());
	}
})

//verifica se o username já existe
$("#usernameInput").change(function() {
	$.get("/getUsernames", (database, status) => {
		var exist = false;
		for (var i = 0; i < database.length; i++) {
			if (database[i].username == $("#usernameInput").val()) {
				exist = true;
			} 
		}

		if (exist) {
			$("#usernameInput").removeClass("valid");
			$("#usernameInput").addClass("invalid");
		}
		else {
			$("#usernameInput").removeClass("invalid");
			$("#usernameInput").addClass("valid");
		}

	})
})

//verifica se as duas senhas digitadas estão iguais
$("#password2Input").change(function() {

	if ($(this).val() != $("#passwordInput").val() && $("#passwordInput").val()) {
		setTimeout(function() {
			$("#passwordInput").addClass("invalid");
			$("#password2Input").addClass("invalid");

			$("#passwordInput").removeClass("valid");
			$("#password2Input").removeClass("valid");
		}, 0)
	}
	else {
		$("#passwordInput").removeClass("invalid");
		$("#password2Input").removeClass("invalid");

		$("#passwordInput").addClass("valid");
		$("#password2Input").addClass("valid");
	}
	
	
})

$("#passwordInput").change(function() {

	if ($(this).val() != $("#passwordInput").val() && $("#passwordInput").val()) {
		setTimeout(function() {
			$("#passwordInput").addClass("invalid");
			$("#password2Input").addClass("invalid");

			$("#passwordInput").removeClass("valid");
			$("#password2Input").removeClass("valid");
		}, 0)
	}
	else {
		$("#passwordInput").removeClass("invalid");
		$("#password2Input").removeClass("invalid");

		$("#passwordInput").addClass("valid");
		$("#password2Input").addClass("valid");
	}
	
	
})

//abre os termos de uso
$("#useTerms").click(function() {
	window.open("./TermoDeUso.html");
})

// realiza o cadastro e verifica por erros
function makeSingUp() {
	var data = $("#inputVals").serializeArray();
	
	if (!validate(data)) {
		$.get("getUsernames", (database, status) => {			
			var exist = false;
			for (var i = 0; i < database.length; i++) {
				if (database[i].username == data[2].value) {
					exist = true;
				} 
			}
			
			if (exist) {
				showErrorMsg(["Nome de usuario já existente"]);
			}
			else {
				
				iziToast.success({
					title: "Cadastro realizado com sucesso",
					message: "Voce será levado para o jogo dentro de alguns segundos"
				})

				$.post("/singupData", data, (info, sss) => {
	
				})

				$.post("/login", {"username" : data[2].value , "password" : data[3].value}, (db, status) => {

					localStorage.removeItem("data");

					setTimeout(function() {
					
						var md = new MobileDetect(window.navigator.userAgent);
		
						if (md.mobile()) {
							localStorage.setItem("data", JSON.stringify(db));
							window.location.replace("Mobile.html")
						}
						else {
							localStorage.setItem("data", JSON.stringify(db));
							window.location.replace("Desktop.html")
						}
						
					}, 5000)

				})

			}

			
			
		})
	}
	
}

// verificação dos dados
function validate(data) {
	var isError = false;
	var errorMesagem = [];

	if (!data[0].value) {
		isError = true;
		errorMesagem.push("Digite o seu Nome");
	}

	if (!data[1].value) {
		isError = true;
		errorMesagem.push("Digite o seu Sobrenome");
	}

	if (!data[2].value) {
		isError = true;
		errorMesagem.push("Digite o seu nome de Login");
	}

	if (!data[3].value) {
		isError = true;
		errorMesagem.push("Digite a sua senha");
	}

	if (!data[4].value) {
		isError = true;
		errorMesagem.push("Confirme a sua senha");
	}

	if (!data[5].value) {
		isError = true;
		errorMesagem.push("digite o seu email");
	}

	if (data[3].value != data[4].value) {
		isError = true;
		errorMesagem.push("Senhas digitadas são diferentes");
	}

	if (data.length == 7) {
		isError = true;
		errorMesagem.push("Você não concordou com os termos de uso");
	}

	// if (!data[6].value) {
	// 	isError = true;
	// 	errorMesagem.push("Confirme que você é humano");
	// }
	


	if (isError) {
		showErrorMsg(errorMesagem);
	}

	return isError;

}

// mostra as mensagem de erros
function showErrorMsg(data) {
	var errors = [];
	for (var i = 0; i < data.length; i++) {
		errors += "*"+data[i]+"<br>"
	}

	iziToast.error({
		title: "Erros encontrados:",
		message: errors
	});
	
}

//recomendador de usernames
function putUsername(preName, preCont) {
	console.log(preName);
	
	$.get("/getUsernames", (database, status) => {
		var exist = false;
		for (var i = 0; i < database.length; i++) {
			if (database[i].username == preName+""+preCont) {
				exist = true;
			} 
		}

		if (exist) {
			putUsername(preName, preCont+1);
		}
		else {
			$("#usernameInput").val(($("#nameInput").val()+"."+$("#surnameInput").val()+""+preCont).toLowerCase());
		}

	})
}

