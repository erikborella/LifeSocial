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
        
            console.log(data);
            
            if (!data) {
                iziToast.error({
                    title: "Usuario ou senha incorretos",
                    message: "Por gentileza, tente novamente",
                    position: "bottomCenter"
                })
            }
            else {
                iziToast.success ({
                    title: "Bem vindo "+data.dados.nome
                })
    
                localStorage.setItem("sla", JSON.stringify(data));
            }
            
        });
    }
}

