$(document).ready(function(){
    $.get('/getUserdata',(lista,status)=>{
        var jogadores = lista.length;
        var diasvivos = 0;
        var idadetotal = 0;
        var record = 0;

        for(var i = 0; i < lista.length; i++){
            diasvivos += lista[i].dados.diasVividos;
            idadetotal += lista[i].dados.idade;
             if(lista[i].dados.diasVividos > record){
                record = lista[i].dados.diasVividos;
             }

        }
        $("#totaljg").attr("data-to",jogadores);
        $("#totaldias").attr("data-to",diasvivos);
        $("#totalidade").attr("data-to",idadetotal);
        $("#recorde").attr("data-to",record);

    })

});