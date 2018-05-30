$(document).ready(() => {
    
    $("#lostPassword").click(() => {
        var email = $("#emailInput").val();

        $.post('/findPassword', {"email": email}, (data, status) => {
            if (data == "false") {
                iziToast.error({
                    title: "Email não encontrado",
                    position: "topRight"
                });
            }
            else if (data == "true") {
                iziToast.success({
                    title: "Email enviado com sucesso",
                    position: "topRight"
                })
            }
            
        })
    })
})