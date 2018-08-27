//botão de login
$("#loginBtn").click(function() {
    makeLogin();
});

//fazer login com enter
$("#loginForm").keypress(function(key) {
    if (key.keyCode == 13) makeLogin();
})

//Transitor de slides
$(document).ready(function() {

    if (localStorage.getItem("errorLogin")) {
        localStorage.removeItem("errorLogin");
        console.error
        iziToast.info({
            title: "Error de Login",
            message: "Você precisa estar logado para acessar o jogo",
            position: "bottomCenter"
        })
    }

    var random = (Math.floor(Math.random() * 10)) + 1;
    $("#cardImage").attr("src", "imagesCard/card-image"+random+".jpg");
    var cont = 2;
    setInterval(function() {
        
        $("#cardImage").attr("src", "imagesCard/card-image"+cont+".jpg");
        cont ++;
        if (cont == 11) {
            cont = 1;
        }
    }, 30000)
});

//faz login
function makeLogin() {
    var login = $("#loginForm").serializeArray();
    
    var username = login[0].value;
    var password = login[1].value;

    if (!username || !password) {
        iziToast.error({
            title: "Campos não preenchidos",
            message: "Preencha-os por gentileza",
            position: "bottomCenter"
        })
    }
    else {
        $.post("/login", {"username" : username, "password" : password}, (data, status) => {
            
            if (!data) {
                iziToast.error({
                    title: "Usuario ou senha incorretos",
                    message: "Por gentileza, tente novamente",
                    position: "bottomCenter"
                })
            }
            else {
                // iziToast.success ({
                //     title: "Bem vindo "+data.dados.nome
                // })
                
                localStorage.removeItem("data");
                localStorage.setItem("data", JSON.stringify(data));
                
                var md = new MobileDetect(window.navigator.userAgent);

                if (md.mobile()) {
                    window.location.replace("Mobile.html")
                }
                else {
                    window.location.replace("Desktop.html")
                }

            }
            
        });
    }
}

