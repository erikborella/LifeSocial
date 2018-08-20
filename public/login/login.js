$(document).ready(function(){
    $('.modal').modal();
    $("#loginModal").modal("open");
});

$("#loginBtn").click(function() {
    var login = $("#loginForm").serializeArray();
    
    var username = login[0].value;
    var password = login[1].value;

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
        }
        
    });
    
    
});
