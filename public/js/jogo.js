
// Inicia a tela basico do jogo

//variaveis usadas durante o jogo, inutil ainda
var INTERVAL;
var SAVER;

var name;

var idade;
var diasVividos;
var money;

var indexUser;

var fomebarL;
var saudebarL;

//colocar foto (em breve)
$("#fotoDiv").click(function() {
	$("#file").click();
});

//botão de sair
$("#sairBtn").click(function() {
	iziToast.show({
		title : "Tem certeza?",
		position: "center",
		theme: "dark",
		displayMode: 0,
		overlay: true,
		timeout: 9999999999,
		buttons: [
			['<button>Sim</button>', (instace, toast) => {
				instace.hide({transitionOut: 'fadeOutUp'}, toast);
				stopDay();
				stopSaver();
				//Não POG, Mas depende
				//Otimozado 100%-5
				//desfazer login

				INTERVAL = undefined;
				SAVER = undefined;
				idade = undefined;
				diasVividos = undefined;
				money = undefined;
				indexUser = undefined;
				fomebarL = undefined;
				saudebarL = undefined;

				$("#loginModal").modal("open");
				$(".gameTela").hide();
				esconderTudo();



			}],
			['<button>Não</button>', (instace, toast) => {
				instace.hide({transitionOut: 'fadeOutUp'}, toast);
			}]
		],
		
	});
});

$("#recomecarBtn").click(function() {
	iziToast.show({
		title : "Tem certeza?",
		position: "center",
		theme: "dark",
		displayMode: 0,
		overlay: true,
		timeout: 9999999999,
		buttons: [
			['<button>Sim</button>', (instace, toast) => {
				instace.hide({transitionOut: 'fadeOutUp'}, toast);
				
				// Pog/2 para sesetar tudo
				INTERVAL = 0;
				SAVER = 0;
				idade = 0;
				diasVividos = 0;
				money = 0;
				indexUser = 0;
				fomebarL = 100;
				saudebarL = 100;
				
				saveAll();

			}],
			['<button>Não</button>', (instace, toast) => {
				instace.hide({transitionOut: 'fadeOutUp'}, toast);
			}]
		],
		
	});
});


//função que inicia o usuario
function initGame(indexxer) {

  indexUser = indexxer;
  
	//coloca a barra do lado
	$('.sidenav').sidenav();
	//fecha o login
	$("#loginModal").modal("close");
	//mostra a tela do jogo
	$(".gameTela").show();

	//pega os dados no banco de dados
	$.get("/getUserdata", (data, status) => {

		//sabe aquelas variaveis lá em cima, então, aqui elas ganham utilidade
		idade = data[indexUser].gameValues.idade;
		diasVividos = data[indexUser].gameValues.diasVividos;
		money = data[indexUser].gameValues.money;

		fomebarL = data[indexUser].gameValues.fomebarL;
		saudebarL = data[indexUser].gameValues.saudebarL;

		name = data[indexUser].dados.nome;


		//coloca os dados na tela do jogo
		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ idade);
		$("#vivo").html("Dias vividos: "+ diasVividos);
		$("#money").html("Dinheiro: " + money);

		//faz os dias passarem
		passDay();
		//faz rodar o autosave
		saveCounter();

	});
}

//função que faz os dias passarem
function passDay() {
	function refreshData() {
		$("#anos").html("Anos vividos: "+ idade);
		$("#vivo").html("Dias vividos: "+ diasVividos);
		$("#money").html("Dinheiro: " + money);
	}

	INTERVAL =  setInterval(() => {
		diasVividos++;
		// Contador de anos
		if (diasVividos % 365 == 0) {
			idade++;
		}
		// Barra de fome
		if (fomebarL < 0 ) {
			fomebarL = 0;
		}
		else {
			$("#fomeBar").css("width", fomebarL-- +"%");
		}
		// Barra de comida
		if (saudebarL < 0) {
			saudebarL = 0;
		}
		else {
			saudebarL = saudebarL - 0.5;
			$("#saudeBar").css("width", saudebarL+"%");
		}

		refreshData();

	}, 100); //aqui ó é o tempo que passa os dias
}

//inicia o autosave
function saveCounter() {
	SAVER = setInterval(() => {
		saveAll();
	}, 10000) //aqui tbm é o tempo
}

//aqui salva os dados modificados
function saveAll() {
	var mdf = {
		"idade" : idade,
		"diasVividos": diasVividos, 
		"money": money, 
		"fomebarL": fomebarL,
		"saudebarL": saudebarL,
		"querry" : name
	}

	$.post("/updateData", mdf, (data, status) => {
		console.log(status);
	});
}

//faz os dias parare,
function stopDay() {
	clearInterval(INTERVAL);
}

//faz o autosave parrar
function stopSaver() {
	clearInterval(SAVER);
}


