$(document).ready(function(){

    $.get("/gameData", (data, status) => {
        var totalDias = 0;
        var idade = 0;
        var record = -1;

        for (var i = 0; i < data.length; i++) {
            totalDias += data[i].diasVividos;
            idade += data[i].idade;
            if (data[i].idade > record) {
                record = data[i].idade;
            }
        }

        $("#totaljg").attr("data-to", data.length);
        $("#totaldias").attr("data-to", totalDias);
        $("#totalidade").attr("data-to", idade);
        $("#recorde").attr("data-to", record)
        
    })
    
        
    // $("#totaljg").attr("data-to",jogadores);
    // $("#totaldias").attr("data-to",diasvivos);
    // $("#totalidade").attr("data-to",idadetotal);
    // $("#recorde").attr("data-to",record);


});