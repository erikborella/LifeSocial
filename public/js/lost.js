$(document).ready(() => {
    
    $("#lostPassword").click(() => {
        $.get("/getUserdata", (data, status) => {
            var userName = data;
            var index;
            var email = $("#emailInput").val();
            
            var userExist = false;
            for (var i = 0; i < userName.length; i++) {
                if (userName[i].dados.email == email) {
                    userExist = true;
                    index = i;
                }
            }

            if (!userExist) {
                iziToast.error({
                    title: "Endereço de email não encontrado",
                    position: "topRight"
                });
            }
            else {
                $.post("/findPassword",
                {
                    email: userName[index].dados.email,
                    password: userName[index].password
                }, (data, status) => {
                    iziToast.success({
                        title: "Email enviado com sucesso",
                        position: "topRight"
                    });

                    $("#backLogin").show();
                    
                })
            }
        })
    })




})