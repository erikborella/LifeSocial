$(document).ready(function(){
    $.get('/getUserdata',(lista,status)=>{
        var jogadores = lista.length;
        var diasvivos = 0;
        var idadetotal = 0;
        var record = 0;

        for(var i = 0; i < lista.length; i++){
            diasvivos += parseInt(lista[i].gameValues.diasVividos);
            idadetotal += lista[i].gameValues.idade;
             if(lista[i].gameValues.diasVividos > record){
                record = lista[i].gameValues.diasVividos;
             }

        }

        
        $("#totaljg").attr("data-to",jogadores);
        $("#totaldias").attr("data-to",diasvivos);
        $("#totalidade").attr("data-to",idadetotal);
        $("#recorde").attr("data-to",record);

    })

});
$("#botaomuitofoda").click(function(){
    var email = $("#email").val();
    var nome = $("#name").val();
    var msg = `Olá você acaba de se submeter a algo inutil, pois não enviaremos mais email contendo novidades pq é muito empenho<br>
    Obrigado pela compreensão<br>
    Equipe Life Social.`
    $.post("/zuero",{'email':email,'user':nome, 'msg':msg},(data,status) => {
        console.log(status);
        
    });
});